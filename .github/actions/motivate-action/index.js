const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");

async function run() {
  try {
    const token = core.getInput("github-token");
    const octokit = github.getOctokit(token);
    const { context } = github;

    // Check if the event is an issue with the "motivate" label
    if (
      context.payload.action === "labeled" &&
      context.payload.label.name === "motivate"
    ) {
      console.log("Fetching a motivational quote...");

      // Fetch quotes from API
      const response = await axios.get("https://type.fit/api/quotes");
      const quotes = response.data;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      console.log(`💡 Motivational Quote: "${randomQuote.text}" - ${randomQuote.author || "Unknown"}`);

      // Optionally post a comment on the issue with the quote
      await octokit.rest.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.payload.issue.number,
        body: `💡 **Motivational Quote:**  
        _"${randomQuote.text}"_  
        **- ${randomQuote.author || "Unknown"}**`
      });
    } else {
      console.log("No 'motivate' label detected, skipping action.");
    }
  } catch (error) {
    core.setFailed(`Error: ${error.message}`);
  }
}

run();

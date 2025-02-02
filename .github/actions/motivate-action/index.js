const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");

async function fetchQuote() {
  try {
    console.log("Fetching a motivational quote...");

    // ✅ Use the correct endpoint
    const response = await axios.get("https://thequoteshub.com/api/random");
    const quoteData = response.data;

    return {
      text: quoteData.quote || "Stay positive and keep moving forward!",
      author: quoteData.author || "Mister Wonderfull"
    };

  } catch (error) {
    console.error("❌ Failed to fetch quote:", error);
    return { text: "Stay positive and keep moving forward!", author: "Other" };
  }
}

async function run() {
  try {
    const token = core.getInput("github-token");
    const octokit = github.getOctokit(token);
    const { context } = github;

    // Check if the event is an issue labeled "motivate"
    if (
      context.payload.action === "labeled" &&
      context.payload.label.name === "motivate"
    ) {
      const quote = await fetchQuote();

      console.log(`💡 Motivational Quote: "${quote.text}" - ${quote.author}`);

      // Post comment on the issue with the quote
      await octokit.rest.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.payload.issue.number,
        body: `💡 **Motivational Quote:**  
        _"${quote.text}"_  
        **- ${quote.author}**`
      });
    } else {
      console.log("No 'motivate' label detected, skipping action.");
    }
  } catch (error) {
    core.setFailed(`Error: ${error.message}`);
  }
}

run();

# github-exercises

### 1. Crea un workflow CI para el proyecto de frontend - OBLIGATORIO

There is one logic mistake in the front-end in `start-game.spec.tsx`, it should give you the output of one item and we have 2 topics here `.mockResolvedValue(['topic A', 'topic B']);`. You could or remove one topic from there or give the option to give 2 results here: `expect(items).toHaveLength(1);` In my case I will remove one of the topics.

- Link for working Pipeline: https://github.com/FictionFics/github-exercises/actions/runs/13097402677/job/36541381050


### 2. Crea un workflow CD para el proyecto de frontend - OBLIGATORIO

I created a `cd.yaml` where I included the write permissions for the `GITHUB_TOKEN` and I added a lower case step for my repo name, because it cointains upper case and it was giving me errors:
```
- name: Convert repository name to lowercase
        run: echo "REPO_NAME=${GITHUB_REPOSITORY,,}" >> $GITHUB_ENV
```

- Link for working Pipeline: https://github.com/FictionFics/github-exercises/actions/runs/13097618122/job/36541842474
- Published Image: https://github.com/FictionFics/github-exercises/pkgs/container/github-exercises%2Fhangman-front

### 3. Crea un workflow que ejecute tests e2e - OPCIONAL

In this exercise I added a new step in the `cd.yaml` to add in the github repository the `hanman-api` because we only did the front-end one. Apart from this I added a new yaml: `e2e-tests.yaml` and I need to the same as previous exercise to lower case my repo name.

- Link for working Pipeline: https://github.com/FictionFics/github-exercises/actions/runs/13097946502/job/36542585917
- Published Hangman-api: https://github.com/FictionFics/github-exercises/pkgs/container/github-exercises%2Fhangman-api

### 4. Crea una custom JavaScript Action - OPCIONAL

This exercise was a bit tricky, because the webpage for motivational phrases was not longer exist and I need to find a new one that could work more or less. Other thing I need to install npx to create a index.js because was not able to read the modules. I will explain better what I did:

1- I created an `actions` folder and `motivate-action` inside it, I added there the `index.js`, `actions.yaml` and `package.json`
2- I added a new workflow with the name `motivate.yaml` where is going to be executed each time that a motivate Label is added into a issue.

- Link of a worked pipeline: https://github.com/FictionFics/github-exercises/actions/runs/13102198930
- Link of the example issue: https://github.com/FictionFics/github-exercises/issues/3

### Screenshots from issues
![alt text](image.png)
![alt text](image-1.png)
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

Crea un workflow que se lance de la manera que elijas y ejecute los tests e2e que encontrarás en [este enlance](../03-github-actions/.start-code/hangman-e2e/e2e/). Puedes usar [Docker Compose](https://docs.docker.com/compose/gettingstarted/) o [Cypress action](https://github.com/cypress-io/github-action) para ejecutar los tests.

#### Como ejecutar los tests e2e

* Tanto el front como la api se deben estar corriendo

```bash
docker run -d -p 3001:3000 hangman-api
docker run -d -p 8080:8080 -e API_URL=http://localhost:3001 hangman-front
```

* Los tests se ejecutan desde el directorio `hangman-e2e/e2e` haciendo uso del comando `npm run open`

```bash
cd hangman-e2e/e2e
npm run open
```
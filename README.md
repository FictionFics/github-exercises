# github-exercises

### 1. Crea un workflow CI para el proyecto de frontend - OBLIGATORIO

There is one logic mistake in the front-end in `start-game.spec.tsx`, it should give you the output of one item and we have 2 topics here `.mockResolvedValue(['topic A', 'topic B']);`. You could or remove one topic from there or give the option to give 2 results here: `expect(items).toHaveLength(1);` In my case I will remove one of the topics.

Link for working Pipeline: https://github.com/FictionFics/github-exercises/actions/runs/13097402677/job/36541381050
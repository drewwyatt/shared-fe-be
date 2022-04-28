# (_A_ way to) Share backend code with Create React App

## Move everything into the `src` directory

I'm certain there are probably ways to avoid this, but as long as you are fine with give CRA [a single index file](src/index.ts) so that it knows how to find your frontend code, then this is relatively low effort.

Once that was done, it kinda _just worked_. You can see that [`sayHello`](src/shared/say-hello.ts) runs in both [backend/index.ts] and [`frontend/App.tsx`](src/frontend/App.tsx) by running:

```bash
npm start # starts the react-scripts server: you can see "hello, on frontend and the backend." underneath the spinning logo.
```

```bash
npm run start:backend # should print "hello, on frontend and the backend." in your console.
```

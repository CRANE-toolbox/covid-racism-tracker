# CRANE (Crisis Racism And Narrative Evaluation)

![CRANE thumbnail](https://github.com/CRANE-toolbox/covid-racism-tracker/blob/master/thumbnail.jpg?raw=true)

## Code Overview

The "main" of this CRA is in App.tsx(even though this actually called on index.tsx you should not touch that one). `App.tsx` can either have a bunch of react components and JSX(like it does right now) or expert one or more react components that then handle the more specific parts of code.

### Deployment
Deployment happens automatically via Github Actions when a push to master occurs. Changes are compiled then pushed to the hosting provider. You can also do a manual build and publish if you have the 
wrangler CLI installed using the following npm script `npm run site`.
#### Staging Deployment
In addition, there is a staging environment available via the following npm script `npm run staging` which pushes changes to `https://crane-staging.iansaucy.workers.dev`. Alternatively changes can be pushed manually via `wrangler publish --env staging`

### The charts
in `src/charts` live a few react components, they're basically just wrappers on the `nivo.rocks` library that we're using for data visualization but their goal is to allow easy expansion in the future.

### The wrappers for the charts
Located in `src/components` is a `ChartWithTitles.tsx` which is well, just that, a chart with a title. Pass it any chart(Anything that derives from `React.Node`) and it will throw the passed child and the title together into a single component. Look at the interface for the optional params as well, you can specify some width and height options.

### The data

Data is currently NOT loaded from an API, it just lives in a Typescript file as an array. The format of the data is VERY important, it needs to be exactly like the two examples that exist. It should also be a variable that is `exported` so that yuo can import the variable where needed as pass to the charts.

#### Specific Variables
Current the variable `data` corresponds to the first graph on the page, and `areaBumpData` corresponds to the second area bump graph. Better naming schemes would be highly recommended.

### CSS

I(Ian) am no CSS expert, it's like the bane of my existence. The little CSS that exists right now is n `App.css` and would make any true front end dev cry in pain.

## I want to add something to the site...how?

Hey, that's awesome! I am sorry you're stuck with my mediocre code. Below is an outline of what you should do:

1. Make sure you have a React dev system setup, a good start is to follow a `create-react-app` tutorial, specifically a typescript one since that is what this project is written in.
2. Make sure you have a working cloudflare wrangler setup, this is cloudflares system for hosting static sites like this one. A good tutorial to follow is thing one here, [create-react-app](https://developers.cloudflare.com/workers/tutorials/deploy-a-react-app)
3. Yay you got things configured! Now you can start doing some local dev work on the site until you like the changes. Start by getting the node server running by using `npm run start` which will build the project and then open your browser. As you make changes, your browser will auto-refresh. Sometimes a hard refresh is need though, or a server restart if you really made a big code error.
4. Now that you've made some changes, you want them to go live! Great! Stop the server and run `npm run site` which will build and then call the `wrangler` to push the site online. Refresh the site and you should see the changes(it might require dumping cache or using incognito)

## I want to add new data...

Awesome, a little bit easier but still requires the above setup. In place of actually changing visual components, you're going to change the data or variables in the `src/resources/data.ts` file. Otherwise, follow the above directions.

## Words, how do I add words?

Well uh, I had not gotten this far. I'd recommend storing the text in variables similar to the way it is done for the graphs. Then dropping it directly into some styled `<div>` in `App.tsx`. You can also break it out further or built a react component to reuse if there is something you want for each text block etc.

## Project Bootstrapping

This projected was created with `create-react-app` with a typescript template. In addition, it uses the `ant` design library with `less` and `css-modules`. This was parially setup using the docs from `ant` and following [this](https://www.aleksandrhovhannisyan.com/blog/dev/how-to-set-up-react-typescript-ant-design-less-css-modules-and-eslint/) tutorial.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

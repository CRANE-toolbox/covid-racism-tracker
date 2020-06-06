# CRANE (Crisis Racism And Narrative Evaluation)

![CRANE thumbnail](https://github.com/CRANE-toolbox/covid-racism-tracker/blob/master/thumbnail.jpg?raw=true)

## Code Overview

The website is written in Typescript and based off a CRA template. The central part of the website lives in `pages/MasterPage.tsx`. Pages are located under `/pages`, components under `/components` and assets are located in `/assets` along with an `assets.index.ts` file that exports each asset as a basic central asset manager. 

## Requirements

- Node >= 10
- `npm` >= 6
- Wrangler CLI(If you want to deploy to CloudFlare

## Quick Setup
1. `npm install`
2. `npm start`
3.  Code!

### Main Libraries & Frameworks

The project was bootstrapped with CRA and uses Ant Design as a basic styling framework -- although many styles are overridden. 

We're also using Nivo.rocks for our graphs -- we've customized the graphs using themes defined inline for the graphs under `/charts`.

Styling is provided via `less` modules and type checked if you have VS Code.

### Known Issues

The only known issue currently is that the graphs do not always render for Safari based browsers(Mac, iPhone, iPad etc). We think this is related to the DOM life cycle and the content of the modal being 
rendered before it is displayed. But we have not had time to further investigate. 


### Deployment
Deployment happens automatically via Github Actions when a push to master occurs. Changes are compiled then pushed to the hosting provider. You can also do a manual build and publish if you have the wrangler CLI installed and configured with an API key using the following npm script `npm run site`.
#### Staging Deployment
In addition, there is a staging environment available via the following npm script `npm run staging` which pushes changes to `https://crane-staging.iansaucy.workers.dev`. Alternatively changes can be pushed manually via `wrangler publish --env staging`

### The charts
in `src/charts` live a few react components, they're basically just wrappers on the `nivo.rocks` library that we're using for data visualization but their goal is to allow easy expansion in the future.

### The wrappers for the charts
Located in `src/components` is a `ChartWithTitles.tsx` which is well, just that, a chart with a title. Pass it any chart(Anything that derives from `React.Node`) and it will throw the passed child and the title together into a single component. Look at the interface for the optional params as well, you can specify some width and height options.

### The data

Data is currently NOT loaded from an API, it just lives in a Typescript file as an array. The format of the data is VERY important. It should also be a variable that is `exported` so that you can import the variable where needed as pass to the charts.

### Why we're not using an API

Clearly the question arises as to why aren't we using an API to serve the data for the graphs. As of right now, our data analysis pipeline is not automated so it requires manual processing to prepare the data for the website. Given this and because the website is a prototype we decided that it would be better to dedicate our resources to other things.

### Code Style
There is no super strict code style right now. Styles for pages and components should live in `/styles` and import the global style sheet. Pages, components, charts and assets all belong in their respective folders. This is a Typescript project so items should be type enforced whenever possible.

#### React 

The project is running on React 16 -- as such you should follow modern design patterns. This means using Hooks, Effects and Contexts whenever possible in place of their classed versions. Most components should also probably be functional (classless) components as well.

## I want to add something to the site...how?

Hey, that's awesome! I am sorry you're stuck with my mediocre code. Below is an outline of what you should do:

1. Make sure you have a React dev system setup, a good start is to follow a `create-react-app` tutorial, specifically a typescript one since that is what this project is written in. Once you have this setup you can get off to the races with local development. 

If you want to deploy from your local machine you need the follow: 

1. Make sure you have a working cloudflare wrangler setup, this is cloudflares system for hosting static sites like this one. A good tutorial to follow is thing one here, [create-react-app](https://developers.cloudflare.com/workers/tutorials/deploy-a-react-app)
2. Yay you got things configured! Now you can start doing some local dev work on the site until you like the changes. Start by getting the node server running by using `npm run start` which will build the project and then open your browser. As you make changes, your browser will auto-refresh. Sometimes a hard refresh is need though, or a server restart if you really made a big code error.
3. Now that you've made some changes, you want them to go live! Great! Stop the server and run `npm run site` which will build and then call the `wrangler` to push the site online. Refresh the site and you should see the changes(it might require dumping cache or using incognito)

## I want to add new data...

Awesome, a little bit easier but still requires the above setup. In place of actually changing visual components, you're going to change the data or variables in the `src/resources/data.ts` file. Otherwise, follow the above directions.


## Project Bootstrapping

This projected was created with `create-react-app` with a typescript template. In addition, it uses the `antD` design library with `less` and `css-modules`. This was partially setup using the docs from `ant` and following [this](https://www.aleksandrhovhannisyan.com/blog/dev/how-to-set-up-react-typescript-ant-design-less-css-modules-and-eslint/) tutorial.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Icons made by Freepik from [Flaticon](www.flaticon.com)

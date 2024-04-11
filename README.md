# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Deploy app to GitHub Pages
GitHub offers a free project page for each repository. You already know how to use it for static pages and basic react pages. However, for a single page app using react-router for front-end routing, we need to add some more configuration to redirect URLs back to the index.html so the app will function correctly.

The process is documented in detail on https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom and https://github.com/rafgraph/spa-github-pages.

We will go through it together for our movie finder 2 app.

======================================================
Note for Windows users!
There has been cases where Windows computer cannot run the gh-pages package and runs into errors. In this case, you can build the app locally by running npm run build or yarn build, then upload the files in the generated build/ folder manually to your GitHub repository's gh-pages branch.
======================================================
Add gh-pages branch
We will start by creating a git branch called gh-pages. After you created the branch, remember to push it to GitHub.
git push origin gh-pages
Set your GitHub repository's pages to use gh-pages branch
We need to set our GitHub repository to use the gh-pages branch for building our app. Go to the Settings page of your GitHub repository, click the "Pages" tab.

Under "Source", select "Deploy from a branch".

Under "Branch", select "gh-pages".

Add homepage in package.json
We need to add the GitHub project pages URL to our package.json so create-react-app will configure our built app correctly for GitHub pages.

In package.json, add the homepage property.
json
{
  "name": "first-react-app",
  "version": "0.1.0",
+ "homepage": "https://altcademy.github.io/first-react-app/",
  "private": true,

Remember to use your GitHub page URL, you can find it in your GitHub repository's settings, under the "Pages" tab.

Install gh-pages package
We will now install the gh-pages package to help with deploying to GitHub pages.
npm install --save-dev gh-pages
or
yarn add gh-pages --dev
Make sure you use the same package manager that you were using previously.

We added --dev to yarn add and changed --save to --save-dev. This will add the package to dev dependencies instead of dependencies. Dev dependencies is where we add packages that are only used in development environments only. Since gh-pages package isn't used in the app, we don't need it to be in the dependencies object.

You won't really tell the difference unless you deploy the app to a hosting service like heroku, where the server will install all the packages and create a build file on the server every time you push your changes. On a hosting service like heroku, it will only install the packages under dependencies, and skip those in dev dependencies.
Add deploy scripts in package.json
We need to add one line of code in the "scripts" object of package.json. This is used to execute the gh-pages package after building the app, then push to the gh-pages branch on GitHub. Don't include the "+" when you add the script though, it's just to show you which lines to add.
json
"scripts": {
+ "deploy": "npm run build && gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
Change "npm run build" to "yarn build" if you are using yarn.

Deploy the app to GitHub
We can now try deploying the app. Run the following command in your terminal.
npm run deploy
or
yarn deploy
After deploying, your gh-pages branch on GitHub should only contain the build files.

Go to the GitHub page URL and you will see the app showing a 404 Not Found error.

Create a 404.html file
In the "public" folder of your app, create a 404.html file and paste the following code.
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Single Page Apps for GitHub Pages</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current url and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new url with only a query string and hash fragment,
      // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
      // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
      // Note: this 404.html file must be at least 512 bytes for it to work
      // with Internet Explorer (it is currently > 512 bytes)
      // If you're creating a Project Pages site and NOT using a custom domain,
      // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
      // This way the code will only replace the route part of the path, and not
      // the real directory in which the app resides, for example:
      // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
      // https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
      // Otherwise, leave pathSegmentsToKeep as 0.
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>

Configure react-router to use a basename
Since we are deploying this as a GitHub project page, the root URL of the app is a sub directory and we need to configure react-router to use that as the root URL instead of the pages root domain.

In src/App.js file, add basename="/first-react-app" to the Router tag. Make sure you replace the path with your app's GitHub repo name. It needs to match the URL of your GitHub repository's project page URL.

For example, ours is https://altcademy.github.io/first-react-app/, so we write "/first-react-app" as the basename value.
const App = () => {
  return (
    <Router basename="/first-react-app">

Add redirect code in index.html
The last step is to add some code to public/index.html to handle the redirected path generated from 404.html.

Add the following code before the closing </head> tag of your public/index.html file.
html
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script checks to see if a redirect is present in the query string,
  // converts it back into the correct url and adds it to the
  // browser's history using window.history.replaceState(...),
  // which won't cause the browser to attempt to load the new url.
  // When the single page app is loaded further down in this file,
  // the correct url will be waiting in the browser's history for
  // the single page app to route accordingly.
  (function(l) {
    console.log(l.search)
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>

Deploy again
We are ready to deploy to GitHub again, run the deploy code.
npm run deploy
or
yarn deploy
You should see the 404.html file pushed to GitHub.

When you visit your GitHub project page, the app should be working correctly.

https://altcademy.github.io/first-react-app/
https://altcademy.github.io/first-react-app/
https://altcademy.github.io/first-react-app/

https://altcademy.github.io/first-react-app/movie/tt2294629/
https://altcademy.github.io/first-react-app/movie/tt2294629/
https://altcademy.github.io/first-react-app/movie/tt2294629/

When you refresh your browser on a movie page, the redirect code will make sure your app loads correctly.

The last thing to do is to create another git branch to store all these changes, "gh-pages-source" would be a decent branch name. Remember to commit and push to GitHub.

Configuration checklist
1. Add homepage attribute to package.json
2. Add basename attribute to <Router> in App.js
3. Add 404.html with script
4. Add redirect script to index.html

You can find the source code for this walkthrough on https://github.com/Altcademy/first-react-app/tree/gh-pages-source.

======================================================
Note for Windows users!
There has been cases where Windows computer cannot run the gh-pages package and runs into errors. In this case, you can build the app locally by running npm run build or yarn build, then upload the files in the generated build/ folder manually to your GitHub repository's gh-pages branch.
======================================================

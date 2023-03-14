# Deploying to Netlify

Before deploying, you'll need to have a new Database on Atlas.

And before anything, when deploying, remember this: 
## Remember

## Your

## .env FILE

- If you did not create an account on Atlas before, [follow those guidelines](https://github.com/Flow-Fly/webdev-161/blob/main/deploy-atlas.md).
- If you already have an account, you need a new database.
  - Connect to your account, click on your project: ![](./images/first.bmp)
  - Click on new project ![](./images/second.bmp)
- Follow the steps in the previous guidelines.


## Deploying your React frontend to Netlify

---

## Prerequisites 📄

- A MongoDB Atlas database
- A REST API backend deployed to Render
- A React frontend repository

---

## Signup to Netlify 👋

[Netlify](https://www.netlify.com/)

- Sign in with Github (You will need to link your Netlify account to your Github account anyway)

You should have something like this:

![netlify team](https://i.imgur.com/3jh39kB.png)

---

## Add a new project 🤗

Add your project from the dashboard (Import an existing project)

![alt](https://i.imgur.com/LZDSxUy.png)

---

## Import your project

![alt](https://i.imgur.com/Z8ffG8J.png)

---

## Connect to Github and Authorize Netlify

- Now you should select your frontend repository 😁
- Can't see you repository?

  > [Configure Netlify on Github](https://github.com/apps/netlify/installations/new)

- Go to repository access
  ![alt](https://i.imgur.com/f7yhGDF.png)

- Select a repository
  ![alt](https://i.imgur.com/5SLBBuo.png)

- Done, don't forget to Save 🤔 !

---

## Specify the build settings

The defaults should work 😁
The deploy will start now!

## You will probably want to rename your project

- Site settings
  ![alt](https://i.imgur.com/EpwqVLS.png)

---

- Change site name

![alt](https://i.imgur.com/lxYtA79.png)

## Deployments issues 😨

- Sometime there is an issue in deployment and the deploy fails

> Try to fix the issues locally

You can test the build process locally by running `npm run build` in your frontend directory.
When the issue is fixed, deploy again!

Go to the **Deploys** Tab, click on **Trigger deploy** and **Deploy site**

![alt](https://i.imgur.com/sXeS2nH.png)

## Add your environment variables

- Go to the Site settings, then in the build and deploy, click on environment and add your backend url (The render url).
  ![alt](https://i.imgur.com/94p8sIe.png)

---

## React router problems

If you navigate to a page away from the root route and then refresh, you'll encounter an error page.
![alt](https://i.imgur.com/qfaiBbO.png)

The fix is relatively simple.
Netlify needs to know that it should redirect traffic to any of your routes onto the `index.html` page, where React is loaded and will handle it.

create a file named `_redirects` (no extension needed) in the `/public` folder.
in the `/public/_redirects` file, write `/* /index.html 200`

Add this file to git and push it!

## CORS

Cross Origin Resource Sharing

You now have your website in two places, e.g. funky-web.onrender.com and funky-web.netlify.app. Modern web browsers will block a request from a frontend unless the backend matches the origin, or if the origin is specified as allowed.

Be sure to add your `ORIGIN` environment variable to your backend in render!

## Treating warnings as errors

Netlify will treat any warning it sees on the console as an Error and will fail the build process.

Two solutions for that:

- Have no warnings in the console!
- Go to the build settings ![alt](https://i.imgur.com/sP6rq8z.png)

Change the build command to `CI=false npm run build`
![alt](https://i.imgur.com/8SUIGvC.png)

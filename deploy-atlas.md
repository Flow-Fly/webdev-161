# MONGO DB

![mongodb](https://miro.medium.com/max/1000/1*xOVUR3DMDUfaguq5cIDAsw.jpeg)

> ## [Create an account on mongodb's website](https://www.mongodb.com/cloud/atlas/register)

## Welcome to Atlas page

- What is your goal? Build a new Application
- What type of application are you building? Other
- What is your preffered language? JavaScript 😁
- Finish!

## Deploy a cloud database

- Select the FREE tier

## Create a shared Cluster

- Pick AWS || Google Cloud || Azure
- Select the location closest to you
- Cluster Tier, no change
- Additional settings, no change
- Cluster Name, rename it if you want
- Create Cluster!

## Security Quickstart

- Select Username and Password and choose a username and password.
- Note that password for now if you used the random generator.
- Create User.

## Click on Network Access under 🔒️ Security

- Add IP address
- Click Allow access from anywhere

## Click on Database under Deployment

- It might take some time to create your cluser, if it's saying that "Your Cluster is being created", you'll need to wait for it to be created.
- Once created, click on Connect
- Choose Connect Your Application
- Make sure that the "Driver" is Node.js
  > - ❗️❗️❗️Copy the connection String and save it in a memo for the moment, replace aswell the `<password>` with the password you created earlier. This is the URI for you database.❗️❗️❗️

# HEROKU

![heroku](https://memegenerator.net/img/instances/67528062.jpg)

> ## [Create an account on heroku](https://signup.heroku.com/)

> ## [Download the HEROKU CLI](https://devcenter.heroku.com/articles/heroku-cli)

> ## [Log-in to heroku](https://id.heroku.com/login)

## Go to your dashboard

- Click on create New App and create you application, select the name of your application carefully
- Go into the settings and search for Config Vars
- Reveal them and all of your environment variables except for :
  - your PORT variable
  - your `MONGO_URI` variable (We will add it after)
- Once done, add your `MONGO_URI`, it should be the string we saved from Mongo Atlas earlier, be sure that your password is actually displayed.

## Connect your repository to Heroku

- Use `heroku login` in your terminal, it will open up your browser and let you connect.
- Once done, from your terminal inside of your project directory use `heroku git:remote -a <The-name-of-your-app>`.
- Check if everything went right using `git remote -v`, you should see 2 remotes named `origin` and 2 named `heroku`.
- Push your code to heroku using `git push heroku`

> When working on your project, you should keep pushing to your github, using the workflow seen together. Once your code is ready, you can push it to Heroku

## Usefull Heroku commands

- `heroku logs --tail` allow you to print the received requests and errors happening in the server, usefull to debug your live application if you can't reproduce the error locally!

## Executing your seed from heroku

- To access the heroku shell in your remote server, run `heroku run bash` after a few seconds you will be remotely in your server and able to run you seed using `node <your-seed>/<path.js>`

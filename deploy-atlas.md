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

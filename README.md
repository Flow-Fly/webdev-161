# Welcome to WebDev 161 Paris

Hello Ironhacker's!

Starting on the 16th January 2023, we'll have 9 weeks to become full-stack web developers 😌.

## Notes

You can find a nice version of this repository at [flo-a.dev/webdev-161](https://flo-a.dev/webdev-161).
All of the code done in class can be found in the [_includes folder](_includes/code/)

## Who's the team?

Your instructional team includes:

> - Florian Aube
> - Haroun Boudour
> - Ines Zallouz
{: .prompt-info }

## Using this repository

This is a github repository full of notes, examples, and tools for Ironhack WebDev 161.

We'll have the latest examples from class,
as well as a description of the day's main topics,
and links to useful external resources.

### Staying up-to-date
<!--  -->
> What is the first thing you should do?
{: .prompt-tip }

The very first thing would be to make a clone of this repository (**a clone is not a fork**).
To do so you can run

```sh
git clone https://github.com/Flow-Fly/webdev-161.git
```

You can get the latest changes of this repository by running while inside of the webdev-161 folder.

```sh
git pull
```

You can open this repository in Visual Studio Code by running

```sh
code .
```

from the command-line.

### Where is the code seen during classes?

Go to `_includes/code`{: .filepath}, you will have all of the code seen in class classified by weeks and days 😎.

### In case of issues pulling latest changes

In case you need to clear any local changes you have made,
you can run `git stash`, then perform the `git pull`,
and finally restore your changes with `git stash pop`:

```sh
git stash
git pull
git stash pop
```

## Script helpers

This repo comes with a script helper: `students.sh`. Run it and see. This is mainly intended for teaching team use.

### Generating groups

Run `./students.sh groups 3` to generate groups of three.

### Checking morning sunshines

Run `./students.sh sunshine` to find out who is doing morning sunshine next!

### Cloning lab repos

If you want a list of commands that can clone all the lab forks for every student, run `./students.sh lab <lab-repo-name>`. E.g. `./students.sh lab lab-css-instagram-clone`.

You can copy the printed commands and run them wherever you store cloned labs.

### Viewing github profiles and projects

Try running these to open up students' github profiles and repositories in your browser.

```sh
./students.sh github john
```

```sh
./students.sh project alice
```

View all the project URLs with

```sh
./students.sh list table
```

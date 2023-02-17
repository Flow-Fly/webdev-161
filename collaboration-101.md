# How-to: Collaboration

So, you want to be a great collaborator and work efficiently?
**We got you covered!**

Here is a rather simple list of steps to follow.

- Create a Github repository
- Invite your collaborators <img height=300 src='https://i.imgur.com/Wb7XhGz.png'/>
- Whenever you work on a feature, create a new branch dedicated to it.

```
git checkout -b name-of-your-branch
```

> To switch between different branches, you can either use `git switch name-of-branch` or `git checkout name-of-branch`

- When you're done working on said feature, push it to your repository. If the branch did not exist remote, it will be created.
- Go to your repository and do a pull request (PR), your collaborator must check your work, do any merge that need to be done, validate the pull request and delete the remote branch (It's easy and guided.)
- You now know how to collaborate!

## Debug-zone

- I pushed my code to main/master intead of my branch!

  > Let's protect the main branch!
  > <img src="https://i.imgur.com/SvNc5x7.png"/>
  >
  > - Branch name pattern should be main (or master if using master)
  > - Check Require a pull request before merging
  > - Do not allow bypassing the above settings


**Congrats, you can't push to main anymore! 🥳**

- I forgot to create my branch, I wrote code on main and would like to not start over 😔
  > You can put all of your modification in a chest and open the chest in the newly-created branch ! Use `git stash` while on the main branch, switch to the branch you need to work from and then use `git stash pop`
  - That's great but I did add the code and commited before that and can't use `git stash`
    > Revert you commit using `git reset --soft HEAD~1` and follow the previous step

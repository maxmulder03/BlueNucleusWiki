# Git Good At Git
---

*This page contains a list of resources to go through to learn to be productive with Git & some useful commands I've found to be useful in my day to day.*

## Git Branching Walkthrough
---
[Learn Git Branching Game](https://learngitbranching.js.org/?locale=en_US)

## My Typical Pull Request Workflow
---
This example uses the [BlueNucleusWebApp](https://github.com/maxmulder03/BlueNucleusWebApp) repo as an example & walks you through how I typically implement a feature.

### 1. Clone the repo
```bash
git clone https://github.com/maxmulder03/BlueNucleusWebApp.git
```

### 2. Create a new local branch to work on. 
**<feature-branch-name>** can be anything but I usually use the github issue or JIRA Ticket name. ex: #18
```bash
git checkout -b <new-branch-name> 
```

### Make some changes & commit those changes  
* I typically commit anything once I get to some "good" state that I want to save. That way I can easily go back to this point if the next thing I'm implementing is working out how I'd like.
```bash 
git add . # Replace . with the file(s) you want to commit 
git commit -m "<commit-message>"
```
### 4. Repeat step 3 while pulling in changes from main as you work 

### 5. Prepare changes for a pull request
```bash
git checkout <feature-branch-name>
git rebase -i main
```
This will open interactive rebase mode where you can combine your commits into a single commit. It will look something like this.
```bash
pick abc123 Commit one
squash def456 Commit two
squash ghi789 Commit three
```
You'll pick a commit to keep and squash the others. This maintains all the changes in each commit but will put them in a single commit that you can name appropriately.




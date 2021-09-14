# Initializing a Git local repository

## First, Your Identity

The first thing you should do when you install Git is to set your user name and email address. This is important because every Git commit uses this information, and it's immutably baked into the commits you start creating:

```bash
$ git config --global user.name "your username"
$ git config --global user.email "your email"
```

> Use your Github email and username so we can link both

you need to do this only once if you pass the `--global` option, because then Git will always use that information for anything you do on that system.

![identity](https://media.giphy.com/media/3ohuPzo9wLP1n0O4Q8/giphy.gif)

<br>

## Local implementation of using git and version control

inside your **terminal**, follow the next commands:

```bash
cd Desktop
mkdir FOLDER_NAME
cd FOLDER_NAME
ls
touch file1.txt <!--then add some text-->
git init
ls -a <!-- .git is used to track and commit your changes and to perform version control-->
git status
git add file1.txt
git status
git commit -m "complete my first file"
git log
touch file2.txt file3.txt <!--then add some text-->
git status
git add .
git status
git commit -m "complete my second and third files"
git log
```

## What is GitHub?

### the largest host of source code in the world

The world's leading software development platform. GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private projects.

### Open Source

Open source refers to any program whose source code is made available for use or modification as users or other developers see fit. Open source software is usually developed as a public collaboration and made freely available.

## How to create a remote repository?

1. create a

  <span style="font-weight: bold;">repository</span>

2. <span style="font-weight: bold;">clone</span>

  the repo you've created git 4\. move into the newly created directory

3. raise your

  <span style="font-weight: bold;">issues</span>

  on the work to be done

4. create a new

  <span style="font-weight: bold;">branch</span>

  with a unique and descriptive name

5. leave the

  <span style="font-weight: bold;">master branch</span>

  by switching to the new branch you have just created

6. write your code
7. add the new files to the

  <span style="font-weight: bold;">staging area</span>

8. <span style="font-weight: bold;">commit</span>

  your changes

9. <span style="font-weight: bold;">push</span>

  your local version up to GitHub

10. create a

  <span style="font-weight: bold;">pull request</span>

11. wait it to be

  <span style="font-weight: bold;">merged</span>

## Git & GitHub terminology

### Working Directory

It is the folder/directory where we initialize our git repository by using the command

```
git init
```

### Staging Area

It is an intermediate place between Working Directory and Local Repository to figure out what the things you want git to ignore and what the things you want it to be tracked.

### Repository

A repository is like a folder for your project. Your project's repository contains all of your project's files and stores each file's revision history. You can also discuss and manage your project's work within the repository.

### Local Repository

It is the repo on which we will make local changes, typically this local repository is on our computer.

### Remote Repository

It is a common repository that all team members use to exchange their changes. In most cases, such a remote repository is stored on a code hosting service like GitHub or on an internal server.

### Cloning

Cloning a git repository means that you create a local copy of the code provided by developer; it is downloading the whole code of the repository.

### Issues

Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. They're kind of like email--except they can be shared and discussed with the rest of your team.

### Branches

A branch is a parallel version of a repository. It is contained within the repository, but does not affect the primary or master branch allowing you to work freely without disrupting the "live" version. When you've made the changes you want to make, you can merge your branch back into the master branch to publish your changes.

### Master Branch

One word: the master branch is deployable. It is your production code, ready to roll out into the world. The master branch is meant to be stable, and it is the social contract of open source software to never, ever push anything to master that is not tested, or that breaks the build.

### Commit

It is a command used to save your changes to the local repository.

### Push

Pushing refers to sending your committed changes to a remote repository, such as a repository hosted on GitHub. For instance, if you change something locally, you'd want to then push those changes so that others may access them.

### Pull Request

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

### Merge

It is a command which lets you take the independent lines of development created by git branch and integrate them into a single branch.


### Let's start with simple words that everyone understands,What is Git?

Is it a programming language? - No
Is it a database? - No
Is it an operating system? - No
I was wondering what is git doing?
So what is Git? What exactly is his job?

To understand what it is, we must first understand the problem that led to its existence, take this as a simple example, to get it.

### The problem

You are programmer and working on a big project, you work on it for along time and you really made progress, during working on it, suddenly found your self with trouble, you wrote function that made a messy in your code, and you wish that you can undo or knowing where exactly the project work successfully. So you think you are smart enough to not fall in this problem.
 
You start creating folder for your project, and give it a name, date and time.
And you will make an another copy, every time you add new feature. And this will help you to find any copy you want.

![](https://academy.hsoub.com/uploads/monthly_2016_01/Screenshot_from_2016-01-17_21-41-13.thumb.png.f9d72e356290b68d4bcda67b3562cf91.png)

After a while, the project became bigger, and sometimes you forget to create a new folder and after all it will be many folders and didn’t know which one is working good and has the specific feature that you want.
You will waste time and effort to know which one.

So, the soultion is
 version control system
## What is version control system (VCS)?
Version Control System (VCS) is a system that records changes to a file or set of files over time so that you can recall specific versions later.


### Use of Version Control System:

**A repository:** It can be thought as a database of changes. It contains all the edits and historical versions (snapshots) of the project.
**Copy of Work (sometimes called as checkout)**: It is the personal copy of all the files in a project. You can edit to this copy, without affecting the work of others and you can finally commit your changes to a repository when you are done making your changes.

**Types of Version Control Systems:**

* Local Version Control Systems

![](https://i.imgur.com/f7H1YsT.png)

* Centralized Version Control Systems

![](https://i.imgur.com/eVjIJQL.png)

* Distributed Version Control Systems

![](https://i.imgur.com/4z9QNBS.png)



---


## What is GIT and why?

Git is an Open Source Distributed Version Control System. Now that’s a lot of words to define Git.

### Let me break it down and explain the wording:

**Control System:** This basically means that Git is a content tracker. So Git can be used to store content — it is mostly used to store code due to the other features it provides.

**Version Control System:** The code which is stored in Git keeps changing as more code is added. Also, many developers can add code in parallel. So Version Control System helps in handling this by maintaining a history of what changes have happened.
Also, Git provides features like branches and merges, which I will be covering later.

**Distributed Version Control System:** Git has a remote repository which is stored in a server and a local repository which is stored in the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present in all the developers’ computers. Git is a Distributed Version Control System since the code is present in every developer’s computer.
 

---


### Why a Version Control System like Git is needed
Real life projects generally have multiple developers working in parallel. So a version control system like Git is needed to ensure there are no code conflicts between the developers.

Additionally, the requirements in such projects change often. So a version control system allows developers to revert and go back to an older version of the code.

Finally, sometimes several projects which are being run in parallel involve the same codebase. In such a case, the concept of branching in Git is very important.


---

## GIT Workflow

Git has three states for your file changes:
* Modified
* Staged
* Committed 
 
 ![](https://i.imgur.com/jj0jDFN.jpg)
 

Modified When you modify your files into your working directory

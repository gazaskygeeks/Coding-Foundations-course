# 🔰 Workflow Recap

**After you are done with all workflow practice and terminology, let's recap the main point**


<p align="center">
  <img  src="https://c.tenor.com/nZ7e-LDGMToAAAAM/lets-just-recap-r-ecap.gif">
</p>


<br>

--------------------------------------------------------------------------------

## Workflow:

### 📍 Create a branch

<br>

![create a branch](https://habrastorage.org/webt/gd/aq/ck/gdaqckxk1kw7q2oxheywphnkxey.png)

While you are working on one project, you can have a bunch of different improvements implemented in parallel. Some of them are ready to work, while others are not. Branching allows you to manage this workflow.

The new branch will not affect the main branch, safe in the knowledge that your branch won't be merged until it's ready to be reviewed by someone you're collaborating with.

📌 **Git Command**

```shell
$ git checkout -b new-branch-name
```

### 📍 Add commits

<br>

![add commit](https://habrastorage.org/webt/tw/b8/l3/twb8l3ruycsp4aorerwroibkjry.png)

After creating a branch, start making changes to it. When adding, editing or deleting files, do not forget to make new commits in the branch. The sequence of fixations forms ultimately a transparent history of working on your task, according to which others can understand what you did and why.

Each commit has a related message, which is an explanation of why a change was made.

📌 **Git Commands**

- Displays the state of the working directory and the staging area.

```shell
$ git status
```

- Add the change in the working directory to the staging area

```shell
$ git add file-name
```

- Save changes to the local repository.

```shell
git commit -m "commit message"
```

### 📍 Open a Pull Request

<br>

![pull-req](https://habrastorage.org/webt/0e/ng/kk/0engkkr8s7h2lv35dw8jcgdt-ta.png)

Pull requests initiate a discussion of your commits.

- 📌 after pushing your commits made on a local branch to a remote repository

```shell
$ git push origin branch-name
```

You can open a merge request at any time during the development process:

- when you have little or no code but want to share some screenshots or general ideas
- when you are stuck and need help or advice
- when you are ready for someone to check your work

### 📍 Discuss and review your code

<br>

![create a branch](https://habrastorage.org/webt/k_/vd/wk/k_vdwk8pshzqwdpb1zefsomau6i.png)

After opening a merge request, the team considers the changes, asking questions and leaving comments.

You can continue to update and push commits in the light of the discussion that has arisen. If you are told that you forgot to do something or there is an error in the code, you can fix it in your branch and push it to the pull request.

> _Continuous process till approving_

### 📍 Merge

<br>

![create a branch](https://habrastorage.org/webt/k_/vd/wk/k_vdwk8pshzqwdpb1zefsomau6i.png)

Now that your changes have been verified in production, it is time to merge your code into the main branch.

<br><br><br>


<p align="center">
  <img width="600" src="https://media1.tenor.com/images/662a3b67a436258107c84a056ae9bb74/tenor.gif?itemid=10843280">
</p>

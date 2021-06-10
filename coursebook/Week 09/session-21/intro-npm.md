# What is npm and what are packages?

npm (originally short for **Node Package Manager**) is a package manager for the JavaScript programming language.

When you are working on a JavaScript project, you can use npm to install other people's code packages into your own project. Your project might be a web project like a website or web app, or it could be a server-side project using node. Any JavaScript project can use npm to pull in packages of existing code.

**"package"** mean any piece of code which someone has chosen to publish on npm.

## ♦︎ npm consists of three distinct components:

- The website

    - Use the [website](https://www.npmjs.com/) to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

- **!** The Command Line Interface (CLI)

     - The [CLI](https://docs.npmjs.com/cli/v7/commands/npm) runs from a terminal, and is how most developers interact with npm.

- The registry

     - The [registry](https://docs.npmjs.com/cli/v7/using-npm/registry) is a large public database of JavaScript software and the meta-information surrounding it.

<br>

## ❗️ What is Nodejs?

_It's called **Node** Package Manager! , and we mention the Node Js multiple times! **SO WHAT is Node Js??**_

**Node.js** is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine

Node is a version of JavaScript that works outside of a web browser. It was created so web developers who already knew JS could use the same language to write HTTP servers, CLI programs and more.

> _for now no Nodejs skills is needed!_

--------------------------------------------------------------------------------

<br>

## ♦︎ Why we use npm?

We can think of npm as the **PlayStore** in your mobile. From the play store, we can get any type of apps that is developed by any android programmer from anywhere in the whole world. In the same way, we can get any package from npm, developed and published by any Nodejs programmer and include it in our application to reduce the efforts.

So npm is basically a **package manager for JavaScript**. with the help of which we can Find, share, and reuse packages of code from hundreds of thousands of developers -- and assemble them in powerful new ways.

And we need to use it to reduce our programming work.

<br><br>

**_sounds good, right!!_**

![gif](https://media4.giphy.com/media/vKHKDIdvxvN7vTAEOM/200w.gif?cid=82a1493bxm32ityw90kkkdt0fteramqv3tikz0e1thdjr39t&rid=200w.gif&ct=g)

--------------------------------------------------------------------------------

## ♦︎ Installation

npm is a tool you install on your computer. It's part of node, so install the LTS version of Node to get both the node and npm commands in your command line.

- Install Node.js and npm on **Windows**:

In a web browser, navigate to [NodeJS](https://nodejs.org/en/download/). Click the Windows Installer button to download the latest default version.

![Peek 2021-06-08 15-14](https://user-images.githubusercontent.com/47992412/121183044-53082d00-c86c-11eb-9c80-c7c0ba8e29dd.gif)

_The Node.js installer includes the npm package manager._

<br>

- Install Node.js and npm on **Linux**: 
> [Recommended] | *Installing via nvm*

  - Open Your Terminal (ctrl+alt+t)
  - First, make sure you have curl installed on your system:

     ```shell
    sudo apt update && sudo apt install curl -y
     ```

  - Next, run the following command to configure nvm on your system for current logged user. 
  
     ``` shell
    curl <https://raw.githubusercontent.com/creationix/nvm/master/install.sh> | bash
      ```
  - Close your terminal to apply changes or run the following command 

     ```shell
     source ~/.bashrc  
     ```

   - install the latest available *LTS* version of Node

     ```shell
     nvm install --lts
     ```
<br>

### ♢ Verify your installation

open the command prompt on Windows, or the terminal on Linux, and run the following commands:

```shell
node --version
npm --version
```
If the installation was successful, the terminal will display the installed version of Node.js and npm.

![Screenshot from 2021-06-09 08-34-50](https://user-images.githubusercontent.com/47992412/121299158-a4acc800-c8fd-11eb-9113-1e0471dd228b.png)
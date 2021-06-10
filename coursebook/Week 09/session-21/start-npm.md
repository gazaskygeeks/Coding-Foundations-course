# Get started with npm

Let's go ahead and create a very basic project using npm.

![,,](https://media.tenor.com/images/0104136bbe6cf5ae32871b9ec9464498/tenor.gif)

* Open your terminal and do the following commands: 

```shell
mkdir <dir name>    // create a directory 
cd <dir>           // go inside the dir 
```
* Now initialize your project

```shell
npm init -y
```
This will begin the initialization process. After completing , a `package.json` file will be created in your current directory.

```json
{
  "name": "npm-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```


## ✧ What is Package.json

A `package.json` is a file containing information about your project. It must be written in *`JSON.`* Structuring the package file in this way makes it easy to read by the developers and easy for the computers to parse the information.

It's also where npm store the names and versions for all the installed packages.

<br>

## ✧ Downloading and installing packages locally

* To install an npm package simply run the command

```shell
npm install <package-name>
```
→ or we can shortcut it

```shell
npm i <package-name>
```

For example, let’s install ***`cowsay`***

![Screenshot from 2021-06-09 11-27-42](https://user-images.githubusercontent.com/47992412/121320348-c023cd00-c915-11eb-9730-b3fca9b57c4a.png)


After the installation, we can notice that we have a new folder named `node_modules` and file named `package-lock.json`.


![Screenshot from 2021-06-09 11-29-42](https://user-images.githubusercontent.com/47992412/121320665-0b3de000-c916-11eb-87d6-d7a04ca02a6e.png)

The `node_modules` folder contains the package and all its dependencies (i.e the programs and files on which our package depends for its working) while the `package-lock.json` file holds the exact versioned dependency tree.

you can notice that *`cowsay`* is added to the **`dependencies`** list in the `package.json`

We can also install packages that are only intended to be used in the development phase of our project and not in the production phase. These packages are known as **`devDependencies`**.

→ try to install `eslint` as devDependencies

```shell
npm i eslint -D
```
> To install a devDependency append -D to the command.

```json
  "dependencies": {
    "cowsay": "^1.5.0"
  },
  "devDependencies": {
    "eslint": "^7.28.0"
  }
```


## ✧ npm scripts

after install package in local mode, executables are linked into *`./node_modules/.bin`* so that they can be made available to scripts run through npm. 

* We can run the *cowsay* in our terminal like this:

```shell
./node_modules/.bin/cowsay Hii User!
```
![Screenshot from 2021-06-09 12-04-43](https://user-images.githubusercontent.com/47992412/121326156-f4e65300-c91a-11eb-8d7d-f35ef42ef073.png)

> But its hard to type, imagine you wanna type a long line! *annoying, right!!!*

Look at your `package.json`, there's an object called *`script`*, We use script to automate repetitive tasks.

npm scripts are written as usual JSON key-value pairs where the key is the name of the script and the value contains the script you want to execute. 

→ now we can use the script to run the *cowsay* without *`./node_modules/.bin/`*, add the following line to your package.json script

```json
"start": "cowsay Hii User!!"
```

→ in your terminal run the script

```sell
npm run start
```

![Screenshot from 2021-06-09 12-08-40](https://user-images.githubusercontent.com/47992412/121326697-7938d600-c91b-11eb-8728-1e07b6d0e35c.png)


<hr>
<br>

### ✧ Try what we did by yourself

<br>

![00](https://media.tenor.com/images/13d0582e7bcbe81815fb05c48f6e1465/tenor.gif)
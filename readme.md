# Work In Progress!
## Introduction
Are you sick of having to scroll through a slow-loading ad-infested website and a 300+ word life story when you just want to see ingredients and instructions for a recipe you've used before?! Look no further! Log your recipes on this app and never have to go through that horrid experience ever again!

<!-- <tr>
  <td width="100%"  style="align:center;" valign="top">
          <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/contact-list-and-memos-app.gif?raw=true" width="100%"  alt="Contact and Memo App Demo .gif"/>
  </td>
</tr> -->

---


## Objectives

- Full-stack project to practice building with MVC architecture and auth.

---

## Who is this for? 

- This is for developers learning to make simple full-stack apps. And for people that hate ad-infested websites to look up how to make guacamole.

---

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, passport, passport-local, validator, nodemon.

---

## Install all the dependencies or node packages used for development via Terminal


Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn dev 
```

---

## Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your MongoDB database URI` 
---
 
## Optimizations:

This application is in a minimal viable product state and is not commercial-ready. 
In the future:
- Include pagination 
- Include a search function, filtering, sorting
- Make memos specific to each contact, as opposed to having a pool with all memos together
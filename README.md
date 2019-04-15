# Welcome to the Gigapet BE! 🐾

This document contains:

1. Git flow for working with teams
2. General information
3. API endpoints and intrusctions on how to use them

## Git flow for teams:

**Making pull requests**
Clone this repository locally. Do not fork it. Once you clone the repo locally, create a new branch.

`git checkout -b <branch-name>`

You will now be switched to your branch, that you can start working on. You can then commit your changes and create a pull request. Try to include as much information as needed in your pull request to help both your team mate and team leader:

- What you worked on and any features implemented
- What bug was fixed (if any)

**After creating pull request**

Check and resolve any conflicts. Ask for review from team leader and your team mate. Team Leader will then merge pull request.

**After pull request has been merged**

You will then need to pull the latest changes from Github. Use the following commands:

````git checkout master
git pull // <--- this should update your files with master
git checkout -b <your-new-branch>```
````

## General Information:

- API URL: **_Add URL here once deployed_**
- Schema draft: https://dbdesigner.page.link/Zs6Bw9SrXUWyjrL37

## Endpoints:

### AUTH

**Register a new parent**

URL: /api/auth/register

Request body:

```
{
    name: 'string', // required
    email: 'string', // required, must be unique
    username: 'string', // required, must be unique
    password: 'string', // required
}
```

Successful response: 201 (Created)

```
{
    token: 'string', // set this in local storage and use it in the request header to access restricted routes
     id: number // can be used to get parent details in the user page
}
```

Unsuccessful response: 500

```
{
    message: 'The user could not be created'
}
```

Reasons for unsuccessfull response: User or email is taken, internal server error.

**Login with existing parent**

Request body:

```
{
    'username': 'string', // required
    'password': 'string', // required
}
```

Successful response: 200 (OK)

```
{
    token: 'string', // same as register
    id: number // same as register
}
```

Unsuccessful response: 500

```
{
    message: 'User could not be found'
}
```

# Welcome to the Gigapet BE! 🐾

This document contains:

1. Git flow for working with teams
2. General information
3. API endpoints and instructions on how to use them

## Git flow for teams:

**Making pull requests**
Clone this repository locally. Do not fork it. Once you clone the repo locally, create a new branch.

`git checkout -b <branch-name>`

You will now be switched to your branch, that you can start working on. You can then commit your changes and create a pull request. Try to include as much information as needed in your pull request to help both your team mate and team leader:

- What you worked on and any features implemented
- What bug was fixed (if any)

**After creating pull request**

Check and resolve any conflicts. Ask for review from team leader or PM. Team Leader or PM will then merge pull request.

**After pull request has been merged**

You will then need to pull the latest changes from Github. Use the following commands:

````git checkout master
git pull // <--- this should update your files with master
git checkout -b <your-new-branch>```
````

## General Information:

- API URL: https://lambda-gigapet.herokuapp.com/
- Schema draft: https://airtable.com/invite/l?inviteId=invyoVfZQYErrQD6x&inviteToken=209673e8e1718f2a01bdccfc8aebe38b1cc08d86c54593ebe9d595e0c6727d39

## Endpoints:

### AUTH

**Register a new parent**

URL: /api/auth/register
Method: Post

Request body:

```
{
    name: 'string', // required
    email: 'string', // required, must be unique
    username: 'string', // required, must be unique
    password: 'string', // required
    img_url: 'string', // not required
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

Reasons for unsuccessfull response: Username or email is taken, internal server error.

**Login with existing parent**

URL: /api/auth/login
Method: Post

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

### PARENTS

### CHILDREN AND PETS

**GET ALL PETS**

URL: /api/pet
Method: Get

Returns an array of pets, and their corresponding moods. These pets are not assigned to any child, but can be displayed for the child/parent to choose.

Example data:

```
[
    {
          id: 1,
          species: "Purple Egg",
          description: "Round and purple like a grape, this pet loves to eat berries!",
          happy: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435830/Gifs/Webp.net-gifmaker_f0hl57.gif",
          ok: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435958/Gifs/Webp.net-gifmaker_1_ejgwun.gif",
          sad: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436094/Gifs/Webp.net-gifmaker_2_hojrvi.gif",
          sick: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436485/Gifs/Webp.net-gifmaker_3_vqh028.gif",
          eating: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435767/Gifs/output_MZEjzK_budyho.gif"
    },
    {
          id: 2,
          species: "Another egg color",
          description: "Mystery is its name!",
          happy: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435830/Gifs/Webp.net-gifmaker_f0hl57.gif",
          ok: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435958/Gifs/Webp.net-gifmaker_1_ejgwun.gif",
          sad: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436094/Gifs/Webp.net-gifmaker_2_hojrvi.gif",
          sick: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436485/Gifs/Webp.net-gifmaker_3_vqh028.gif",
          eating: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435767/Gifs/output_MZEjzK_budyho.gif"
    },

]
```

**ADD NEW CHILD AND CHOOSE PET**

URL: /api/parent/:id/child
Method: Post

**GET CHILD BY ID AND THEIR PET DETAILS**

URL: /api/child/:id
Method: Get
Sucessful response: 200 OK

Returns the child object and details for his/her pet with corresponding pet moods.

Example data:

```
{
    id: 1,
    name: "Charlie",
    pet_id: 1,
    pet_name: "Blueberry",
    pet_level: 1,
    happy: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435830/Gifs/Webp.net-gifmaker_f0hl57.gif",
    ok: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435958/Gifs/Webp.net-gifmaker_1_ejgwun.gif",
    sad: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436094/Gifs/Webp.net-gifmaker_2_hojrvi.gif",
    sick: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555436485/Gifs/Webp.net-gifmaker_3_vqh028.gif",
    eating: "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555435767/Gifs/output_MZEjzK_budyho.gif"
}
```

Unsuccessful response: 500

**EDIT CHILD AND THEIR PET**

URL: /api/child/:id
Method: Put
Sucessful response: 200 OK

Any of the following fields can be edited:

```
    name: "Charlie",
    pet_id: 1,
    pet_name: "Blueberry",
    pet_level: 1,
```

For example, to change the pet's name, the request body would be:

```
 {
     pet_name: "Acorn"
 }
```

The response data will return the full child object with the change that was implemented:

```
{
    "id": 1,
    "name": "Charlie",
    "pet_id": 1,
    "pet_name": "Acorn",
    "pet_level": 1,
    "happy": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
    "ok": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
    "sad": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
    "sick": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
    "eating": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg"
}
```

Unsuccessful response: 400 or 500

**DELETE CHILD AND THEIR PET**

URL: /api/child/:id
Method: Delete
Sucessful response: 200 OK

Deleting the child also removes their pet data.

If successful, returns message:

```
{
    message: `The child with ID ${id} was successfully deleted`
}
```

If unsuccessful, for example the child doesn't exist, returns status 404 or 500 with:

```
{
    error: `The child with ID ${id} could not be deleted`
}
```

### FOOD ENTRIES

# Farmers order

Simple farmer ordering system

## Description

---

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose ORM](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)
- A package manager -
- [Yarn](https://yarnpkg.com/lang/en/) (preferred) or [NPM](https://www.npmjs.com/)



## Prerequisites

NodeJS and a package manager should be installed on your system together with the following applications for use in development

- [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download/) for testing the API or to trigger API actions.

- A web browser prefer [Chrome](https://www.google.com/chrome/)

## Setup

After installing the prerequisites, clone the repository:

```ch
    $ git clone https://github.com/mwibutsa/farmers-order.git
```

Then change the directory to the cloned repository:

```ch
    $ cd farmers-order
```

To install dependencies defined in the `package.json` file run:

```ch
    $ yarn install
```

Create a `.env` file and add all variables as defined in the `.env.example` file

```ch
    touch .env
```

Start the local development for the micro-frontend app run

```ch
    $ yarn dev
```

To access the development version of Farmers Order APIs:

- Open [localhost:3000](http://localhost:3000/) in Postman


## Development standards and Guidelines

- [Commit message](https://www.conventionalcommits.org/en/v1.0.0/)
- [ESLint](https://eslint.org/) for Typescript and Javascript

## Deployment

- Raise a PR on `develop` branch
- Branch naming `<type>/short-description` where type can be [feat,bug,chore] or their [ft,bg,ch] respectively


## Maintainers

- [Mwibutsa Floribert](https://gitlab.com/mwibutsa)

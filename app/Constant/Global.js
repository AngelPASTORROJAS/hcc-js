require("dotenv-expand").expand(require("dotenv").config());

const APP = Object.freeze({
    PORT: process.env.PORT,
    PATH_DATABASE: process.env.PATH_DATABASE
})

module.exports = APP 
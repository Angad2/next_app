const path = require('path')
require('dotenv').config()

module.exports = {
    env : {
        BASE_URL: process.env.BASE_URL
    },

    webpack: config =>{
        config.resolve.alias['components'] = path.join(__dirname, 'components')

        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    }

}
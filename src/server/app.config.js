'use strict';

module.exports = function () {
    var config = {
        /* Database Config */
        //db: 'mongodb://admin:password@localhost:27017/addressbook' // local DB
        db: 'mongodb://admin:passw0rd@ds159497.mlab.com:59497/addressbook' // Mongo Lab
    };

    return config;
};
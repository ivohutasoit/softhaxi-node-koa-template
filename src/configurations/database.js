'use strict'

const path = require('path')

const base = path.resolve(__dirname, '../../','database')

module.exports = {

    test: {
        client: 'sqlite3',
        connection: {
          filename: '../dbtest.sqlite3'
        },
        migrations: {
          directory: path.resolve(base, 'migrations', 'sqlite3'),
          tableName: 'migrations'
        },
        seeds: {
          directory: path.resolve(base, 'seeds', 'sqlite3')
        },
        useNullAsDefault: true
      },
    
      development: {
        client: 'sqlite3',
        connection: {
          filename: '../dbdev.sqlite3'
        },
        migrations: {
          directory: path.resolve(base, 'migrations', 'sqlite3'),
          tableName: 'migrations'
        },
        seeds: {
          directory: path.resolve(base, 'seeds', 'sqlite3')
        },
        useNullAsDefault: true
      },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'dbstaging',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: path.resolve(base, 'migrations', 'pg'),
        tableName: 'migrations'
      },
      seeds: {
        directory: path.resolve(base, 'seeds', 'pg')
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'dbprod',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: path.resolve(base, 'migrations', 'pg'),
        tableName: 'migrations'
      },
      seeds: {
        directory: path.resolve(base, 'seeds', 'pg')
      }
    }
  
  };
  
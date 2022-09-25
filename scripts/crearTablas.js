import knex from 'knex';
import config from './../config.js';

(async () => {
    const mysqlConnection = knex(config.mysql);
    try {
        await mysqlConnection.schema.dropTableIfExists('productos');
        await mysqlConnection.schema.createTable('productos', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('thumbnail').notNullable();
            table.integer('price').notNullable();
            table.integer('stock').notNullable();
            table.string('code').notNullable();
            table.dateTime('timestamp').notNullable();
        });
        console.log('Tabla productos creada en mysql');
    } catch (error) {
        console.log(error);
    } finally {
        mysqlConnection.destroy()
    }

    const sqlite3Connection = knex(config.sqlite3);
    try {
        await sqlite3Connection.schema.dropTableIfExists('carritos');
        await sqlite3Connection.schema.createTable('carritos', table => {
            table.increments('id').primary();
            table.string('email').notNullable();
            table.string('mensaje').notNullable();
            table.dateTime('timestamp').notNullable();
        });
        console.log('Tabla carritos creada en mysql');
    } catch (error) {
        console.log(error);
    } finally {
        sqlite3Connection.destroy();
    }
})()
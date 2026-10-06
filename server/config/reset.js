import { pool } from './database.js'
import './dotenv.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

const createTables = async () => {
    const query = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL
        );

        CREATE TABLE events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            start_time TIMESTAMPTZ NOT NULL,
            end_time TIMESTAMPTZ NOT NULL,
            image TEXT NOT NULL,
            location_id INTEGER NOT NULL REFERENCES locations(id)
        );
    `
    await pool.query(query)
    console.log('🎉 tables created')
}

const seedTables = async () => {
    await createTables()

    for (const loc of locationData) {
        await pool.query(
            'INSERT INTO locations (name, address, city, state, zip, image, description) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [loc.name, loc.address, loc.city, loc.state, loc.zip, loc.image, loc.description]
        )
        console.log(`✅ ${loc.name} added`)
    }

    for (const event of eventData) {
        await pool.query(
            'INSERT INTO events (title, start_time, end_time, image, location_id) VALUES ($1, $2, $3, $4, $5)',
            [event.title, event.start_time, event.end_time, event.image, event.location_id]
        )
        console.log(`✅ ${event.title} added`)
    }
}

seedTables()

import { pool } from '../config/database.js'

const getEventsByLocation = async (req, res) => {
    try {
        const selectQuery = `
            SELECT * FROM events WHERE location_id = $1 ORDER BY start_time ASC
        `
        const locationId = req.params.id
        const results = await pool.query(selectQuery, [locationId])
        res.status(200).json(results.rows)
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

export default { getEventsByLocation }

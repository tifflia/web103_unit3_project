const getEventsByLocation = async (locationId) => {
    try {
        // view controller response
        const response = await fetch(`/api/events/location/${locationId}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export default { getEventsByLocation }

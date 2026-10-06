import React from 'react'
import '../css/Event.css'

const Event = (props) => {

    const start = new Date(props.start_time)
    const end = new Date(props.end_time)

    const date = start.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    const timeOptions = { hour: 'numeric', minute: '2-digit' }
    const time = `${start.toLocaleTimeString('en-US', timeOptions)} – ${end.toLocaleTimeString('en-US', timeOptions)}`

    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {date} <br /> {time}</p>
                </div>
            </div>
        </article>
    )
}

export default Event

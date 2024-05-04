
import React from 'react';
import './scrollercard.css';

function scrollercard() {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Upcoming Events</h4>
            </div>
            <div className="card-body">
                <div className="event-container">
                    <div className="event">
                        <h5>Event Title 1</h5>
                        <p>Date: January 15, 2025</p>
                        <p>Location: Venue A</p>
                    </div>
                    <div className="event">
                        <h5>Event Title 2</h5>
                        <p>Date: February 20, 2025</p>
                        <p>Location: Venue B</p>
                    </div>
                    <div className="event">
                        <h5>Event Title 3</h5>
                        <p>Date: March 25, 2025</p>
                        <p>Location: Venue C</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default scrollercard;

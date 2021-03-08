import React from 'react';
import './Publication.css';
import Avatar from '@material-ui/core/Avatar'

function Publication({ username, description, image }) {
    return (
        <div className="publication">
            <div className="publication__header">
                <Avatar 
                    className="publication__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>
            <img className="publication__image" src={image}/>
            <h4 className="publication__description"><strong>{username} : </strong>{description}</h4>
        </div>
    )
}

export default Publication; 
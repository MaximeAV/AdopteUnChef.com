import React from 'react';
import './Publication.css';
import Avatar from '@material-ui/core/Avatar'

function Publication({ title, username, description, image }) {

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
            <h3 className="publication__title">{title}</h3>
            <p className="publication__description">{description}</p>
        </div>
    )
}

export default Publication; 
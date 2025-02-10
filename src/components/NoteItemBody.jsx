 /* eslint-disable no-unused-vars */
import React from 'react';
import { showFormattedDate } from '../utils/data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
 
function NoteItemBody({ id, title, body, archived, createdAt }) {
    const time = showFormattedDate(createdAt);
    return (
        <div className={archived ? "archived-note-item__body" : "note-item__body"}>
            <h3 className="note-item__title">
                <Link to={`/detail/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__note">{body}</p>
            <p className="note-item__time">Created on {time}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
}

 
export default NoteItemBody;
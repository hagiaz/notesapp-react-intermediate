/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/data';

function NoteDetail({ id, title, body, createdAt }) {
    const date = showFormattedDate(createdAt);
  return (
    <div className="notes-detail">
        <h2>{title}</h2>
        <h4>ID : {id}   ||   Created At : {date}</h4>
        <h3>{body}</h3>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
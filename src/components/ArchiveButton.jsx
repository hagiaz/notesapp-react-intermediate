/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, onStatusChange, isArchived }) {
    return (
        <button className='note-item__archive' onClick={() => onStatusChange(id)}>
            {isArchived ? "Unarchive" : "Archive"}
        </button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
}

export default ArchiveButton;
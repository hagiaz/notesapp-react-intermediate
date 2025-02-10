/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from "prop-types";

function NoteItem({ id, title, body, archived, createdAt, onDelete, onStatusChange }) {
    return (
        <div className={archived ? "archived-note-item" : "note-item"}>
            <NoteItemBody id={id} title={title} body={body} archived={archived} createdAt={createdAt} />
            <ArchiveButton id={id} onStatusChange={onStatusChange} isArchived={archived} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStatusChange: PropTypes.func.isRequired,
}

export default NoteItem;
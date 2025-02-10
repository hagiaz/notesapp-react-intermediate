/* eslint-disable no-unused-vars */
import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes, onDelete, onStatusChange }) {
    return (
        <div className="note-list">
            {
                notes.length === 0 ? (
                    <h2>Tidak ada catatan</h2>
                ) : (
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onStatusChange={onStatusChange}
                            {...note}
                        />
                    ))
                )
            }
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onStatusChange: PropTypes.func.isRequired,
}

export default NoteList;
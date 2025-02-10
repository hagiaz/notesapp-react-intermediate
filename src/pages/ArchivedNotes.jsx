import React from "react";
import NoteList from "../components/NoteList";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/api";

class ArchivedNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isLoading: true,
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { error, data } = await getArchivedNotes();
        if (!error) {
            this.setState({ notes: data, isLoading: false });
        }
    }

    async onDeleteHandler(id) {
        await deleteNote(id);
        const { error, data } = await getArchivedNotes();
        if (!error) {
            this.setState({ notes: data });
        }
    }

    async onStatusChangeHandler(id) {
        await unarchiveNote(id);
        const { error, data } = await getArchivedNotes();
        if (!error) {
            this.setState({ notes: data });
        }
    }

    render() {
        const { isLoading, notes } = this.state;

        return (
            <div className="notes-app">
                <h2>Archived Note List</h2>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <NoteList 
                        notes={notes} 
                        onDelete={this.onDeleteHandler} 
                        onStatusChange={this.onStatusChangeHandler} 
                    />
                )}
            </div>
        );
    }
}

export default ArchivedNotes;

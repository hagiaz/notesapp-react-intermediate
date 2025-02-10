import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleLimit: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const input = event.target.value;
        if (input.length <= this.state.titleLimit) {
            this.setState(() => {
                return {
                    title: input,
                };
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingCharacters = this.state.titleLimit - this.state.title.length;

        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h3>Title/Judul</h3>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler} 
                />
                <p>{remainingCharacters} karakter tersisa untuk Judul</p>
                <h3>Body/Isi</h3>
                <textarea
                    placeholder="Body"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    rows="5"
                    style={{ width: '100%', resize: 'vertical' }}
                ></textarea>
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
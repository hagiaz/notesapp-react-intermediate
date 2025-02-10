import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import PropTypes from "prop-types";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

  class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { error, data } = await getActiveNotes();
        if (!error) {
            this.setState({ notes: data });
        }
    }

    async onDeleteHandler(id) {
        await deleteNote(id);
        const { error, data } = await getActiveNotes();
        if (!error) {
            this.setState({ notes: data });
        }
    }

    async onStatusChangeHandler(id) {
        await archiveNote(id);
        const { error, data } = await getActiveNotes();
        if (!error) {
            this.setState({ notes: data });
        }
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        return (
            <div className="notes-app">
                <h2>Note List</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onStatusChange={this.onStatusChangeHandler} />
            </div>
        );
    }
}


HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;

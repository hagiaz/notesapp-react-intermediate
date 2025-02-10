import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import PropTypes from "prop-types";

function NoteDetailWrapper() {
    const { id } = useParams();
    return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: null, // Initially set to null to indicate loading state
            isLoading: true,
        };
    }

    async componentDidMount() {
        const response = await getNote(this.props.id);
        const note = response.data; // Accessing the 'data' property
        if (!note) {
            console.error("Note not found:", this.props.id);
            return;
        }
        this.setState({
            note,
            isLoading: false,
        });
    }
    
    async componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({ isLoading: true });
            const response = await getNote(this.props.id);
            const note = response.data; // Accessing the 'data' property
            this.setState({
                note,
                isLoading: false,
            });
        }
    }

    render() {
        const { note, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (!note) {
            return (
                <section>
                    <h2>Note Not Found</h2>
                    <p>The note you are looking for does not exist.</p>
                </section>
            );
        }

        return (
            <section>
                <NoteDetail {...note} />
            </section>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
};

export default NoteDetailWrapper;

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
            note: getNote(props.id),
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({
                note: getNote(this.props.id),
            });
        }
    }

    render() {
        const { note } = this.state;

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

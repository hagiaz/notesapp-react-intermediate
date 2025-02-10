/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddNote from "../pages/AddNote";
import ArchivedNotes from "../pages/ArchivedNotes";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from '../utils/api';

class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authedUser: null,
            initializing: true,
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState(() => ({
            authedUser: data,
        }));
    }

    onLogout() {
        putAccessToken('');
        this.setState(() => ({
            authedUser: null
        }));
    }

    async componentDidMount() {
        const { data } = await getUserLogged();

        this.setState(() => ({
            authedUser: data,
            initializing: false
        }));
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <div className="notes-app">
                    <header>
                        <h1 className="app-name">NotesApp</h1>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </main>
                </div>
            );
        }

        return (
            <div className="notes-app">
                <header>
                    <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                    <h1 className="app-name">NotesApp</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/add" element={<AddNote />} />
                        <Route path="/archived" element={<ArchivedNotes />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="/*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

export default NoteApp;

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
import Footer from "./Footer"; // Now inside NoteApp
import { getUserLogged, putAccessToken } from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LocaleProvider } from "../contexts/LocaleContext";

class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authedUser: null,
            initializing: true,
            theme: localStorage.getItem("theme") || "light",
            localeContext: {
                locale: localStorage.getItem("locale") || "id",
                toggleLocale: () => {
                    this.setState((prevState) => {
                        const newLocale = prevState.localeContext.locale === "id" ? "en" : "id";
                        localStorage.setItem("locale", newLocale);
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: newLocale,
                            },
                        };
                    });
                },
            },
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState((prevState) => {
            const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return { theme: newTheme };
        });
    }
    
    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState({ authedUser: data });
    }
    
    onLogout() {
        this.setState({ authedUser: null });
        putAccessToken("");
    }

    async componentDidMount() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        this.setState({ theme: savedTheme });

        const { data } = await getUserLogged();
        this.setState({
            authedUser: data,
            initializing: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
          document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <ThemeProvider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
                    <div className="notes-app">
                        <header>
                            <Navigation logout={this.onLogout} name={this.state.authedUser?.name || "Guest"} />
                            <h1>{this.state.localeContext.locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
                        </header>
                        <main>
                            <Routes>
                                {this.state.authedUser ? (
                                    <>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/add" element={<AddNote />} />
                                        <Route path="/archived" element={<ArchivedNotes />} />
                                        <Route path="/detail/:id" element={<DetailPage />} />
                                        <Route path="/*" element={<NotFoundPage />} />
                                    </>
                                ) : (
                                    <>
                                        <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                                        <Route path="/register" element={<RegisterPage />} />
                                    </>
                                )}
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </LocaleProvider>
        );
    }
}

export default NoteApp;

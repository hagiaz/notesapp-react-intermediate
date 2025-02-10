/* eslint-disable no-unused-vars */
import React from "react";
import translations from "../utils/locales";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Footer() {
    return (
        <LocaleConsumer>
            {({ locale }) => (
                <nav className="footer">
                    <p className="footer-text">{translations[locale].footer}</p>
                </nav>
            )}
        </LocaleConsumer>
    );
}

export default Footer;

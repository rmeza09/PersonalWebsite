import React, { useState } from "react";
import IMG_1856 from "../assets/IMG_1855.jpeg";
import resume from "../assets/Personal Meza 250224 ResumeMechEng.pdf";

function Contact() {
    const [copySuccess, setCopySuccess] = useState(false);

    // Function to copy email to clipboard
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("rmeza@umd.edu")
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000); // Reset message after 2s
            })
            .catch((err) => console.error("Failed to copy", err));
    };

    return (
        <div>
            <div className="contact-container">
                {/* Profile Image */}
                <img src={IMG_1856} alt="Profile Picture" className="contact-image" />

                {/* Profile Content */}
                <div className="contact-content">
                    <p>Email: rmeza@umd.edu  
                        <button onClick={copyEmailToClipboard} className="copy-button">
                            <i className="fas fa-copy"></i> {/* Font Awesome Clipboard Icon */}
                        </button>
                    </p>
                    {copySuccess && <span className="copy-message">Copied!</span>}
                    
                    <p>Phone: (786)-473-5564</p>

                    <div className="button-container">
                        <a href="https://github.com/rmeza09" className="link-button" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/rafameza/" className="link-button" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                       
                        <a href={resume} className="link-button resume-button" download>
                            <i className="fas fa-file-download"></i> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

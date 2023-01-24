import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue)
        }
        else if (inputType === 'email') {
            setEmail(inputValue);
        } 
        else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!message) {
            setError('Message required!!!');
            return;
        }
        else if (!validateEmail(email)) {
            setError('Email or username is invalid!!!');
            return;
        } if (!name) {
            setError('Name required!!!')
            return;
        }
        setError('')
        setSuccess(true)
        
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
      };

      return (
        <div>
            <form className="form">
                <label>Name:</label>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Who are you?"
                />
                <label>Email:</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="What's you email?"
                />
                <label>Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What's up?"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {!error & success ? (
                <div className="successMessage">
                    <p>Message Sent!</p>
                </div>
            ) : <div/>}
            {error && (
                <div className="errorMessage">
                    <p>{error}</p>
                </div>
            )}
        </div>
      )
}

export default ContactForm;
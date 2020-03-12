import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />);
});

test("User input", () => {
   
    const { getByLabelText, getByText, findAllByText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {
        target: {name: "firstName", value: "Steve"}
    });
    fireEvent.change(lastNameInput, {
        target: {name: "lastName", value: "Gary"}
    });
    fireEvent.change(emailInput, {
        target: {name: "email", value: "sgary0@protonmail.com"}
    });
    fireEvent.change(messageInput, {
        target: {name: "message", value: "A little something about myself"}
    });

    console.log(firstNameInput.value);

    const submitButton = getByText(/submit/i);

    fireEvent.click(submitButton);

});
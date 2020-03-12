import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

});
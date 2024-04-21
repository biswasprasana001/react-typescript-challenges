import React, { useState, FormEvent } from 'react';

interface FormState {
    firstName: string;
    lastName: string;
}

const MyForm: React.FC = () => {
    const [form, setForm] = useState<FormState>({ firstName: '', lastName: '' });
    const [errors, setErrors] = useState<FormState>({ firstName: '', lastName: '' });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let formIsValid = true;
        let errors: FormState = { firstName: '', lastName: '' };

        if (form.firstName === '') {
            formIsValid = false;
            errors.firstName = 'First name is required';
        }

        if (form.lastName === '') {
            formIsValid = false;
            errors.lastName = 'Last name is required';
        }

        setErrors(errors);

        if (formIsValid) {
            alert('Form submitted!' + " " + form.firstName + ' ' + form.lastName);
            setForm({ firstName: '', lastName: '' });
            setErrors({ firstName: '', lastName: '' });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
            {errors.firstName && <p>{errors.firstName}</p>}
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
            {errors.lastName && <p>{errors.lastName}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;

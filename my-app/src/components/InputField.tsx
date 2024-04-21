import React, { useState } from 'react';
const InputField: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        alert(`Button clicked with input value: ${inputValue}`);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default InputField;
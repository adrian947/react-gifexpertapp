import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }
    const reset = () => {
        console.log('borrado')
        setCategories([''])
        

    }

    const focus = () => {
        console.log('foco')
        setInputValue(" ");

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onFocus={focus}
                    type="text"
                    placeholder={"ingrese texto aqui"}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            <button onClick={reset}>reset</button>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

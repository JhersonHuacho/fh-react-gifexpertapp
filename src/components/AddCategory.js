import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  // -> Usando desestructuración de objetos
  const handleInputChangeDos = ({ target: { value } }) => {
    setInputValue(value);
  }
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
    console.log('AddCategory - dentro de handleSubmit');
  }

  console.log('AddCategory - antes del return');

  return (
    <form onSubmit={handleSubmit}>      
      <input 
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
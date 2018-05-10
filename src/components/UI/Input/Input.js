import React from 'react';
import classes from './Input.css';

const Input = ({ placeholder, value, onChange }) => (
   <input 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes.input} />
);

export default Input;
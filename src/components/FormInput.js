import React from 'react';
import { Input } from 'antd';

const FormInput = ({ placeholder, handleChangeInput }) => {
  return (
    <Input 
      placeholder = {placeholder}
      onChange={handleChangeInput}
    />
  )
}

export default FormInput;
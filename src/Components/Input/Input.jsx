import React from 'react';
import PropTypes from 'prop-types'

const Input = ({ className, type, placeholder }) => {
  return (
    <div>
      <input className={`${className} p-4 border-2 inputborder focus:outline-none`} type={type} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };
  
export default Input;

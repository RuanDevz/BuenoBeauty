import React from 'react'

const Button = ({childreen,onClick,className}) => {
  return (
    <div>
        <button onClick={onClick} className={className}>{childreen}</button>
    </div>
  )
}

export default Button
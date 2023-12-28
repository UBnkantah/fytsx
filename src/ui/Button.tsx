import React from 'react'

interface MyBtnType {
  btntext: String,
  handleClick: any
}

const Button = ({btntext, handleClick}: MyBtnType) => {
  return (
    <button onClick={handleClick}>{btntext}</button>
  )
}

export default Button
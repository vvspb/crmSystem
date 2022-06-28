import React from 'react';


// import './index.css'
import styles from './CustomButton.module.css'

const STYLES = [
  "btn--listSideBar",
  "btn--clickSideBar",
]

export const CustomButton = ({ children, buttonStyle, ...props }) => {

  // const checkButtonStyle = STYLES.includes(buttonStyle)
  //   ? buttonStyle
  //   : STYLES[0]

     
  return (
    <button className={styles[buttonStyle]} {...props}>
      {children}
    </button>
  )


}

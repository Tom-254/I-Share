import React from 'react'

const IShareButton = ({buttonName, buttonStyle, buttonType, onClick}) => {
  return (
    <>
      <button className={`${buttonStyle ? buttonStyle : "flex-center button-primary"}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClick}>
        {buttonName}
      </button>
    </>
  )
}

export default IShareButton
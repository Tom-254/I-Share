import React from 'react'

const IShareButton = ({buttonName, buttonStyle}) => {
  return (
    <>
      <button className={`${buttonStyle ? buttonStyle : "flex-center button-primary"}`} type="button">
        {buttonName}
      </button>
    </>
  )
}

export default IShareButton
import React from 'react'
import { Link } from 'react-router-dom'

const IShareButton = ({buttonName, buttonStyle, buttonType, onClick, linkTo}) => {
  return (
    <>{ linkTo
      ? <Link to={linkTo} className={`${buttonStyle ? "flex-center button-primary " + buttonStyle : "flex-center button-primary"}`} type={`${buttonType ? buttonType : "button"}`}>{buttonName}</Link> :
      (<button className={`${buttonStyle ? buttonStyle : "flex-center button-primary"}`} type={`${buttonType ? buttonType : "button"}`} onClick={onClick}>
        {buttonName}
      </button>)
    }
    </>
  )
}

export default IShareButton
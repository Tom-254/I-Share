import React from 'react'

const IShareInput = ({containerStyle, labelName, placeHolder, labelStyle, inputStyle, isRequired, inputValue, onChange}) => {
  return (
    <div className={`${containerStyle ? containerStyle : "input-container"}`}>
      <label className={`${labelStyle ? labelStyle : "input-label"}`} >
        {labelName}
      </label>
      <input type="text" className={`${inputStyle ? inputStyle : "input-field"}`} placeholder={placeHolder} required={isRequired} value={inputValue} onChange={onChange}/>
    </div>
  )
}

export default IShareInput
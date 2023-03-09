import React from 'react'

const IShareInput = ({containerStyle, labelName, placeHolder, labelStyle, inputStyle, isRequired, inputType, inputValue, inputName, onChange}) => {
  return (
    <div className={`${containerStyle ? containerStyle : "input-container"}`}>
      <label className={`${labelStyle ? labelStyle : "input-label"}`} >
        {labelName}
      </label>
      { !inputType ? <input type="text" className={`${inputStyle ? inputStyle : "input-field field"}`} placeholder={placeHolder} required={isRequired} value={inputValue} name={inputName}  onChange={onChange}/>: <textarea type="text" className={`${inputStyle ? inputStyle : "input-field textarea"}`} placeholder={placeHolder} required={isRequired} value={inputValue} name={inputName}  onChange={onChange} rows="4"/>}
    </div>
  )
}

export default IShareInput
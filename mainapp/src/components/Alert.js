import React from 'react'
import { BsExclamationTriangleFill } from 'react-icons/bs'

const Alert = ({alert}) => {
  return (
    alert != null && (
      <div className="text-info" style = {{backgroundColor:'lightgray'}}>
      <label><BsExclamationTriangleFill/>  {alert.msg}</label>
      </div>
    )
  )
}
export default Alert
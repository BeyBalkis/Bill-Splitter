import React from 'react'

const CreateBCared = (props) => {
  return (
    <div className="card-container">
      <div className="card" onClick={() => props.setView("createbill")}>
        Add Bill
      </div>
    </div>
  )
}

export default CreateBCared
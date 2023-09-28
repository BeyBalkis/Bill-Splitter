import React from 'react'

const CreateGrpCard = (props) => {
  return (
    <div className="card-container">
    <div className="card" onClick={() => props.setView("creategroup")}>
      Add Group
    </div>
  </div>
  )
}

export default CreateGrpCard
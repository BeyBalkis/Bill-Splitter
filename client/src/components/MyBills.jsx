import React, { useState } from 'react'

const MyBills = (props) => {

    const [selectedBill, setSelectedBill] = useState(null);


  return (
    <div>
    <h2>My Bills</h2>
    <ul className="bill-list">
      {props.bills.map((oneBill) => (
        <li key={oneBill.id} className="bill-item">
          <span className="bill-name">{oneBill.name}</span>
          <div className="bill-buttons">
            <button
              className="delete-button"
              onClick={() => props.handleDeleteBill(oneBill.id)}
            >
              Delete
            </button>
            <button className="resolve-button" onClick={() => props.showOneBill(oneBill)} >
              Resolve
            </button>
          </div>
        </li>
      ))}
    </ul>
    {selectedBill && <ResolveBill theBill={selectedBill} />}
  </div>
  )
}

export default MyBills
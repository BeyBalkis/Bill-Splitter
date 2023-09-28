import React, { useState } from 'react'

const ResolveBill = (props) => {
  // console.log(props.groups);
  // console.log(props.fromIdtoIndex(props.currentBill.id));
    const [concernedGroup,setConcernedGroup] = useState(props.groups[props.fromIdtoIndex(props.currentBill.groupId)])
  const handleCount=(()=>{
    const debt= props.currentBill.amount / (concernedGroup.members.length)
    return debt
  })
const handleGroup=()=>{}
 
    return (
        <div className="resolve-bill">
        <h2>Resolve Bill</h2>
        <div className="bill-details">
          <h3>Bill Details</h3>
          <p>
            <strong>Name:</strong> {props.currentBill.name}
          </p>
          <p>
            <strong>Amount:</strong> ${props.currentBill.amount}
          </p>
          <p>
            <strong>Paid by:</strong> {props.currentBill.paidBy}
          </p>
        </div>
        <div className="debt-table">
          <h3>Debts</h3>
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Owes</th>
              </tr>
            </thead>
            <tbody>
              {concernedGroup.members.map((e,i)=>{
                if(e !== props.currentBill.paidBy ){
                  return (
                    <tr key={i}>
                  <td>{e}</td>
                  <td>${handleCount()}</td>
                </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default ResolveBill
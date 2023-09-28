import React, { useState } from 'react'

const CreateBill = (props) => {
    const [billName, setBillName] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [paidBy, setPaidBy] = useState('');
    const [groupId,setGroupId]=useState('')

    const handleBillNameChange = (e) => {
        setBillName(e.target.value);
      };
    
      const handleBillAmountChange = (e) => {
        setBillAmount(e.target.value);
      };
    
      const handlePaidByChange = (e) => {
        setPaidBy(e.target.value);
      };
      const handleGroupChange = (e) => {
        setGroupId(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      };

  return (
    <div>
         <div className="create-bill-card">
      <h3>Create a New Bill</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="billName">Bill Name:</label>
          <input
            type="text"
            id="billName"
            value={billName}
            onChange={handleBillNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="billAmount">Bill Amount:</label>
          <input
            type="number"
            id="billAmount"
            value={billAmount}
            onChange={handleBillAmountChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paidBy">Paid By:</label>
          <select
            id="paidBy"
            value={paidBy}
            onChange={handlePaidByChange}
            required
          >
            <option value="">Select a friend</option>
            {props.friends.map((friend) => (
              <option key={friend.id} value={friend.name}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="groupId">Choose Group:</label>
          <select
            id="group"
            value={groupId}
            onChange={handleGroupChange}
            required
          >
            <option value="">Select a group</option>
            {props.groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button" onClick={()=> props.handleCreateBill({name:billName,amount:billAmount,paidBy:paidBy,groupId:groupId})}>
          Create Bill
        </button>
      </form>
    </div>
    </div>
  )
}

export default CreateBill
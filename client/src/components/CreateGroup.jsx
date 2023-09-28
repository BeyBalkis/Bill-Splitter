import React, { useState } from 'react'

const CreateGroup = (props) => {
    const[name,setName]=useState("")
    const[members,setMembers]=useState([])
    const [selectedFriends, setSelectedFriends] = useState([]);

    const handleMemberSelection = (e) => {
      const selectedOption = e.target.value;
      const isSelected = selectedFriends.includes(selectedOption);
  
      if (!isSelected) {
        setSelectedFriends([...selectedFriends, selectedOption]);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newGroup = {
        name,
        members: selectedFriends,
      };
      console.log('New Group:', newGroup);
      props.handleCreateGroup(newGroup);
      setName('');
      setSelectedFriends([]);
    }
  return (
    <div>
           <div className="group-form">
      <h2>Create a Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupName">Group Name:</label>
          <input
            type="text"
            id="groupName"
            value={name}
          onChange={(e)=>setName(e.target.value)}
          required/>
        </div>
        <div className="form-group">
          <label htmlFor="members">Select Members:</label>
          <select
            id="members"
            multiple
            required
            value={selectedFriends}
            onChange={handleMemberSelection}
          >
            <option value="">Select a friend</option>
            {props.friends.map((friend) => (
          <option key={friend.name} value={friend.name}>
            {friend.name}
          </option>
        ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Create Group
        </button>
      </form>
    </div>
    </div>
  )
}

export default CreateGroup
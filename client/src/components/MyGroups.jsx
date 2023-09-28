import React from 'react'

const MyGroups = (props) => {
  return (
    <div className="big-beautiful-list">
    <h2>My Groups</h2>
    <ul>
      {props.groups.map((group) => (
        <li key={group.id} className="list-item">
          <span>{group.name}</span>
          <button onClick={() => props.handleDeleteGroup(group.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default MyGroups
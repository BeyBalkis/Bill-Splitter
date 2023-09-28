import React from 'react';


const Navbar = (props) => {
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">SplitMates</div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" onClick={()=>props.setView("home")}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#"onClick={()=>props.setView("mygroups")}>My Groups</a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={()=>props.setView("mybills")}>My Bills</a>
        </li>
        <li className="nav-item">
          <a href="#"onClick={()=>props.setView("creategroup")}>Create Group</a>
        </li>
        <li className="nav-item">
          <a href="#"onClick={()=>props.setView("createbill")}>Create Bill</a>
        </li>
        <li className="nav-item search-bar">
          <input type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a href="#" onClick={()=>props.setView("login")} >Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
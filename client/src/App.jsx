import React, { useEffect, useState } from 'react'
import Login from './components/Login.jsx'
import axios from 'axios'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import CreateGrpCard from './components/CreateGrpCard.jsx'
import CreateBCared from './components/CreateBCared.jsx'
import CreateGroup from './components/CreateGroup.jsx'
import CreateBill from './components/CreateBill.jsx'
import MyGroups from './components/MyGroups.jsx'
import MyBills from './components/MyBills.jsx'
import ResolveBill from './components/ResolveBill.jsx'

const App = () => {
  const [view,setView]=useState("login")
  const [friends,setFriends]=useState([])
  const [bills,setBills]=useState([])
  const [groups,setGroups]=useState([])
  const[currentBill,setCurrentBill]=useState({})


  const fetchFriends=()=>{
    axios.get("/api/friends/getAll")
    .then((response)=>{
      console.log('friends',response.data);
      setFriends(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const fetchGroups=()=>{
    axios.get("/api/groups/getAll")
    .then((response)=>{
      console.log('groups',response.data);
      setGroups(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const fetchBills=()=>{
    axios.get("/api/bills/getAll")
    .then((response)=>{
      console.log('bills',response.data);
      setBills(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const fetch=()=>{
    fetchGroups()
    fetchFriends()
    fetchBills()
  }

  const handleCreateGroup=(newGroup)=>{
    axios.post('/api/groups/add',newGroup)
    .then(()=>{
      setGroups([...groups, newGroup])
      fetchGroups()
      setView('home')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleCreateFriend=( name,email,password)=>{
    axios.post('/api/friends/add',{name:name,email:email,password:password})
    .then(()=>{
      fetchFriends()
      setView('home')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleCreateBill=(newBill)=>{
    axios.post('/api/bills/add',newBill)
    .then(()=>{
      setBills([...bills, newBill])
      fetchBills()
      setView('home')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const showOneBill=(bill)=>{
    setCurrentBill(bill)
    setView("resolve")
  }
  const handleDeleteGroup=(groupId)=>{
    axios.delete(`/api/groups/${groupId}`)
    .then(()=>{
      fetchGroups()
      setView('mygroups')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleDeleteBill=(billId)=>{
    axios.delete(`/api/bills/${billId}`)
    .then(()=>{
      fetchBills()
      setView('mybills')
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const fromIdtoIndex = (id)=>{
    let index 
    groups.forEach((e,i)=>{
      console.log('id:',id,'e.id:',e.id);
      if(e.id===id){
         index = i
      }
    })
    console.log(index);
    return index
  }



  const renderView=()=>{
    if(view==="login"){
      return   <Login 
      handleCreateFriend={handleCreateFriend}
      setView={setView}/>
  }
  else if(view==="home"){
    return (
    <div>
      <Navbar setView={setView}/>
      <Home setView={setView}/>
    </div>
    )
  }
  else if(view==="creategroup"){
    return ( <div>
      <Navbar setView={setView}/>
      <CreateGroup  friends={friends} handleCreateGroup={handleCreateGroup}/>
    </div>
    )
  }
  else if(view==="createbill"){
    return (
      <div>
        <Navbar setView={setView}/>
        <CreateBill groups={groups}friends={friends} handleCreateBill={handleCreateBill} />
      </div>
    )
  }
  else if(view==="mygroups"){
    return (
      <div>
        <Navbar setView={setView}/>
        <MyGroups groups={groups} handleDeleteGroup={handleDeleteGroup} />
      </div>
    )
  }
  else if(view==="mybills"){
    return (
      <div>
        <Navbar setView={setView}/>
        <MyBills setView={setView} showOneBill={showOneBill} bills={bills} handleDeleteBill={handleDeleteBill} />
      </div>
    )
  }
  else if(view==="resolve"){
    return (
      <div>
        <Navbar setView={setView}/>
        <ResolveBill setView={setView} currentBill={currentBill} groups={groups} handleDeleteBill={handleDeleteBill} fromIdtoIndex={fromIdtoIndex} />
      </div>
    )
  }
  }
  
useEffect(()=>{
  fetch()
},[])

  return (
    <div>
      {renderView()}
    </div>
  )
}

export default App
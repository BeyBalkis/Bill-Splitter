import React from 'react'
import CreateGrpCard from './CreateGrpCard.jsx'
import CreateBCared from './CreateBCared.jsx'

const Home = (props) => {
  return (
    <div className='container-bills'>
      <CreateGrpCard setView={props.setView}/>
      <CreateBCared setView={props.setView}/>
    </div>
  )
}

export default Home
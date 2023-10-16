import React, { useState } from 'react'
import './index.css';
import Modal from './Components/modal';
import Backdrop from './Components/Bacdrop';

function TODO(props) {

    const[isModalOpen, setIsModalOpen] = useState(false)
    function handleOnClick  () {
        setIsModalOpen(true)
    }

  

    function closeModalHandler(){
        setIsModalOpen(false)
    }
  return (
    <div className='card'>
      <h1>{props.text}</h1>
      <div className='actions'>
        <button className='btn' onClick={handleOnClick}>Delete</button>
      </div>
      {isModalOpen ?  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : "" }
      {isModalOpen ?  <Backdrop onCancel={closeModalHandler}/> : "" }
    
    </div>
  )
}

export default TODO

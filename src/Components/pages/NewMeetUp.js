import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetUp/NewMeetupForm'

function NewMeetUp() {

  const navigate = useNavigate();

  function addMeetupHandler(meetupData){ 
    fetch(
      'https://my-first-react-project-6e271-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type' : 'application/json'
      }
    }
    ).then(() =>{
      navigate.push('/');
    });
    }
  return (
   <section>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
   </section>
  )
}

export default NewMeetUp

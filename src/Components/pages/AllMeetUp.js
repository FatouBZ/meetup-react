
import React from 'react'
import MeetUpList from '../meetUp/MeetUpList';
import { useState, useEffect } from 'react';

function AllMeetUp() {

  const [isLoading, setIsLoading] = useState(true)
  const [LoadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() =>{
    setIsLoading(true)
    fetch(
      'https://my-first-react-project-6e271-default-rtdb.firebaseio.com/meetups.json',
    )
    .then((response) =>{
      return response.json();
    })
    .then((data) => {

      const meetups =[];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }


      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);
  
  if(isLoading){
    return <section>
      <p>Loading.....</p>
    </section>
  }



  return (
    <div>
        <h1>All Meetup</h1> 
        <MeetUpList meetups={LoadedMeetups} />
    </div>
  )
}

export default AllMeetUp

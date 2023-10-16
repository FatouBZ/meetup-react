import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../../favorites-context'
import MeetUpList from '../meetUp/MeetUpList'

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext)

  let content;

  if(favoritesCtx.totalFavorites === 0){
    content = <p>You got no favorites yet. Start adding some?</p>
  }else{
    content = <MeetUpList meetups={favoritesCtx.favorites}/>
  }
  return (


    <section>
      <h1>My favorite</h1>
      {content}
    </section>
  )
}

export default Favorites

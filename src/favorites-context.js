import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) =>{},
    removeFavorites: (meetupId) =>{},
    itemFavorite: (meetupId) =>{}
});

export function FavoritesContextProvider(props) {

const [userFavorites, setUserFavorites] = useState([]) 



function  addFavoriteHandler( favoriteMeetup ){
setUserFavorites((prevUserFavorites) =>{
    return prevUserFavorites.concat(favoriteMeetup)
})
}

function removeFavoriteHandler(meetupId){
    setUserFavorites(prevUserFavorites =>{
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
}

function itemFavoriteHandler (meetupId){
    return userFavorites.some(meetup => meetup.id === meetupId);
}




    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorites: removeFavoriteHandler,
        itemIsFavorite: itemFavoriteHandler

    }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext;

import React from 'react'
import classes from './MeetUpItem.module.css'
import { useContext } from 'react'
import Card from '../ui/Card'
import FavoritesContext from '../../favorites-context'

function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext)


  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)


  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoritesCtx.removeFavorites(props.id)
    } else{
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
        <Card>
        <div>
            <img className={classes.image} src={props.image} alt={props.alt}/>
        </div>
        <div className={classes.content}>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <div className={classes.action}>
            <button onClick={toggleFavoriteStatusHandler}> {itemIsFavorite ? 'Remove from favorite': 'To Favorite'} </button>
        </div>
        </div>

        </Card>
       
    </li>
  )
}

export default MeetUpItem

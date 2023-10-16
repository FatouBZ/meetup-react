import React from 'react'
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../favorites-context';
import Favorites from '../pages/Favorites';


function MainNAvigation() {
  const favoritesCtx = useContext(FavoritesContext)
  return (
      <header className={classes.header}>
        <div className={classes.logo}>React Meet Up</div>
      <nav>
        <ul>
            <li>
                <Link to="/">All MeetUp</Link>
            </li>
            <li>
                <Link to="/NewMeetUp">New MeetUp</Link>
            </li>
            <li>
                <Link to="/Favorite"> My Favorites 
                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
            </li>
        </ul>
      </nav>
      </header>
  )
}

export default MainNAvigation

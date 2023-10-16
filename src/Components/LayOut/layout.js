import React from 'react'
import MainNAvigation from './MainNAvigation'
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
        <MainNAvigation/>
        <main className={classes.main}> 
            {props.children}
        </main>

    </div>
  )
}

export default Layout

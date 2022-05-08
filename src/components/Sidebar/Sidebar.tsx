import React from 'react'
import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        logo
      </div>
      <div className={styles.link}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to='/cartoons'>Cartoons</NavLink>
      </div>
    </div>
  )
}

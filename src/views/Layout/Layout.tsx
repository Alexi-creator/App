import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import styles from './Layout.module.scss'

export const Layout: React.FC = () => {

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav className={styles.sidebar}>
        <Sidebar />
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

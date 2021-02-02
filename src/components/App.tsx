import React from 'react'
import cn from 'classnames'
import { useHeadToHead } from '@src/store/hooks/useHeadToHead'
import styles from './App.module.scss'
import MatchBox from './matchBox/MatchBox'

const App = () => {
  const {
    status, data: headToHead, error,
  }:any = useHeadToHead()

  // console.log(JSON.stringify(headToHead))

  if (status === 'loading') {
    return <div className={ cn(styles.App) }>Chargement...</div>
  }

  if (status === 'error') {
    return <div className={ cn(styles.App) }>{error.message}</div>
  }

  return (
    <div className={ cn(styles.App) }>
      <h1>Finale</h1>
      <MatchBox headToHead={ headToHead } />
    </div>
  )
}

export default App

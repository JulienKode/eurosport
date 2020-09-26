import React from 'react'
import cn from 'classnames'
import { useHeadToHead } from '@src/store/hooks/useHeadToHead'
import styles from './App.module.scss'
import MatchBox from './matchBox/MatchBox'

const App = () => {
  const {
    status, data: headToHead, error,
  }:any = useHeadToHead()

  console.log({ headToHead })

  if (status === 'loading') {
    return 'Chargement...'
  }

  if (status === 'error') {
    return <div>{error.message}</div>
  }

  return (
    <div className={ cn(styles.App) }>
      <MatchBox headToHead={ headToHead } />
    </div>
  )
}

export default App

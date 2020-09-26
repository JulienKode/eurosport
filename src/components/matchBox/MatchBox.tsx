import React from 'react'
import cn from 'classnames'
import { PlayerType } from '@src/types'
import styles from './MatchBox.module.scss'
import Player from './player/Player'

interface Props{
  headToHead:PlayerType[]
}

const MatchBox: React.FC<Props> = ({ headToHead }) => {
  const renderPlayer = (index) => {
    const {
      firstname, lastname, picture, country, stats,
    } = headToHead[index]
    const props = {
      firstname, lastname, picture, country, stats,
    }
    return <Player { ...props } />
  }
  
  return (
    <div className={ cn(styles.MatchBox) }>
      {renderPlayer(0)}
      <div className={ cn(styles.versus) }>
        VS
      </div>
      {renderPlayer(1)}
    </div>
  )
}

export default MatchBox

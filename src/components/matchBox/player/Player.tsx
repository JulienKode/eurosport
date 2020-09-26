import React from 'react'
import cn from 'classnames'
import { PlayerType } from '@src/types'
import styles from './Player.module.scss'


interface Props extends PlayerType {
}

const Player: React.FC<Props> = ({
  firstname, lastname, picture, country, stats,
}) => {
  const renderStats = () => {
    const { rank, points, age } = stats
    return (
      <ul className={ cn(styles.stats) }>
        <li><span>Age</span> {age}</li>
        <li><span>Rank</span> {rank}</li>
        <li><span>Points</span> {points}</li>
      </ul>
    )
  }

  return (
    <div className={ cn(styles.Player) }>
      <img src={ picture.url } alt={ firstname } className={ cn(styles.picture) } />
      <div className={ cn(styles.name) }>
        <img src={ country.picture.url } className={ cn(styles.country) } />
        {firstname} {lastname}
      </div>
      {renderStats()}
    </div>
  )
}

export default Player

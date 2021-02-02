import React from 'react'
import cn from 'classnames'
import { PlayerType } from '@src/types'
import { formatHeight, formatWeight } from '@src/helpers/format'
import styles from './Player.module.scss'
import WinsLosses from './winsLosses/WinsLosses'


interface Props extends PlayerType {
}

const Player: React.FC<Props> = ({
  firstname, lastname, picture, country, stats,
}) => {
  const renderStats = () => {
    const {
      rank, points, age, height, weight, last,
    } = stats
    return (
      <div className={ cn(styles.stats) }>
        <ul>
          <li><span>Rank</span> {rank}</li>
          <li><span>Points</span> {points}</li>
          <li><span>Age</span> {age}</li>
          <li><span>Height</span> {formatHeight(height)}</li>
          <li><span>Weight</span> {formatWeight(weight)}</li>
        </ul>
        <WinsLosses last={ last } />
      </div>
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

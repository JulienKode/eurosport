import React from 'react'
import cn from 'classnames'
import { getWinsLosses } from '@src/store/selectors/player'
import styles from './WinsLosses.module.scss'

interface Props{
  last:boolean[]
}

const WinsLosses: React.FC<Props> = ({ last }) => {
  const { wins, losses } = getWinsLosses(last)
  return (
    <div className={ cn(styles.WinsLosses) }>
      <div>Wins : {wins} </div>
      <div>Losses : {losses}</div>
    </div>
  )
}

export default WinsLosses

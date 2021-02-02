export const getWinsLosses = (last:boolean[]) => {
  return last.reduce((acc:{wins:number, losses:number}, cur:boolean) => {
    if (cur) acc.wins = acc.wins + 1
    else acc.losses = acc.losses + 1
    return acc
  }, {
    wins: 0,
    losses: 0,
  })
}

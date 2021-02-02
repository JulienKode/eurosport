
export interface PictureType {
  url:string
}
export interface StatsType {
  rank: number
  points: number
  age: number
  height:number
  weight:number
  last:boolean[]
}
export interface PlayerType {
  firstname: string
  lastname: string
  picture:PictureType
  country:{
    picture:PictureType
  }
  stats:StatsType
}

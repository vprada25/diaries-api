export type TWeather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'snowy'
export type TVisibility = 'good' | 'bad' | 'normal' | 'ok' | 'poor'

export interface IDiary {
  id: number
  date: string
  weather: TWeather
  visibility: TVisibility
  comment: string
}

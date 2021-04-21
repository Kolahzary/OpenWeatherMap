import { ICloudInfo } from './i-cloud-info.interface'
import { ICoord } from './i-coord.interface'
import { IMoreInfo } from './i-more-info.interface'
import { ISysInfo } from './i-sys-info.interface'
import { IWeatherMainInfo } from './i-weather-main-info.interface'
import { IWindInfo } from './i-wind-info.interface'

export interface IWeatherRecord {
  /**
   * City ID
   */
  id: number

  /**
   * City name
   */
  name: string

  /**
   * City geo location
   */
  coord: ICoord

  main: IWeatherMainInfo

  /**
   * Visibility, meter
   */
  visibility: number

  wind: IWindInfo

  clouds: ICloudInfo

  sys: ISysInfo

  /**
   * more info Weather condition codes
   */
  weather: IMoreInfo[]

  /**
   * Time of data calculation, unix, UTC
   */
  dt: number

  /**
   * Shift in seconds from UTC
   */
  timezone: number
}

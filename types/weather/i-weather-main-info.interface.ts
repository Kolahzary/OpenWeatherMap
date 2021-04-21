/* eslint-disable camelcase */
export interface IWeatherMainInfo {
  /**
   * Temperature
   */
  temp: number

  /**
   * Temperature. This temperature parameter accounts for the human perception of weather
   */
  feels_like: number

  /**
   * Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas).
   */
  temp_min: number

  /**
   * Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas).
   */
  temp_max: number

  /**
   * Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
   */
  pressure: number

  /**
   * Humidity, %
   */
  humidity: number
}

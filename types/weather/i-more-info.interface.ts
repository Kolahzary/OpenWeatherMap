export interface IMoreInfo {
  /**
   * Weather condition id
   */
  id: number

  /**
   * Group of weather parameters (Rain, Snow, Extreme etc.)
   */
  main: string

  /**
   * Weather condition within the group. You can get the output in your language.
   */
  description: string

  /**
   * Weather icon id
   */
  icon: string
}

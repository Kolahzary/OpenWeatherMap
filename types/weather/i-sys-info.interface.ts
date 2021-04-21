export interface ISysInfo {
  /**
   * Country code (GB, JP etc.)
   */
  country: string

  /**
   * Sunrise time, unix, UTC
   */
  sunrise: number

  /**
   * Sunset time, unix, UTC
   */
  sunset: number
}

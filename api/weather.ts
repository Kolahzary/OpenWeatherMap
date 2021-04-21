import { $axios } from '@/utils/axios-accessor'
import { IWeatherRecord } from '~/types'

export const WeatherApi = {
  getCurrentWeather(
    city: string,
    appId = '79c06f01f69f3f8a9cb88a7949c4a6d5',
    units = 'metric'
  ): Promise<IWeatherRecord> {
    return $axios.$request<IWeatherRecord>({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}`,
      method: 'GET',
    })
  },
}

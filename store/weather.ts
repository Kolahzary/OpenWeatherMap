import {
  Module,
  VuexAction,
  VuexModule,
  VuexMutation,
} from 'nuxt-property-decorator'
import { WeatherApi } from '~/api/weather'
import { IWeatherRecord } from '~/types'

@Module({
  name: 'weather',
  stateFactory: true,
  namespaced: true,
})
export default class WeatherModule extends VuexModule {
  items: IWeatherRecord[] = [
    {
      coord: {
        lon: 2.159,
        lat: 41.3888,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 13.49,
        feels_like: 12.77,
        temp_min: 12.22,
        temp_max: 14.44,
        pressure: 1014,
        humidity: 72,
      },
      visibility: 10000,
      wind: {
        speed: 4.12,
        deg: 50,
      },
      clouds: {
        all: 75,
      },
      dt: 1618998813,
      sys: {
        country: 'ES',
        sunrise: 1618981340,
        sunset: 1619030243,
      },
      timezone: 7200,
      id: 3128760,
      name: 'Barcelona',
    },
    {
      coord: {
        lon: -3.7026,
        lat: 40.4165,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 287.99,
        feels_like: 286.97,
        temp_min: 287.04,
        temp_max: 289.26,
        pressure: 1012,
        humidity: 55,
      },
      visibility: 10000,
      wind: {
        speed: 1.54,
        deg: 100,
      },
      clouds: {
        all: 0,
      },
      dt: 1618998601,
      sys: {
        country: 'ES',
        sunrise: 1618982837,
        sunset: 1619031558,
      },
      timezone: 7200,
      id: 3117735,
      name: 'Madrid',
    },
  ]

  @VuexMutation
  SET_ITEMS(items: IWeatherRecord[]) {
    this.items = items
  }

  @VuexAction({
    rawError: true,
  })
  async load() {
    // TODO: execute this action every 2 minutes
    const cities = ['Madrid', 'Barcelona']
    const promises = cities.map((city) => WeatherApi.getCurrentWeather(city))
    const records = await Promise.all(promises)

    this.SET_ITEMS(records)
  }
}

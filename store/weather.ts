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
  items: IWeatherRecord[] = []

  @VuexMutation
  ADD_ITEMS(items: IWeatherRecord[]) {
    this.items = this.items.concat(items)
  }

  @VuexAction({
    rawError: true,
  })
  async load() {
    const cities = ['Madrid', 'Barcelona']
    const promises = cities.map((city) => WeatherApi.getCurrentWeather(city))
    const records = await Promise.all(promises)

    // Don't allow adding duplicate records for same city (Weather data on server is not updated every seconds)
    const recordsToAdd = records.filter(
      (x) => !this.items.some((y) => x.id === y.id && x.dt === y.dt)
    )

    this.ADD_ITEMS(recordsToAdd)
  }
}

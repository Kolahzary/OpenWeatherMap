/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import WeatherModule from '~/store/weather'

export let weatherStore: WeatherModule

export function initialiseStores(store: Store<any>): void {
  weatherStore = getModule(WeatherModule, store)
}

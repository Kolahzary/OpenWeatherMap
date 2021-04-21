import { config } from 'vuex-module-decorators'
import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'

// Set rawError to true by default on all @Action decorators
config.rawError = true

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]

export * from '~/utils/store-accessor'

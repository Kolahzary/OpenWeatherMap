import { Plugin } from '@nuxt/types'

import { initializeAxios } from '~/utils/axios-accessor'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor

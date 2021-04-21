<template>
  <v-row justify="center" align="center">
    <v-data-table
      :headers="headers"
      :items="records"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-row>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import { weatherStore } from '~/store'

@Component
export default class IndexPage extends Vue {
  headers = [
    {
      text: 'Date',
      align: 'start',
      value: 'dt',
    },
    { text: 'City name', value: 'name' },
    { text: 'Wind speed', value: 'wind.speed' },
    { text: 'Humidity', value: 'main.humidity' },
    { text: 'Pressure', value: 'main.pressure' },
    { text: 'Temp', value: 'main.temp' },
    { text: 'Min Temp', value: 'main.temp_min' },
    { text: 'Max Temp', value: 'main.temp_max' },
    { text: 'Lat', value: 'coord.lat' },
    { text: 'Lon', value: 'coord.lon' },
    { text: 'Description', value: 'weather[0].description' },
  ]

  get records() {
    return weatherStore.items
  }

  async created() {
    await weatherStore.load()
  }
}
</script>

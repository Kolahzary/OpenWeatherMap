<template>
  <v-row justify="center" align="center">
    <v-data-table
      :loading="loading"
      dense
      :headers="headers"
      :items="recordsWithIndex"
      item-key="index"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
      <template #top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template #item.main.temp="{ item }">
        <v-chip :color="getColor(item.main.temp)" dark>
          {{ item.main.temp }}
        </v-chip>
      </template>
      <template #item.main.temp_min="{ item }">
        <v-chip :color="getColor(item.main.temp_min)" dark>
          {{ item.main.temp_min }}
        </v-chip>
      </template>
      <template #item.main.temp_max="{ item }">
        <v-chip :color="getColor(item.main.temp_max)" dark>
          {{ item.main.temp_max }}
        </v-chip>
      </template>
    </v-data-table>
  </v-row>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import { weatherStore } from '~/store'

@Component
export default class IndexPage extends Vue {
  intervalId: number | null = null
  loading = true
  search = ''

  headers = [
    {
      text: 'Date',
      align: 'start',
      value: 'date',
    },
    { text: 'Time', value: 'time' },
    { text: 'City name', value: 'name' },
    { filterable: false, text: 'Wind speed', value: 'wind.speed' },
    { filterable: false, text: 'Humidity', value: 'main.humidity' },
    { filterable: false, text: 'Pressure', value: 'main.pressure' },
    { filterable: false, text: 'Temp', value: 'main.temp' },
    { filterable: false, text: 'Min Temp', value: 'main.temp_min' },
    { filterable: false, text: 'Max Temp', value: 'main.temp_max' },
    { filterable: false, text: 'Lat', value: 'coord.lat' },
    { filterable: false, text: 'Lon', value: 'coord.lon' },
    { filterable: false, text: 'Description', value: 'weather[0].description' },
  ]

  // Adds an unique key to records
  get recordsWithIndex() {
    return this.records.map((item, index) => ({
      index,
      date: this.$dayjs(item.dt).format('YYYY/MM/DD'),
      time: this.$dayjs(item.dt).format('HH:MM:ss'),
      ...item,
    }))
  }

  get getColor() {
    return (value: number) => {
      if (value >= 30) {
        return '#880000'
      } else if (value <= 4) {
        return '#000088'
      } else {
        return '#008800'
      }
    }
  }

  get records() {
    return weatherStore.items
  }

  async fetchNewRecords() {
    this.loading = true
    await weatherStore.load()
    this.loading = false
  }

  async created() {
    await this.fetchNewRecords()

    this.intervalId = setInterval(async () => {
      await this.fetchNewRecords()
    }, 2 * 60 * 1000) as any
  }

  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
</script>

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

  // TODO: read records every 2 minutes from http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=79c06f01f69f3f8a9cb88a7949c4a6d5&units=metric
  records = [
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
      base: 'stations',
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
        type: 1,
        id: 6398,
        country: 'ES',
        sunrise: 1618981340,
        sunset: 1619030243,
      },
      timezone: 7200,
      id: 3128760,
      name: 'Barcelona',
      cod: 200,
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
      base: 'stations',
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
        type: 1,
        id: 6443,
        country: 'ES',
        sunrise: 1618982837,
        sunset: 1619031558,
      },
      timezone: 7200,
      id: 3117735,
      name: 'Madrid',
      cod: 200,
    },
  ]
}
</script>

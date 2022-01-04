# OpenWeatherMap API Project

Weather monitor for Madrid and Barcelona 

This was a test project after technichal interview of Atlann Company, They gave me one week deadline and I've managed to complete all requirements and send back the results in 5 hours.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


## Project definition


```
Please write an API to fetch the weather from the following URL and show the weather in Celsius for those two cities. Your API must get new weather every 2 minutes and show all results including (including past data) in a table in your view and paginate the result. For showing the table and making API calls, use Vue.js and Axios. You can also use other external libraries for the project like ag-grid tables or etc.

In the table, if the weather was over 30 degrees, you show the row as hot weather and if it was less than 4 degrees, you must show the row as cold. (it depends on you how you show it, using an icon or changing row color…) 

Also, you should have a filter for filtering table results by city name and date. For handling API requests you need to use Vuex. (and call through services if possible)

Here is the requirement for API calls: 
- API Token: 79c06f01f69f3f8a9cb88a7949c4a6d5
- Cities: Madrid and Barcelona
- Frameworks to use: Vue
 
Required field for showing in the table is:
- City name
- wind speed
- humidity
- pressure
- temp
- temp_min
- temp_max
- lon
- lat
- description
 
The temperature needs to be in celsius

Website address for current weather: https://openweathermap.org/current
```

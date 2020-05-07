import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let customURL = url
    if(country && country != 'Global') {
        customURL = `${url}/countries/${country}`
    }
    try {
        let  { data: { confirmed, recovered, deaths, lastUpdate }}  = await axios.get(customURL)
        let modifiedData = { confirmed, recovered, deaths, lastUpdate }
        console.log(modifiedData)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        let { data } = await axios.get(`${url}/daily`)
        let modifiedData = data.map((daily) => ({
            confirmed: daily.confirmed.total,
            deaths: daily.deaths.total,
            date: daily.reportDate
        }))
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try{
        let { data : { countries } } = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}
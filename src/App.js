import React, {Component} from 'react'
import corona from './images/corona.png'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount () {
        let fetchedData = await fetchData()
        this.setState({ data: fetchedData })

    }

    handleCountryChange = async (country) => {
        let fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render(){
        const { data, country } = this.state
        console.log(data)
        return (
            <div className={styles.container}>
                <img src={corona} alt="logo"  />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
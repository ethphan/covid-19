import React from 'react'
import {Component} from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {
    state = {
        data: {}
    }
    async componentDidMount () {
        let fetchedData = await fetchData()
        this.setState({ data: fetchedData })

    }
    render(){
        const { data } = this.state
        console.log(data)
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App
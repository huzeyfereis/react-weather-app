import React, { Component } from 'react'
import CitySearch from './CitySearch'
import CityInfo from './CityInfo'
import FavoriteCities from './FavoriteCities'

const Api_Key = '0363c68263ac89ccc65f53b7b66e8ece'

class Weather extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: undefined,
			temprature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: undefined,
			bookmarks: [],
			isLoading: false
		}
	}

	getWeather = async e => {
		const city = e.target.elements.city.value
		const country = e.target.elements.country.value
		e.preventDefault()

		if (city && country) {
			this.setState({
				isLoading: true
			})
			const api_call = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
			)
			const response = await api_call.json()
			console.log(response)
			if (response && response.name.toLowerCase() === city.toLowerCase()) {
				this.setState({
					id: response.id,
					temprature: Number(Math.floor(response.main.temp - 273.15)) + '°C',
					city: response.name,
					country: response.sys.country,
					humidity: response.main.humidity,
					description: response.weather[0].description,
					error: '',
					isLoading: false
				})
			}
		} else {
			this.setState({
				error: 'Please input search values...'
			})
		}
	}

	add = () => {
		let favCities = this.state.bookmarks
		const isFavorite = favCities.some(bookmark => bookmark.id === this.state.id)
		if (!isFavorite) {
			let city = {
				id: this.state.id,
				city: this.state.city,
				country: this.state.country
			}
			favCities.push(city)

			this.setState({
				bookmarks: favCities
			})
			console.log(this.state.bookmarks)
		}
	}

	handleUnmark = element => {
		let arr = this.state.bookmarks.filter(
			city => city.id != element.target.name
		)
		this.setState({
			bookmarks: arr
		})

		console.log(this.state.bookmarks)
		console.log(element.target.name)
	}

	render() {
		return (
			<div className='main'>
				<img
					className='weather-image'
					src='https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict000354232379.jpg'
				/>
				<CitySearch
					getWeather={this.getWeather}
					loading={this.state.isLoading}
				/>{' '}
				<CityInfo
					id={this.state.id}
					temprature={this.state.temprature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}
					addFav={this.add}
					bookmarks={this.state.bookmarks}
				/>{' '}
				<FavoriteCities
					cities={this.state.bookmarks}
					unmark={this.handleUnmark}
				/>{' '}
			</div>
		)
	}
}

export default Weather

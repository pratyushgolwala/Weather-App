import React, { Component } from 'react';
import PropTypes from 'prop-types'



const apiKey = '630b4caae46bb9a97515cbb103be8869';

export default class MenuCards extends Component {
    static defaultProps = {
        country: 'us'
    }
    static propTypes = {
        country: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            weatherData: [],
            loading: true,
            selectedCityIndex: 0,
            isFading: false,
        };
    }

    async componentDidMount() {
        this.fetchWeatherData();
    }

    fetchWeatherData = async () => {
        try {
            const { cityIds } = this.props;

            if (!cityIds || cityIds.length === 0) {
                console.error("No city IDs provided!");
                return;
            }

            const formattedCityIds = cityIds.replace(/[{}]/g, '');


            const url = `https://api.openweathermap.org/data/2.5/group?id=${formattedCityIds}&appid=${apiKey}&units=metric`;
            console.log("API URL:", url); // Log the full URL for debugging

            const res = await fetch(url);

            if (!res.ok) {
                console.error("API call failed with status:", res.status);
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log(url);

            // Ensure the API response code is "200"
            if (!data.list || !Array.isArray(data.list)) {
                console.error("Unexpected API response format:", data);
                throw new Error("API Error: Unexpected response format");
            }

            const weatherData = data.list.map(item => ({
                city: item.name,
                country: item.sys.country,
                temperature: item.main.temp,
                description: item.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            }));

            this.setState({
                weatherData,
                loading: false,
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            this.setState({ loading: false });
        }
        
    };
        handleCityChange = (index) => {
            if (index !== this.state.selectedCityIndex) {
                this.setState({ isFading: true });
                console.log('hi');
                
                setTimeout(() => {
                    this.setState({ selectedCityIndex: index, isFading: false });
                }, 500);
            }
            // if(this.state.weatherData[index].temperature<0){
            //     document.body.style.background="#ddf0ff"
            // }
            // else if (this.state.weatherData[index].temperature>20) {
            //     document.body.style.background="#ffc534"
            // } else {
            //     document.body.style.background="#cccccc"
            // }
        };
        



    render() {
        const { weatherData, loading, selectedCityIndex, isFading } = this.state;


        return (
            <div>
                <div className="container my-3">
                    <h1 className="d-flex justify-content-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "700" }}>Weather Forecast</h1>
                    {loading ? (
                        <h3 className="text-center">Loading...</h3>
                    ) : (

                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '60vh' }}>
                            {/* Card */}
                            <div className={`card-container `}>
                                <div
                                    className={`card ${isFading ? 'hidden' : ''}`}
                                    style={{ width: '85%' }}
                                >
                                    {/* <img
                                        src={weatherData[selectedCityIndex].icon}
                                        className="card-img-top"
                                        alt={weatherData[selectedCityIndex].description}
                                    /> */}
                                    <div className="card-body text-center">
                                        <h5 className="card-title">
                                            {weatherData[selectedCityIndex].city}, {weatherData[selectedCityIndex].country}
                                        </h5>
                                        <p className="card-text">Temperature: {weatherData[selectedCityIndex].temperature}°C</p>
                                        <p className="card-text">Condition: {weatherData[selectedCityIndex].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex justify-content-center mt-4 my-30">
                                {weatherData.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`btn mx-2 ${selectedCityIndex === index ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => this.handleCityChange(index)}
                                    >
                                        {weatherData[index].city}
                                    </button>
                                ))}
                            </div>
                        </div>



                    )}


                </div>
            </div >
        );
    }
}

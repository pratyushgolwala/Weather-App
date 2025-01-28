import React, { Component } from 'react'

export default class Fooditem extends Component {
    render() {
        let { icon, description, city, country, temperature, } = this.props;
        return (
            <div>
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src={icon}
                    className="img-fluid rounded-start"
                    alt={description}
                    style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'cover' }}
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{city}, {country}</h5>
                    <p className="card-text">Temperature: {temperature}°C</p>
                    <p className="card-text">Condition: {description}</p>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}

import React from 'react'
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

import FlightStopDuration from './FlightStopDuration';
import FlightCabin from './FlightCabin';

function Products() {

    const flightsList = useSelector((state: RootState) => state.flights);
    const { ReferenceList } = flightsList;

   // console.log((ReferenceList[1]?.Product));
    const allProducts = ReferenceList[1]?.Product;
    console.log(allProducts)

    return (
        <div>
            {allProducts && allProducts.map((singleProduct, index) => (
                <div key={index} className="card w-100 mb-3 bg-success p-2 text-white" style={{ width: "18rem", "--bs-bg-opacity": ".5" }}>
                    <div className="card-body">
                        <h5 className="card-title">Total Duration :{singleProduct.totalDuration}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Stops :{singleProduct.FlightSegment.length}</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Stops :{singleProduct.FlightSegment.length}</h6>
                        <FlightStopDuration flightStopDuration={singleProduct.FlightSegment}/>
                        <FlightCabin classOfTravel={singleProduct.PassengerFlight}/>
                       
                        {/* Add more elements based on your product structure */}
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products
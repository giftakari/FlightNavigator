import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Flights() {
    const flightsList = useSelector((state: RootState) => state.flights);
    const {   ReferenceList  } = flightsList;

    console.log((ReferenceList[0]?.Flight));
    const allFlights = ReferenceList[0]?.Flight;

    return (
        <div>
            {allFlights && allFlights.map((singleFlight: any) => (
                <div key={singleFlight.id}>
                    <div className="card " style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{singleFlight.Departure.location
                            }-Time {singleFlight.Departure.time}</h5>
                            <h5 className="card-title">{singleFlight.Arrival.location
                            }- Time {singleFlight.Arrival.time}</h5>
                            
                            <h6 className="card-subtitle mb-2 text-body-secondary"> Airline {singleFlight.carrier
                            }</h6>
                             <h6 className="card-subtitle mb-2 text-body-secondary"> Equipment {singleFlight.equipment
                            } </h6>
                             <h6 className="card-subtitle mb-2 text-body-secondary">  Flight No {singleFlight.number}</h6>
                            
                             <h6 className="card-subtitle mb-2 text-body-secondary"> Distance {singleFlight.distance
                            }</h6>
                               <h6 className="card-subtitle mb-2 text-body-secondary"> Duration {singleFlight.duration
                            }</h6>
                               <h6 className="card-subtitle mb-2 text-body-secondary"> Terminal {singleFlight.Arrival.terminal
                            }</h6>
                          
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

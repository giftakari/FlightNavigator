import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Flights() {
  const flightsList = useSelector((state: RootState) => state.flights);
  const { CatalogProductOfferingsResponse: { ReferenceList } } = flightsList;

  console.log((ReferenceList[0]?.Flight));
  const allFlights = ReferenceList[0]?.Flight;

  return (
    <div>
      {allFlights && allFlights.map((singleFlight: any) => (
        <div key={singleFlight.type}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{singleFlight.Departure.location
              }</h5>
              <h5 className="card-title">{singleFlight.Arrival.location
              }</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{singleFlight.carrier
              }</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Price() {

    const flightsList = useSelector((state: RootState) => state.flights);
    const { CatalogProductOfferings:{CatalogProductOffering}} = flightsList;
    console.log('price here',CatalogProductOffering)

  return (
    <div className="card bg-warning p-2 text-white" style={{width: "18rem"}} >
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  )
}

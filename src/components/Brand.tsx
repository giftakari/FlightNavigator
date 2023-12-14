import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Brand() {
    const flightsList = useSelector((state: RootState) => state.flights);
    const {   ReferenceList  } = flightsList;

    console.log((ReferenceList[3]?.Brand
        ));
    const allProducts = ReferenceList[3]?.Brand
    ;
    console.log(allProducts)
  return (
    <div>Brand</div>
  )
}

export default Brand
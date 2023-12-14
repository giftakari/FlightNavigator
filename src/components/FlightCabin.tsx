import React from 'react'

function FlightCabin({ classOfTravel }) {

  const [FlightProduct] = classOfTravel


  //const { cabin } = FlightProduct;
  //console.log(cabin); // Output: "Economy"
  // console.log('cabin here', FlightProduct)
 // console.log('class updated  here', classOfTravel)
  //console.log('cabine here ooooooo', FlightProduct.FlightProduct)
  return (
    <div>
      {classOfTravel.length > 0 && (
        <div>
          {FlightProduct.FlightProduct
            .map((checkClassOfTravel:any
              , index: React.Key | null | undefined) => (
              <p key={index}>Class :{checkClassOfTravel.cabin}</p>
            ))}
        </div>
      )}
    </div>
  );
}

export default FlightCabin
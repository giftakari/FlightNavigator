import React from 'react'


export default function FlightStopDuration({ flightStopDuration }) {
  const nonEmptyDurations = flightStopDuration.filter(
    stopsDuration => stopsDuration.connectionDuration
  );

  return (
    <div>
      {nonEmptyDurations.length > 0 && (
        <div>
          {nonEmptyDurations.map((stopsDuration, index) => (
            <p key={index}>Stop duration {stopsDuration.connectionDuration}</p>
          ))}
        </div>
      )}
    </div>
  );
}

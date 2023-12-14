import React from 'react';

const RecursiveObjectRenderer = ({ data }) => {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <RecursiveObjectRenderer data={item} />
              <h3>Header</h3>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              <strong>{key}:</strong>
              <RecursiveObjectRenderer data={data[key]} />
              <h3>Tail here </h3>
            </li>
          ))}
        </ul>
      );
    }
  } else {
    return <span>{data}</span>;
  }
};

export default RecursiveObjectRenderer

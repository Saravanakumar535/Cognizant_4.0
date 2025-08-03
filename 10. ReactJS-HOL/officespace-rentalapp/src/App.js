import React from 'react';

function App() {
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "WeWork",
      rent: 75000,
      address: "Bangalore",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "SmartWorks",
      rent: 58000,
      address: "Hyderabad",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Office Space , at Affordable Range</h1>
      
      {offices.map((item, index) => {
        const rentColor = item.rent <= 60000 ? "red" : "green";

        return (
          <div key={index} style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '20px',
            width: '300px'
          }}>
            <img src={item.image} width="100%" height="150px" alt="Office" />
            <h2>Name: {item.name}</h2>
            <h3 style={{ color: rentColor }}>Rent Rs. {item.rent}</h3>
            <h3>Address: {item.address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;

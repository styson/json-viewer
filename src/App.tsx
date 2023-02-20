import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import './App.css';

interface Item {
  address: string;
  name: string;
}

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h2>Test JSON</h2>
      <div className="App">
        <Table striped bordered hover size='sm' responsive>
          <tr><th>Name</th><th>Address</th></tr>
          {data &&
            data.length > 0 &&
            data.map((item: Item) => {
              return <tr><td>{item.name}</td><td>{item.address}</td></tr>;
            })}
        </Table>
      </div>
    </Container>
  );
}

export default App;

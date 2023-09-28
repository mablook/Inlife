import React from 'react';
import { Landlord } from 'uiTypes';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Landlords.css';

interface LandlordsProps {
  landlords: Landlord[] | null | undefined;
}

const Landlords: React.FC<LandlordsProps> = ({ landlords }) => {
  return (
    <Container>
      <h1>Landlords</h1>
      <div className="landlords-container">
        {landlords?.map((landlord) => (
          <Card key={landlord?.id ?? 'unknown'} className="landlords-card">
            <Card.Body>
              <Card.Text>Email: {landlord?.email ?? 'Unknown'}</Card.Text>
              <Card.Text>First Name: {landlord?.firstName ?? 'Unknown'}</Card.Text>
              <Card.Text>Last Name: {landlord?.lastName ?? 'Unknown'}</Card.Text>
              {landlord?.properties && (
                landlord?.properties.map((properties) => (
                <Card.Text>Internal Name: {properties.internalName}</Card.Text>
                ))
              )}
            </Card.Body>
          </Card>
        )) ?? <div>No landlords found.</div>}
      </div>
    </Container>
  );
};

export default Landlords;
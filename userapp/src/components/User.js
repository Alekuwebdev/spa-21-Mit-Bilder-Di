import React, { useState, useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";

const User = (props) => {
    /* console.log(props.user) */
    const {name,username,company,website}=props.user //wir haben von user benötigte teilen genommen und davon "variablen " gemacht damit weiter einefach "name" schgraiben statt props.name
  const [imageUrl, setImageUrl] = useState(null); // Hier schreiben wir ein neues state für Bilder URL und in useState sagen dass zuerst hier nichts gibt = null
  
  
  const getImageUrl = async () => {
    const response = await fetch("https://picsum.photos/200");
    /* console.log(response) */
    setImageUrl(response.url); //ohne json weil wir bekommnen schon diese url in console in tail Response
  };
  
  // getImageUrl(); => Hier haben wir Endlose schleife

  useEffect(() => {
      getImageUrl(); // Wenn wir die Funktion außerhalb von useEffect aufrufen, bekommen wir endlose Schleife 

  }, []);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title> {/* name */}
          <Card.Text>
              {username} works at {company.name} {/* username + companyname */}
          </Card.Text>
          <Card.Text>
              <a href={`http://www.${website}`} rel="noreferrer" target = "blank">Website</a>
          </Card.Text>
          <Button onClick={getImageUrl}>
              New Img
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default User;

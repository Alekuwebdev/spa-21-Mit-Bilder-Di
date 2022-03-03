import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row"; //import {Row} from 'react-bootstrap'
import User from './components/User';


function App() {
  const [users, setUsers] = useState([])// um daten von users zu speichern in leere array
    //useEffect ist eine function wie eine schleife, nimmt 2 parameter: 1)leere anonym function wo wir schreiben was sie machen soll 2)leere array
    useEffect(() => {//wier möchten daten von server holen
        async function fetchedData() {// um daten zu holen wir brauchen useEffect, die Function im useEffect immer asynchron ist.
            const response = await fetch("https://jsonplaceholder.typicode.com/users") // Hier bekommen wir Respons
            const responseUsers = await response.json() // Hier bekommen wir Json Datei. Weiter sollen wir dieses packet in eine leeren array in useEffect rein packen
            //console.log(response)
            setUsers(responseUsers)//Wir ersetzen array in Zeile 4 mit daten von Zeile 9
            // console.log(responseUsers)
        }
        fetchedData()

    },[])

    // Wir brauchen name,username,company name, webseite

    return(
        <div className="App">
            <Row xs={1} md={2} className="g-4">
                {
                    users.map(user =>(
                        <User 
                          key={user.id}
                          user={user}
                        />
                    ))
                }
            </Row>
        </div>
    )
  
}
export default App;






import React, { useEffect} from 'react';
import './App.css';

function consumirServiço(url) {
       
       return fetch(url)
       .then (response => {
        if (!response.ok) {
          throw new Error ("Erro ao consumir o serviço");
        }
        return response.json();
       })
       .catch (error => {
        console.error ('Erro:', error);
        throw error;
       })
      }

function App() {
  const url = 'https://course-api.com/react-tours-project';

  useEffect(() => {
    consumirServiço(url)
    .then(data => {
      console.log ("Dados do serviço:", data)
    })
    .catch(error => {
      console.error("Erro ao consumir serviço:", error);
    })
  } )

  return (
    <div className="App">
      console.log(url)    
    </div>
  );
}

export default App;

    {/* criar uma função que consuma o serviço  (Link) com o fetch e returnar um console com o resultado do serviço. Invocar essa função em useEffect*/}

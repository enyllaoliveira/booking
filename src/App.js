//   return (
//     <div>
//       <h1>Meus dados da API</h1>
//       <ul>
//         {dadosAPI.map((item, index) => (
//           <li key={index}>{item.nome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

export default function App() {
  const [dadosAPI, setDadosAPI] = useState([]);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((dados) => setDadosAPI(dados))
      .catch((erro) => console.error("Erro ao buscar dados da API", erro));
  }, []);

  return (
    <div>
      {dadosAPI.map((item, index) => (
        <h1 key={index}>{item.nome}</h1>
      ))}
    </div>
  );
}

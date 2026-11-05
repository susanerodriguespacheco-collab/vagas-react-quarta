import { useParams } from "react-router";
import vagalist from "../data/vaga.js";  
function VagaDetalhe() {
  const { id } = useParams();   

  console.log("vagalist", vagalist);   

  const vagaLoop = vagalist.filter(item => {
    console.log("item.id", item);
    return item.id === Number(id);
  });

  if (vagaLoop.length === 0) {
    return (
      <div>
        <h1>Vaga com ID {id} não encontrada</h1>
        <p>A vaga selecionada não existe.</p>
      </div>
    );
  }
  const vagaselecionada = vagaLoop[0];

  return (
    <div>
        <h1>Detalhes da Vaga {id}</h1>
        <p>informações sobre a vaga selecionada.</p>
        <h2>{vagaselecionada.cargo}</h2>
        <h3>{vagaselecionada.empresa}</h3>
        <h4>R$ {vagaselecionada.salario}</h4>
        <p>{vagaselecionada.descricao}</p>
        <p>{vagaselecionada.area}</p>
        
    </div>
  );
}

export default VagaDetalhe;
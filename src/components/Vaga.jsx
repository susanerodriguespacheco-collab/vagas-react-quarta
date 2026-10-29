import vagalist from "../data/vaga.js";
import VagaCard from "./VagaCard.jsx";

function Vaga() {
    return(
        <>
        <main>
            <div className="conteudo__header">
                <h2>Últimas vagas</h2>
                <span>7 vagas - atualizado agora</span>
            </div>

         {
            vagalist.map((vaga) => (
                <VagaCard
                    key={vaga.id}
                    empresa={vaga.empresa}
                    cargo={vaga.cargo}
                    salario={vaga.salario}
                    modelo={vaga.modelo}
                    tempo={vaga.tempo}
                />
            ))
         }




        </main>

        <aside>
            <div className="conteudo__header">
                <h3>Filtros</h3>
                <a id ="btn-limpar" href="">limpar</a>
            </div>
            <div className=" alert">
                filtros limpar!
            </div>

            <div className="conteudo__filter">
                <p>Tipo de vaga</p>

                <label for="ck-efetivo">
                    <input  className="filtro" type="checkbox" name="ck-efetivo" id="ck-efetivo" /> Efetivo
                </label>
                <label for="ck-estagio">
                    <input className="filtro" type="checkbox" name="ck-estagio" id="ck-estagio" /> Estágio
                </label>
                <label for="ck-meio">
                    <input className="filtro" type="checkbox" name="ck-meio" id="ck-meio" /> Meio período
                </label>
            </div>
            <div className="conteudo__filter">
                <p>Área</p>

                <label for="ck-engenharia">
                    <input className = "filtro" type="checkbox" name="ck-engenharia" id="ck-engenharia" /> Engenharia
                </label>
                <label for="ck-design">
                    <input className = "filtro" type="checkbox" name="ck-design" id="ck-design" /> Design
                </label>
                <label for="ck-gestao">
                    <input className = "filtro" type="checkbox" name="ck-gestao" id="ck-gestao" /> Gestão
                </label>
            </div>
            <div className="conteudo__filter">
                <p>Localização</p>

                <label for="ck-sp">
                    <input className = "filtro" type="checkbox" name="ck-sp" id="ck-sp" /> São Paulo
                </label>
                <label for="ck-sc">
                    <input className = "filtro" type="checkbox" name="ck-sc" id="ck-sc" /> Santa Catarina
                </label>
                <label for="ck-rs">
                    <input className = "filtro" type="checkbox" name="ck-rs" id="ck-rs" /> Rio Grande do Sul
                </label>
            </div>
        </aside>
    </>  
    )
}
export default Vaga;
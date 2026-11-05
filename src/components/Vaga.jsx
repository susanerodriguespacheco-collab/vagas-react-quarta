import vagalist from "../data/vaga.js";
import VagaCard from "./VagaCard.jsx";

function Vagas() {
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
                    id={vaga.id}
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

                <label htmlFor="ck-efetivo">
                    <input  className="filtro" type="checkbox" name="ck-efetivo" id="ck-efetivo" /> Efetivo
                </label>
                <label htmlFor="ck-estagio">
                    <input className="filtro" type="checkbox" name="ck-estagio" id="ck-estagio" /> Estágio
                </label>
                <label htmlFor="ck-meio">
                    <input className="filtro" type="checkbox" name="ck-meio" id="ck-meio" /> Meio período
                </label>
            </div>
            <div className="conteudo__filter">
                <p>Área</p>

                <label htmlFor="ck-engenharia">
                    <input className = "filtro" type="checkbox" name="ck-engenharia" id="ck-engenharia" /> Engenharia
                </label>
                <label htmlFor="ck-design">
                    <input className = "filtro" type="checkbox" name="ck-design" id="ck-design" /> Design
                </label>
                <label htmlFor="ck-gestao">
                    <input className = "filtro" type="checkbox" name="ck-gestao" id="ck-gestao" /> Gestão
                </label>
            </div>
            <div className="conteudo__filter">
                <p>Localização</p>

                <label htmlFor="ck-sp">
                    <input className = "filtro" type="checkbox" name="ck-sp" id="ck-sp" /> São Paulo
                </label>
                <label htmlFor="ck-sc">
                    <input className = "filtro" type="checkbox" name="ck-sc" id="ck-sc" /> Santa Catarina
                </label>
                <label htmlFor="ck-rs">
                    <input className = "filtro" type="checkbox" name="ck-rs" id="ck-rs" /> Rio Grande do Sul
                </label>
            </div>
        </aside>
    </>  
    )
    }
    export default Vagas;
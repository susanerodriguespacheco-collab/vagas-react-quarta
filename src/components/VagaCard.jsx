   function VagaCard(
   { empresa,
    cargo,
    salario,
    modelo,
    tempo,}
   ) {
        return (
   
   <div className="card">
                    <div className="card__avatar">
                        v
                    </div>
                    <div className="card__text">
                        <p>{empresa}</p>
                        <h3>{cargo}</h3>
                        <span className="salaro">{salario}</span>
                        <span>{modelo}</span>
                        <span>{tempo}</span>
                    </div>
                    <div className="card__actions">


                        <span>2h</span>
                        <a href="">candidatar-se</a>
                    </div>
                </div>

        )
    }       

    export default VagaCard;
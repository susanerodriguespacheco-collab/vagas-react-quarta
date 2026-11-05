import { useState } from "react";

function News() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
   function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            setError("Por favor, insira um email válido.");
            setSucess('');
            return;
        } else {
            setError("");
            setSuccess("Obrigado por se inscrever!");
            setEmail("");
        }
    }

    return (
      <form action="">
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com" 
        />
        
        <button
         className="btn" onClick={handleSubmit}>
            Inscrever-se
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

      </form>
    )
}

export default News;                
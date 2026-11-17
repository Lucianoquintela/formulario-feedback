
import "./FeedBackForm.css";
import { useState } from "react";

const FeedbackForm = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [comentario, setComentario] = useState("");
    const [msgErro, setMsgErro] = useState("");

    function enviarFeedback() {
        if (!nome || !email || !comentario) {
            setMsgErro("Por favor, preencha todos os campos!");
            return;
        }

        setMsgErro("");

        alert('Feedback enviado!' +
            `\n\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
        );
    }

    return (
        <div className="containerForm">
            <h1>Formulário de Feedback</h1>

            <div className="areaNome">
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className="areaEmail">
                <label>E-mail:</label>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="areaComentario">
                <label>Comentário:</label>
                <textarea
                    placeholder="Digite seu comentário"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                />
            </div>

            <p className="msgErro">{msgErro}</p>

            <div className="areaBtn">
                <button type="button" onClick={enviarFeedback}>
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default FeedbackForm;

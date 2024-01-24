import { Link, Navigate, useNavigate} from 'react-router-dom';
import './style.css'

import { useState } from "react";

const textosInicio = [
  {
    titulo: "Conheça nossos serviços",
    texto:
      "Explore uma variedade de serviços inovadores projetados para impulsionar seu negócio para o próximo nível. Clique em Próximo para descobrir mais.",
  },
  {
    titulo: "Transforme ideias em realidade",
    texto:
      "Na InovaTech, acreditamos no poder das ideias. Descubra como transformamos ideias em soluções tangíveis. Clique em Próximo para continuar sua jornada.",
  },
  {
    titulo: "Junte-se à Revolução da Inovação",
    texto:
      "Faça parte da revolução da inovação. Explore como a InovaTech está moldando o futuro. Clique em Próximo para começar sua jornada conosco.",
  },
];

const TopicosInicio = () => {
  const [topico, setTopico] = useState(0);
  const navigate = useNavigate();

  const handleAnterior = () => {
    if (topico > 0) setTopico((top) => top - 1);
  };

  const handleProximo = () => {
    if (topico < 2) setTopico((top) => top + 1)
    else navigate("/servicos");
  };

  return (
    <main className="topicos-inicio">
      <section className="counter-topicos-inicio">
        <div className={topico >= 0 ? "active" : ""}>1</div>
        <div className={topico >= 1 ? "active" : ""}>2</div>
        <div className={topico >= 2 ? "active" : ""}>3</div>
      </section>

      <article className="texto-topico">
        <h2>{textosInicio[topico].titulo}</h2>
        <p>{textosInicio[topico].texto}</p>
      </article>

      <section className="flex-botoes">
        {topico > 0 && (
          <button className="botao-counter anterior" onClick={handleAnterior}>
            Anterior
          </button>
        )}
        <button className="botao-counter proximo" onClick={handleProximo}>
          {topico === 2 ? "Vamos lá" : "Próximo"}
        </button>
      </section>
    </main>
  );
};

export default TopicosInicio;

import './style.css'

import iconeCodigo from '/icons/icons8-code-100.png'
import iconeConsulta from '/icons/icons8-consult-64.png'
import iconeDesign from '/icons/icons8-design-96.png'
import iconeMarketing from '/icons/icons8-marketing-64.png'
import iconeTreinamento from '/icons/icons8-tutorial-64.png'

const servicos = [
  {
    icone: iconeCodigo ,
    nome: "Desenvolvimento de Software",
    descricao:
      "Transforme suas ideias em realidade com nossa equipe de desenvolvedores experientes.",
  },
  {
    icone: iconeMarketing,
    nome: "Marketing",
    descricao:
      "Alcance seu público-alvo e expanda sua presença online com nossas estratégias de marketing digital.",
  },
  {
    icone: iconeDesign,
    nome: "Design",
    descricao:
      "Deixe sua marca se destacar com nossos serviços de design inovador e criativo.",
  },
  {
    icone: iconeConsulta,
    nome: "Consultoria",
    descricao:
      "Obtenha insights estratégicos para impulsionar o crescimento e eficiência do seu negócio.",
  },
  {
    icone: iconeTreinamento ,
    nome: "Treinamento",
    descricao:
      "Capacite sua equipe com programas de treinamento personalizados para impulsionar o desempenho.",
  },
];

const CaixaServicos = ()=>{
    return(
        <main className='main-servicos'>
            <article className='lista-servicos'>
                {servicos.map((servico, index) =>{
                    return(
                        <section key={index} className='box-servico'>
                            <img src={servico.icone} alt="servico" />
                            <h3>{servico.nome}</h3>
                            <p>{servico.descricao}</p>
                        </section>
                    )
                })}
            </article>
        </main>
    )
}

export default CaixaServicos
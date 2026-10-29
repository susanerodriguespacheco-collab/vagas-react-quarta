import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Depoimentos from './components/Depoimentos'
import Vagas from './components/Vaga'
import React from 'react'
import './App.css'
import News from './components/News'

function App() {
  

  return (
    <React.Fragment>  
    <Header />  

    <Hero
    title="As melhores vagas em startup de tecnologia"
    subtitle="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras de recrutadores e candidatos que já fecharam vaga por aqui."
    >
    <button className="btn cta">Publicar Vaga - $299</button>
    </Hero>
  

<div className='conteudo'>
    <Vagas />
</div>


    <Hero
       title= "Vagas novas, toda quinta-feira"
       subtitle= "resumo curto das melhores vagas direto no seu inbox"
    >
      <News />
  </Hero >


    <Hero
    title="Quem já usa o OpenBoard"
    subtitle="Depoimentos de recrutadores e candidadtos que já fecharam vaga por aqui."
   >
    <Depoimentos />
   </Hero>


    <Footer />

  </React.Fragment>
  )
}

export default App
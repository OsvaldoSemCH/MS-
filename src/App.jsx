import style from './App.module.css'
import Aviao from './assets/Aviao.png'
import AsmQuicksort from './assets/AsmQuicksort.png'
import Ternaria from './assets/Ternaria.png'
import Foto from "./assets/Foto.jpg"

function App() {
  return (
    <>
  <header className={`${style.f}`} style={{position: 'sticky', top: 0, zIndex: 2, width: '98vw'}}>
      <div className={`${style.p10} ${style.m10} ${style.f} ${style.Header} ${style.b}`} style={{width: '20%', justifySelf: 'flex-start'}}>
              <img src={Foto} alt="Foto.jpg" className={`${style.FotoRedonda} ${style.b}`}/>
            <p style={{paddingLeft: '10px'}}>Eduardo Henrique Ribeiro da Silva</p>
        </div>
      <div className={`${style.p10} ${style.m10} ${style.b} ${style.InvisDiv}`} style={{opacity: '0%'}}></div>
    </header>
  <main className={`${style.f}`} style={{width: '98vw'}}>
      <aside className={`${style.p10} ${style.b} ${style.m10} ${style.f}`} style={{width: '20%', flexDirection: 'column', justifyContent: 'flex-start', zIndex: 1, wordBreak: 'break-word'}}>
            <a target='_blank' href="https://github.com/OsvaldoComCH">
              <figure className={`${style.p10} ${style.b} ${style.f2}`}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
                        alt="Github"
                        className={`${style.FotoRedonda}`}
                        width="60px"
                    />
                  <figcaption className={`${style.p10} ${style.text1}`}>OsvaldoComCH</figcaption>
                </figure>
            </a>
          <figure className={`${style.p10} ${style.b} ${style.f2}`}>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/mail.png"
                    alt="Email"
                    width="60px"
                />
              <figcaption className={`${style.text1}`} style={{fontSize: 'small'}}>EduardoHenriqueRibeiroBrasil@gmail.com</figcaption>
            </figure>
          {/* <div className={`${style.Pergaminho}`}>
              <img src={PergaminhoCima} style={{justifySelf: 'flex-start'}} width="100%"/>
            <div className={`${style.PergaminhoMeio}`}>

              </div>
              <img src={PergaminhoBaixo} style={{justifySelf: 'flex-end'}} width="100%"/>
          </div> */}
        </aside>
        
      <article className={`${style.p10} ${style.m10} ${style.b}`} style={{width: '80%', zIndex: 3}}>
          <p className={`${style.text3}`}>
                Bom Dia
            </p>
          <p className={`${style.text1}`}>
            </p>
          <section className={`${style.p10} ${style.m10} ${style.b}`}>
            <ul className={`${style.text1}`}>
                <a href='#Sobre'><li>Sobre</li></a>
                <a><li></li></a>
                <a href='#Projetos'><li>Projetos</li></a>
                <a><li></li></a>
            </ul>
          </section>
          <section className={`${style.p10} ${style.m10} ${style.b}`} id='Sobre'>
              <p className={`${style.text2}`}>
                    Sobre
                </p>
              <p className={`${style.text1}`}>Me chamo Eduardo Ribeiro, sou programador, principalmente em C e C++. Gosto da área de otimização e programação em linguagens de baixo nível.</p>
              <details className={`${style.p10} ${style.m10} ${style.b}`}>
                  <summary className={`${style.p10} ${style.text2}`}>Formação</summary>
                  <ul className={`${style.text1}`}>
                        <li>Informática Básica e Programação - Microlins (2020)</li>
                        <li>Inglês Avançado - Microlins (2021)</li>
                        <li>Curso Superior em Analise e Desenvolvimento de Sistemas - Uni Santa Cruz (Em andamento)</li>
                        <li>Curso Técnico em Desenvolvimento de Sistemas - SENAI (Em andamento)</li>
                    </ul>
                </details>
              <details className={`${style.p10} ${style.m10} ${style.b}`}>
                  <summary className={`${style.p10} ${style.text2}`}>Coisas que eu sei:
                      <sub className={`${style.text1}`} style={{fontSize: '10px'}}>(mas não me considero muito bom)</sub>
                    </summary>
                  <ul className={`${style.text1}`}>
                        <li>C#</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>PowerBI</li>
                        <li>Eletroeletrônica</li>
                        <li>Assembly x86/x64</li>
                        <li>IoT</li>
                        <li>Git</li>
                    </ul>
                </details>
              <details className={`${style.p10} ${style.m10} ${style.b}`}>
                  <summary className={`${style.p10} ${style.text2}`}>Coisas em que eu sou bom:</summary>
                  <ul className={`${style.text1}`}>
                        <li>C</li>
                        <li>C++</li>
                        <li>SQL Server</li>
                        <li>Inglês</li>
                    </ul>
                </details>
            </section>
          <section className={`${style.p10} ${style.m10} ${style.b}`} id='Projetos'>

              <p className={`${style.text2}`}>
                    Projetos
                </p>

              <details className={`${style.p10} ${style.m10} ${style.b} ${style.text1}`}>
                  <summary className={`${style.p10} ${style.text2}`}>Tetris_CPP:</summary>
                    Um jogo de Tetris para Windows x64, feito completamente em C++, sem o uso de qualquer biblioteca externa. 
                    O objetivo é que ele se torne um clone perfeito de Tetris, e eu quero adicionar algum tipo de inteligência artificial.
                    <br/><br/>
                    Esse projeto é o meu favorito, pois é o primeiro que eu fiz em C++, justamente para aprender a linguagem,
                    e eu ainda estou trabalhando nele.
                    <br/><br/>
                  <img className={`${style.b}`} src="https://github.com/OsvaldoComCH/OsvaldoComCH/raw/main/Tetris.png" alt="Tetris" width="60%"/>
                    <br/><br/>
                    A última versão pode ser encontrada <a target='_blank' href="https://github.com/OsvaldoComCH/Tetris_CPP/releases/latest">aqui </a>
                    e o código está disponível em:
                    <br/>
                    <a target='_blank' href="https://github.com/OsvaldoComCH/Tetris_CPP">https://github.com/OsvaldoComCH/Tetris_CPP</a>
                </details>
                
              <details className={`${style.p10} ${style.m10} ${style.b} ${style.text1}`}>
                  <summary className={`${style.p10} ${style.text2}`}>Ternaria:</summary>
                    Este jogo foi desenvolvido por
                    <a target='_blank' href="https://github.com/AmiltonMn">Amilton</a>,
                    <a target='_blank' href="https://github.com/Fernandohka">Fernando</a>,
                    e eu, como projeto para a disciplina de Lógica de Programação em nosso curso no SENAI.
                    Ele foi feito em C, usando a API do Windows para renderizar.
                    <br/><br/>
                    Nós queriamos fazer uma cópia do Terraria, e tinhamos apenas 2 semanas e meia para fazer.
                    Conseguimos um resultado muito bom, mesmo tendo que aprender várias coisas novas no caminho.
                    Acabamos até sendo convidados para expor este projeto no evento Mundo SENAI 2024, na nossa unidade.
                    <br/><br/>
                  <img className={`${style.b}`} src={Ternaria} alt="Ternaria" width="100%"/>
                    <br/><br/>
                    A última versão pode ser encontrada <a target='_blank' href="https://github.com/OsvaldoComCH/Ternaria/releases/latest">aqui </a>
                    e o código está disponível em:
                    <br/>
                    <a target='_blank' href="https://github.com/OsvaldoComCH/Ternaria">https://github.com/OsvaldoComCH/Ternaria</a>
                    <br/>
                    e nos forks do Amilton: <a target='_blank' href="https://github.com/AmiltonMn/Ternaria">https://github.com/AmiltonMn/Ternaria</a>
                    <br/>
                    e do Fernando: <a target='_blank' href="https://github.com/Fernandohka/Ternaria">https://github.com/Fernandohka/Ternaria</a>
                </details>

              <details className={`${style.p10} ${style.m10} ${style.b} ${style.text1}`}>
                  <summary className={`${style.p10} ${style.text2}`}>QuickerSort:</summary>
                    Visto a meu interesse por otimizações, em algum momento eu teria que aprender assembly,
                    então, depois de aprender o básico, eu tentei otimizar o Quicksort, que é um dos melhores
                    algoritmos de ordenação.
                    <br/><br/>
                    Eu compilei um código C++ do Quicksort e fiz o possível para otimizar o código assembly.
                    Embora ele tenha ficado mais rápido, eu tenho algumas ideias melhores pra adicionar, e,
                    no futuro, eu quero fazer uma DLL com esta e mais subrotinas otimizadas.
                    <br/><br/>
                  <img className={`${style.b}`} src={AsmQuicksort} alt="AsmQuicksort"/>
                </details>

            </section>
        </article>
      <marquee className={`${style.Aviao}`} style={{zIndex: 6}}>
            <img src={Aviao} alt="Aviao.png" width="5%"/>
        </marquee>
    </main>
  <footer style={{clear: 'both', width: "98vw"}} className={`${style.p10} ${style.b} ${style.text1} ${style.f3} ${style.m10}`}>
  <a target='_blank' href="https://github.com/OsvaldoComCH">
              <figure className={`${style.p10} ${style.b} ${style.f2}`}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
                        alt="Github"
                        className={`${style.FotoRedonda}`}
                        width="60px"
                    />
                  <figcaption className={`${style.p10} ${style.text1}`}>OsvaldoComCH</figcaption>
                </figure>
            </a>
          <figure className={`${style.p10} ${style.b} ${style.f2}`}>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/mail.png"
                    alt="Email"
                    width="60px"
                />
              <figcaption className={`${style.text1}`} style={{fontSize: 'small'}}>EduardoHenriqueRibeiroBrasil@gmail.com</figcaption>
            </figure>
    </footer>
    </>
  )
}

export default App

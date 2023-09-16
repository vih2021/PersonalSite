import { Grid, Icon } from '@mui/material'
import MenuOpcoes from '../components/MenuOpcoes';
import AboutMe from '../components/AboutMe';
import foto from "../assets/vivi.jpg";
import epic_icon from "../assets/The_Epic_Wisdom.gif"
import React, { useLayoutEffect } from 'react';
import skillImage from "../assets/logo.png"
import insta_icon from "../assets/insta.png"
import facebook_icon from "../assets/face.png"
import git_icon from "../assets/git.png"
import linked_icon from "../assets/linked.png"
import search_icon from "../assets/search.png"
import idea_icon from "../assets/idea.png"
import brain_icon from "../assets/brain.png"
import ball_icon from "../assets/ball.png"
import c_sharp_icon from "../assets/c-sharp.png"
import js_icon from "../assets/js.png"
import java_icon from "../assets/java.png"
import react_icon from "../assets/physics.png"
import python_icon from "../assets/python.png"
import compass from "../assets/compass2.png"
import mysql from "../assets/mysql.png"
import book from "../assets/book.png"
import { Link } from 'react-router-dom';


import { useRef, useEffect, useState } from "react";

export default function Home() {

    const { height, width } = useWindowDimensions();



    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Inicie a animação quando o elemento alvo estiver visível
            entry.target.classList.add('init-hidden-off')
          }
        });
      },{
        threshold: [0, 0.7, 1]
      });

      Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
        observer.observe(element);

      })
  
      // Limpe o observer quando o componente for desmontado
      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(()=>{

        function screenListener(x) {
        if (x <= 1430) { // If media query matches
            document.querySelector('.preGrid').classList.remove('AboutMeGrid')
        }
        else if (x > 1430) {
            document.querySelector('.preGrid').classList.add('AboutMeGrid');
        }
        }
        
        var x = window.matchMedia("(max-width: 1430px)")
        screenListener(width) // Call listener function at run time
        x.addEventListener("change", screenListener(width));
    
    })

      function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }

  return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid container item xs={12} md={12} justifyContent="center" className='FixedMenu'>
                <MenuOpcoes></MenuOpcoes>
            </Grid>  
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" className='first' data-anime="down" id="home">
            <Grid container item xs={12} md={12} lg={12} justifyContent="center">
                <Grid container direction="row" justifyContent="center" alignItems="center" data-anime="down" >
                    <Grid container item xs={12} md={12} lg={12} justify-content="center" alignItems="center">
                        <div className='AboutMeTitle'>
                            <h1>About Me?</h1>
                        </div>
                    </Grid>
                </Grid>
                <Grid container direction={'row'} justifyContent="center" >
                    <Grid container item xs={12} md={12} lg={12} justifyContent="center">
                        <div className='preGrid AboutMeGrid'>
                            <div className="description" data-anime="left">
                                <div className="aboutFacts">
                                    <img src={idea_icon} className='socialIcon'></img>
                                    <p>
                                        O que mais me encanta na tecnologia é a sua complexidade e como as coisas se encaixam quando bem planejadas além dos
                                        diversos benefícios que provém de sua utilização correta e que são usufruídos pela galera, trazer soluções para problemas complexos é sem dúvida a parte 
                                        mais gratificante de quem trabalha com algoritmos.
                                    </p>
                                </div>
                                

                                <div className="aboutFacts">
                                    <img src={search_icon} className='socialIcon'></img>
                                    <p>
                                        Me considero uma pessoa extremamente curiosa, isso é dos motivos que me fizeram escolher a graduação de ciência da computação, cada descoberta é um 
                                        universo vasto a ser explorado muito além do que os olhos podem ver.
                                    </p>
                                </div>

                                <div className="aboutFacts">
                                    <img src={ball_icon} className='socialIcon'></img>
                                    <p>
                                        Quanto aos meus hobbies uma das minhas maiores paixões é sem dúvida o futebol, eu também aprecio varios games, filmes, musicas, séries e lugares, sou uma pessoa 
                                        competitiva porém aprecio a companhia das pessoas e os frutos que o trabalho em equipe nos proporciona.
                                    </p>
                                </div>

                                <div className="aboutFacts">
                                    <img src={brain_icon} className='socialIcon'></img>
                                    <p>
                                        Nas horas vagas sou um pouco filósofa também hehehehe, refletir é sempre bom, não é? 
                                    </p>
                                </div>
                            </div>

                            <div className='about' data-anime="right"> 
                                <div className='imageBoxLimit'>
                                    <div className="Caixa">
                                        <img className="AboutMeImage" src={foto}/> 
                                    </div>
                                </div>

                                <div className='textBoxLimit'>
                                    <p>Meu nome é Vitória, tenho 21 anos e estou cursando o 4º/5º semestre da faculdade de ciência da computação</p>
                                </div>
                            </div>

                            <div className='considerationsBox' data-anime="up">
                                <h2>Considerations</h2>
                                <div className='considerations'>
                                    <p>Este é um site que eu criei temporariamente para mostrar meu trabalho, logo grande parte do design (eu chuto uns 50%) não é de minha autoria, minha tarefa foi apenas implementar e garatir que os elementos ficassem responsivos,
                                        em breve estarei construindo uma nova page 100% de minha autoria mas por hora estarei utilizando esta.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>                    
                </Grid>
            </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" id="skill">
            <Grid container item xs={12} md={12} justifyContent='center' className='skillTitle2' >
                <div className='skillsText init-hidden'>
                    <h3>Skills</h3>
                    <p >Aqui estão algumas tecnologias que eu utilizo</p>
                </div>
            </Grid>
            <Grid container item xs={12} md={12} justifyContent='center'>
                <div className="skillsBox">
                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={js_icon}/> 
                                <p>Trabalho com alguns frameworks que utilizam javascript como linguagem de programação um exemplo é o cypress onde eu desenvolvo testes automatizados utilizando node.js.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={java_icon}/> 
                                <p>Minha experiência com java é mais acadêmica, aprendi programação orientada a objetos porém fui um pouco mais longe e desenvolvi algumas api's e microsserviços e também um app de controles de vendas que estão no meu github.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={c_sharp_icon}/> 
                                <p>Minha experiência com C# foi com desenvolvimento de jogos na unity, desenvolvemos um jogo 2D com inimigos básicos e boss fight (sem dúvidas a lógica para o boss foi o meu maior e mais divertido desafio até hoje hahaha), O unity package está no repositório Unity no meu github se você quiser jogar :D.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={react_icon}/> 
                                <p>React é meu quebra-galho para desenvolvimento web, confesso que front não é meu ponto forte mas eu curto muito as facilidades/possibilidades que o react proporciona, e obviamente, este site foi feito em react hehehe.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={python_icon}/> 
                                <p>Minha interação com python também foi mais acadêmica, toda minha base de estrutura de dados e introdução a computação vieram do python, por isso tenho um carinho por essa linguagem e sempre que possível utilizo ela pra alguma idéia/projeto pessoal novo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box init-hidden">
                        <div className="text">
                            <div>
                                <img src={mysql}/> 
                                <p>Tenho certo conhecimento com SQL utilizando o gerenciador mySQL, um pouco do postgreSQL (leve) e estou em constante busca para aprofundar esses conhecimentos em ferramentas de armazenamento novas. </p>
                            </div>
                        </div>
                    </div>
                </div>
           </Grid>
        </Grid>

        <Grid container direction='row' justifyContent="center" className=' init-hidden' data-anime="up_exp">
            <div className="second" id="experience">
                <Grid container item xs={12} md={12} lg={12} justifyContent="center">
                    <h1>Experiencias</h1>
                </Grid>
                <Grid container item xs={12} md={12} lg={12} justifyContent="center"> 
                    <section class="articles">
                        <a href="https://compass.uol/en/home/">
                            <article className='ExperienceArticle'>
                                <div class="article-wrapper">
                                    <figure>
                                        <img src={compass} alt="" />
                                    </figure>
                                    <div class="article-body">
                                        <h2>Desenvolvedor/QA</h2>
                                        <p>
                                            Comecei meu primeiro desafio na Compass como desenvolvedora de testes automatizados/QA, estou aqui a cerca de pouco mais de um ano aprendendo sobre contexto ágil, planejamento, ferramentas de teste, fluxo de projetos e todo o contexto da fabricação de software.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </a>
                        <article className="blankArticle">
                            <div className="blankCard">
                                <img src={book} alt="" />
                                <figcaption>
                                </figcaption>
                            </div>
                        </article>

                        <article className="blankArticle">
                            <div className="blankCard">
                                <img src={book} alt="" />
                                <figcaption>
                                </figcaption>
                            </div>
                        </article>
                    </section>
                </Grid>
            </div>
        </Grid>

        <Grid container direction='row' justifyContent="center">
            <div className="social" id="socialLinks">
                <Grid container item xs={12} md={12} lg={12} justifyContent="center">
                    <div className='socialTitleBox'>
                        <h1>Social Links</h1>
                    </div>
                </Grid>

                <Grid container item xs={12} md={12} lg={12} justifyContent="center" className='socialBody'>
                    <div class="container">

                        <a href={"https://www.linkedin.com/in/vit%C3%B3ria-gon%C3%A7alves-vieira-a2a658225/"} class="card">
                            <h3 class="title">LinkedIn</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="circle">
                                <img src={linked_icon} className='socialIcon'></img>
                            </div>
                        </a>
                        <a href={"https://www.instagram.com/imvithoria/"} class="card">
                            <h3 class="title">Instagram</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="circle">
                                <img src={insta_icon} className='socialIcon'></img>
                            </div>
                        </a>
                        <a href={"https://www.facebook.com/vitoria.goncalvesvieira"} class="card">
                            <h3 class="title">Facebook</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="circle">
                                <img src={facebook_icon} className='socialIcon'></img>
                            </div>
                        </a>
                        <a href={"https://github.com/vih2021"} class="card">
                            <h3 class="title">GitHub</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="circle">
                                <img src={git_icon} className='socialIcon'></img>
                            </div>
                        </a>
                    </div>
                </Grid>
            </div>
        </Grid>
    </>
  )
}
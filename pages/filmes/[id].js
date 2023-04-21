import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button, CardImg, Col, Row } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'

const Detalhes = ({ filme, cast }) => {
  return (
    <Pagina titulo={filme.title}>

      <Row>

        <Col md={3}>
          <CardImg src={"https://image.tmdb.org/t/p/original/" + filme.poster_path} />
        </Col>

        <Col md={9}>
          <p><strong>Orçamento: </strong> {filme.budget}</p>
          <p><strong>Data de lançamento: </strong> {filme.release_date}</p>
          <p><strong>Duração: </strong> {filme.runtime} min</p>
          <p><strong>Nota: </strong> {filme.vote_average}</p>
          <p><strong>Descrição: </strong> {filme.overview}</p>
          <div>
        <ul>
            {filme.genres.map(
              item => (
                <li>{item.name}</li>
              ))}
          </ul>
          </div>
          
        </Col>

      </Row>

      <h2> Elenco</h2>         
        <Row>
           
      {cast.map( ator => (
         <Col md={2}>
          <Link href={ '/atores/' + ator.id}>
           <CardImg title={ator.name} src={"https://image.tmdb.org/t/p/original/" + ator.profile_path} 
           />
           </Link>
         </Col>
      ))}
  </Row>     
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

  const id = context.params.id
  const resultado = await apiFilmes.get("/movie/" + id)
  const filme = resultado.data

  const atores = await apiFilmes.get("/movie/" + id + "/credits")
  const cast = atores.data.cast

  return {
    props: {
      filme, 
      cast,
    }, // will be passed to the page component as props
  }
}

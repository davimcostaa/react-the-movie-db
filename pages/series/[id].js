import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button, CardImg, Col, Row } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'

const Detalhes = ({ serie, cast }) => {
  return (
    <Pagina titulo={serie.title}>
      <Row>
        <Col md={3}>
          <CardImg src={"https://image.tmdb.org/t/p/original/" + serie.poster_path} />
        </Col>

        <Col md={9}>
          <p><strong>Data da exibição do primeiro episódio: </strong> {serie.first_air_date}</p>
          <p><strong>Data da exibição do último episódio: </strong> {serie.last_air_date}</p>
          <p><strong>Duração: </strong> {serie.episode_run_time} min</p>
          <p><strong>Nota: </strong> {serie.vote_average}</p>
          <p><strong>Número de episódios: </strong> {serie.number_of_episodes}</p>
          <p><strong>Número de temporadas: </strong> {serie.number_of_seasons}</p>
          <p><strong>Descrição: </strong> {serie.overview}</p>
          <div>
        <ul>
            {serie.genres.map(
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
           <CardImg title={ator.name} style={{ marginBottom: '20px' }} src={"https://image.tmdb.org/t/p/original/" + ator.profile_path} 
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
  const resultado = await apiFilmes.get("/tv/" + id + "?language=pt-br")
  const serie = resultado.data

  const atores = await apiFilmes.get("/tv/" + id + "/credits?language=pt-br")
  const cast = atores.data.cast

  return {
    props: {
      serie, 
      cast,
    }, // will be passed to the page component as props
  }
}

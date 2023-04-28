import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button, CardImg, Col, Row } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'
import Galeria from '@/components/Galeria'

const Detalhes = ({ ator, fotosAtor, filmesAtor, seriesAtor }) => {
  return (
    <Pagina titulo={ator.name}>

      <Row>

        <Col md={3}>
          <CardImg src={"https://image.tmdb.org/t/p/original/" + ator.profile_path} />
        </Col>

        <Col md={9}>
        <p><strong>Data de nascimento: </strong> {ator.birthday}</p>
        <p><strong>Local de nascimento: </strong> {ator.place_of_birth}</p>

        <p>
        {ator.biography}
      </p>
        </Col>
        </Row>

      <Galeria titulo="Imagens" lista={fotosAtor} caminhoFoto='file_path' size={1}  /> 
      <Galeria titulo="Filmes em que atuou" lista={filmesAtor} caminhoFoto='poster_path' link='/filmes/' /> 
      

      <h1> Séries em que atuou</h1>

      <Row>

      {seriesAtor.map( serie => (
      
      <Col md={2} >
          <Link href={'/series/' + serie.id}>
            <CardImg style={{ marginBottom: '20px' }} src={"https://image.tmdb.org/t/p/original/" + serie.poster_path} />
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
  const resultado = await apiFilmes.get("/person/" + id + "?language=pt-br")
  const ator = resultado.data

  const fotos = await apiFilmes.get("/person/" + id + "/images")
  const fotosAtor = fotos.data.profiles

  const filmes = await apiFilmes.get("/person/" + id + "/movie_credits?language=pt-br")
  const filmesAtor = filmes.data.cast

  const series = await apiFilmes.get("/person/" + id + "/tv_credits?language=pt-br")
  const seriesAtor = series.data.cast


  return {
    props: {
      ator,
      fotosAtor,
      filmesAtor,
      seriesAtor
    }, // will be passed to the page component as props
  }
}

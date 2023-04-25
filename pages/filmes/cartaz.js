import { Card, Button, Row, Col } from 'react-bootstrap'
import React from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import Link from 'next/link'

const filmes = ({ filmes }) => {
  return (
    <Pagina titulo={'Filmes Em Cartaz'}>
      <Row md={4}>
        {filmes.map(item => (
          <Col>
            <Card>
              <Card.Img src={"https://image.tmdb.org/t/p/original/" + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <p>Nota: {item.vote_average}</p>
                <p>Data de lançamento: {item.release_date}</p>
                <Link className='btn btn-danger' href={'/filmes/' + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Pagina>
  )
}

export default filmes

export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get("/movie/now_playing?language=pt-br")
  const filmes = resultado.data.results
  

  return {
    props: {
      filmes
    }, // will be passed to the page component as props
  }
}


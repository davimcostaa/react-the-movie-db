import { Card, Button, Row, Col } from 'react-bootstrap'
import React from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import Link from 'next/link'

const series = ({ series }) => {
  return (
    <Pagina titulo={'No Ar Hoje'} >
      <Row md={4}>
        {series.map(item => (
          <Col>
            <Card>
              <Card.Img src={"https://image.tmdb.org/t/p/original/" + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <p>Nota: {item.vote_average}</p>
                <Link className='btn btn-danger' href={'/series/' + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Pagina>
  )
}

export default series

export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get("/tv/airing_today?language=pt-br")
  const series = resultado.data.results
    

  return {
    props: {
      series
    }, // will be passed to the page component as props
  }
}


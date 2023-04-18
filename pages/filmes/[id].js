import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const Detalhes = ({filme}) => {
  return (
    <Pagina titulo={filme.title}>
       <Card style={{width: '50%', textAlign: 'center'}}>
              <Card.Img src={"https://image.tmdb.org/t/p/original/" + filme.backdrop_path} />
              <Card.Body>
                <Card.Title>{filme.title}</Card.Title>
                <p>Nota: {filme.vote_average}</p>
                <p>Data de lançamento: {filme.release_date}</p>
                <Button variant="primary">Nota: {filme.vote_average}</Button>
              </Card.Body>
            </Card>
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

    const id = context.params.id
    const resultado = await apiFilmes.get("/movie/" + id)
    const filme = resultado.data
    return {
      props: {
        filme
      }, // will be passed to the page component as props
    }
  }
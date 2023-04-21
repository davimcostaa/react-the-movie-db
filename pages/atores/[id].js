import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button, CardImg, Col, Row } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'

const Detalhes = ({ ator }) => {
  return (
    <Pagina titulo={ator.name}>

      <img src={"https://image.tmdb.org/t/p/original/" + ator.profile_path}>
      </img>
      <p>
        {ator.biography}
      </p>

    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

  const id = context.params.id
  const resultado = await apiFilmes.get("/person/" + id)
  const ator = resultado.data

  return {
    props: {
      ator,
    }, // will be passed to the page component as props
  }
}

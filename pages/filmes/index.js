import React from 'react'
import Pagina from '../../components/Pagina'
import { useState } from 'react'
import { useEffect } from 'react'
import apiFilmes from '../../services/apiFilmes'

const filmes = ({filmes}) => {
 
  return (
   <Pagina titulo='Filmes'>

    {filmes.map(item => (
            <div>
            <p>{item.title}</p>
            <img src='https://image.tmdb.org/t/p/original/${item.backdrop_path}'/>

            </div>  
))} 

   </Pagina>
  )
}

export default filmes

export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get("/movie/popular")
    const filmes = resultado.data.results
    
    return {
      props: {
        filmes
      }, // will be passed to the page component as props
    }
  }


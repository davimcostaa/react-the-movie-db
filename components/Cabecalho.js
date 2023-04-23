import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/atores">Atores</Nav.Link>
            <Nav.Link href="/series">Séries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho
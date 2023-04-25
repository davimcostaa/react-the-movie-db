import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/atores">Atores</Nav.Link>
            <Nav.Link href="/series">Séries</Nav.Link>
            <NavDropdown title="Filmes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/filmes">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamentos">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/top_rated">Top Rated</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Séries" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/series">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamentos">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/top_rated">Top Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho
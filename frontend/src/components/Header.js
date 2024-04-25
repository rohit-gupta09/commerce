import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const LogoutHandler = () => {
        dispatch(logout())
    }

    
    return (
        <>
        <header style={{backgroundColor:"#3A5A40"}}>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#3A5A40"}}>
                <Container >
                    <LinkContainer to="/">
                        <Navbar.Brand><i style={{color:"white"}}>SAANEKI</i></Navbar.Brand>
                    </LinkContainer>
                    <Navbar className='ms-auto'>
                        <Nav className="ms-auto">
                            <LinkContainer id="car" to="/cart">
                                <Nav.Link ><i style={{ fontSize: "20px" , color:"white"}} className='fas fa-shopping-cart'></i></Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/">
                                <Nav.Link ><i className='fas fa-search'></i></Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer id="favo" to="/favourite">
                                <Nav.Link ><i style={{ fontSize: "20px" , color:"white"}} className='fas fa-heart '></i></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={LogoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer id="log" to="/login">
                                <Nav.Link ><i style={{ fontSize: "20px"  , color:"white" }} className='fas fa-user fa-outline'></i></Nav.Link>
                            </LinkContainer>}

                        </Nav>

                    </Navbar>
                </Container>
            </Navbar>
            </header>
            
            
        </>
    )
}

export default Header

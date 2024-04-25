import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import {toast} from 'react/toastify'

function LoginScreen() {


    const location = useLocation()
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    return (
        <Container style={{ paddingTop: "50px" }} >
            <div className='row justify-content-center'>
                <div style={{marginTop:"20px", backgroundColor: "white" }} className='col-sm-10'>
                    <FormContainer className="justify-content-center">
                        <h2 style={{textAlign:"center",paddingTop:"25px"}}>Registered User</h2>
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader></Loader>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='email' className='py-3'>
                                <Form.Label style={{marginTop:"10px"}}>Email<span  style={{color:"red"}}>*</span></Form.Label>
                                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password' className='py-3'>
                                <Form.Label>Password<span  style={{color:"red"}}>*</span></Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Button type='submit' style={{backgroundColor:"black",marginTop:"10px",marginBottom:"10px"}}>SIGN IN</Button>
                        </Form>
                        <hr></hr>

                        <Row style={{marginBottom:"10px"}} className='py-3 text-center'>
                            <Col><h5>NEW USER </h5><br /><button style={{backgroundColor:"white"}} type='submit' className='btn btn-outline-secondary'><Link style={{color:"black"}} to={'/register'}>Register</Link> </button></Col>
                        </Row>
                    </FormContainer>
                    {/* <h1 className='text-center' >Hello world</h1> */}
                </div>
            </div>

        </Container>

    )
}

export default LoginScreen

import React ,{useState,useEffect} from 'react'
import {useNavigate,useLocation,Link} from 'react-router-dom'
import {Form , Button,Container, Row , Col} from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {register} from '../actions/userActions'
import FormContainer from '../components/FormContainer'


function RegisterScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const [message,setMessage] = useState(null)


    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    
    const {loading,error,userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'
    
    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name,email,password))
        }
    }
        
  return (
    <Container style={{ paddingTop: "30px" }} >
            <div className='row justify-content-center'>
                <div style={{marginTop:"20px", backgroundColor: "white" }} className='col-sm-10'>
                <FormContainer>
    <h1 style={{marginTop:"15px"}}>My Account</h1>
    <hr></hr>
    {message && <Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader></Loader>}
    <Form onSubmit={submitHandler}>
        
        <Form.Group controlId='name' className='py-3'>
            <Form.Label>Name<span  style={{color:"red"}}>*</span></Form.Label>
            <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setname (e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='email' className='py-3'>
            <Form.Label>Email<span  style={{color:"red"}}>*</span></Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='py-3'>
            <Form.Label>Password<span  style={{color:"red"}}>*</span></Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword' className='py-3'>
            <Form.Label>Confirm Password<span  style={{color:"red"}}>*</span></Form.Label>
            <Form.Control type='password' placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button style={{marginTop:"10px",marginBottom:"20px",backgroundColor:"white",color:"black"}} type='submit' className='btn btn-outline-secondary'>Register</Button>
    </Form>

    {/* <Row className='py-3'>
        <Col>
        Have an Account?{' '} 
        <Link to='/login'>
        Login</Link> </Col>
    </Row> */}
    </FormContainer>
                </div>
            </div>

        </Container>
    
    
  )
}

export default RegisterScreen

import React from 'react'
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import a22c3d37ce5bfe7fd9559b532a718995 from '../imageshome/a22c3d37ce5bfe7fd9559b532a718995.jpg'
import d8749789245e6385b0167482cc550553 from '../imageshome/d8749789245e6385b0167482cc550553.jpg'
import c3b3ffefc7ee74d932b2a0bc1b832ae7 from '../imageshome/c3b3ffefc7ee74d932b2a0bc1b832ae7.jpg';
import cefe9c4b853a41710a1e459b23fc35d from '../imageshome/cefe9c4b853a41710a1e459b23fc35d.jpg'
import d43858931bf935c61ab2e369e51ad8 from '../imageshome/d43858931bf935c61ab2e369e51ad8.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div>
    <Header></Header>
        <SubHeader></SubHeader>
    </div>
    <div style={{marginTop:"15px"}} className='container-fluid'>
    <div className='row justify-content-center'>
            <div style={{paddingRight:"0px",paddingLeft:"0px"}} className='col-sm-6' >
                <img  style={{width: "100%", height: "100%" }} src={a22c3d37ce5bfe7fd9559b532a718995}></img>
            </div>
            <div style={{paddingRight:"0px",paddingLeft:"0px"}} className='col-sm-6' >
                <img  style={{width: "100%", height: "100%" }} src={d8749789245e6385b0167482cc550553}></img>
            </div>
        </div>
    </div>

    <br></br>
    <div style={{marginTop:"5%",marginBottom:"5%"}}>
    <row className="justify-content-center">
      <h1 style={{color:"white",fontFamily:"Lato",fontSize:"60px"}} className='text-center'>Shop for Her</h1>
    </row>
    </div>
    
    <Container>
      <div className='row justify-content-center'>
        
        <div style={{objectFit:"cover"}} className='col-sm-4'>
        
        <img style={{width: "100%", height: "100%" }} src={c3b3ffefc7ee74d932b2a0bc1b832ae7}></img>
        <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Bags</h4>
        </div>

        <div className='col-sm-4'>
        <Link to='saree'>
        <img style={{width: "100%", height: "100%" }} src={cefe9c4b853a41710a1e459b23fc35d} ></img>
        </Link>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Sarees</h4>
        </div>

        <div className='col-sm-4'>
          <img style={{width: "100%", height: "100%" }} src={d43858931bf935c61ab2e369e51ad8}></img>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Skirts</h4>
        </div>
      </div>
    </Container>

    <br></br>
    <div style={{marginTop:"5%",marginBottom:"5%"}}>
    <row className="justify-content-center">
      <h1 style={{color:"white",fontFamily:"Lato",fontSize:"60px"}} className='text-center'>Shop for Him</h1>
    </row>
    </div>
    
    <Container>
      <div className='row justify-content-center'>
        
        <div style={{objectFit:"cover"}} className='col-sm-4'>
        <img style={{width: "100%", height: "100%" }} src={c3b3ffefc7ee74d932b2a0bc1b832ae7}></img>
        <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Bags</h4>
        </div>

        <div className='col-sm-4'>
          <img style={{width: "100%", height: "100%" }} src={cefe9c4b853a41710a1e459b23fc35d}></img>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Sarees</h4>
        </div>

        <div className='col-sm-4'>
          <img style={{width: "100%", height: "100%" }} src={d43858931bf935c61ab2e369e51ad8}></img>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Skirts</h4>
        </div>
      </div>
    </Container>

    <br></br>
    <div style={{marginTop:"5%",marginBottom:"5%"}}>
    <row className="justify-content-center">
      <h1 style={{color:"white",fontFamily:"Lato",fontSize:"60px"}} className='text-center'>Others</h1>
    </row>
    </div>
    
    <Container>
      <div className='row justify-content-center'>
        
        <div style={{objectFit:"cover"}} className='col-sm-4'>
        <img style={{width: "100%", height: "100%" }} src={c3b3ffefc7ee74d932b2a0bc1b832ae7}></img>
        <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Bags</h4>
        </div>

        <div className='col-sm-4'>
          <img style={{width: "100%", height: "100%" }} src={cefe9c4b853a41710a1e459b23fc35d}></img>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Sarees</h4>
        </div>

        <div className='col-sm-4'>
          <img style={{width: "100%", height: "100%" }} src={d43858931bf935c61ab2e369e51ad8}></img>
          <br></br>
        <h4 className='text-center' style={{fontStyle:"bold",fontFamily:"Playfair Display",color:"white",marginTop:"10px"}}>Skirts</h4>
        </div>
      </div>
    </Container>

    
    

        
    </>
  )
}

export default HomePage

import React from 'react'
import { Container } from 'react-bootstrap';

function SubHeader() {
    const showStore = () =>{
        if(document.getElementById("storeshow").style.display === "block"){
            document.getElementById("storeshow").style.display="none"
        }
        else{
            document.getElementById("storeshow").style.display="block"
        }
        
    }
  return (
    <>
    <ul style={{marginTop:"10px"}} class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white"}} aria-current="page" href="/">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white",cursor:"pointer"}} onClick={showStore}>STORE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white"}} href="#">ON SALE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white"}}>ABOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white"}}>ACCOUNT</a>
                </li>
            </ul>
        
        <Container>
            <div style={{display:"none",marginTop:"10px"}} id="storeshow" className='container text-center'>
                <div className='row'>
                <div className='col-1'></div>
                    <div className='col-sm-10'  style={{backgroundColor:"white"}}>
                        <div style={{margin:"10px",marginTop:"10px"}} className='row justify-content-center'>
                        
                        <div className='col-sm-3'>
                        <h5 className='text-start'>Fashion Wear</h5>
                        <ul className='text-start' style={{listStyleType:"none"}}>
                            <h6 style={{marginTop:"10px"}}>MEN</h6>
                            <li style={{marginTop:"10px"}}>Jackets & Coats</li>
                            <li style={{marginTop:"10px"}}>Kurtas</li>
                            <h6 style={{marginTop:"10px"}}>WOMEN</h6>
                            <li style={{marginTop:"10px"}}>Kurtis</li>
                            <li style={{marginTop:"10px"}}>Sarees</li>
                            <li style={{marginTop:"10px"}}>Skirts</li>
                            <li style={{marginTop:"10px"}}>Dresses</li>
                            <li style={{marginTop:"10px"}}>Shawls</li>
                            <li style={{marginTop:"10px"}}>Lehenga</li>
                        </ul>

                            {/* <ul className='text-start' style={{marginTop:"10px", listStyleType:"none"}}>WOMEN
                            <li style={{marginTop:"10px"}}>Kurtis</li>
                            <li style={{marginTop:"10px"}}>Sarees</li>
                            <li style={{marginTop:"10px"}}>Skirts</li>
                            <li style={{marginTop:"10px"}}>Dresses</li>
                            <li style={{marginTop:"10px"}}>Shawls</li>
                            <li style={{marginTop:"10px"}}>Lehenga</li>
                            </ul> */}
                            
                        
                        </div>
                        
                        <div className='col-sm-3'>
                        <h5 className='text-start'>Gift Decor</h5>
                        <ul className='text-start' style={{listStyleType:"none"}}>
                            <li style={{marginTop:"10px"}}>Bespoke Toys</li>
                            <li style={{marginTop:"10px"}}>Bamboo, Cane</li>
                            <li style={{marginTop:"10px"}}>Event Welcome Kit</li>
                            <li style={{marginTop:"10px"}}>Wall Decor</li>
                        </ul>
                        </div>
                        
                        <div className='col-sm-3'>
                        <h5 className='text-start'>Natural Products</h5>
                        <ul className='text-start' style={{listStyleType:"none"}}>
                            <li style={{marginTop:"10px"}}>Tea</li>
                            <li style={{marginTop:"10px"}}>Rice</li>
                            <li style={{marginTop:"10px"}}>Organic Food</li>
                        </ul>
                        </div>
                        </div>
                        
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </Container>
        </>
  )
}

export default SubHeader

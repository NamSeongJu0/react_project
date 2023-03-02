
import './App.css';
import data from './data.js';

import {useState} from 'react';

import {Routes, Route, useNavigate} from 'react-router-dom';


import { Container, Nav, Navbar} from 'react-bootstrap';

import Home from './Routes/Home.js';
import About from './Routes/About.js';
import Detail from './Routes/Detail.js';
import Footer from './component/Footer';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick = {() => {
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick = {() => {
              navigate('/detail/0')
            }}>Detail</Nav.Link>
            <Nav.Link onClick = {() => {
              navigate('/Cart')
            }}>Cart</Nav.Link>
            <Nav.Link onClick = {() => {
              navigate('/About')
            }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path='/' element = {<Home shoes = {shoes} setShoes = {setShoes}/>}></Route>
        <Route path='/detail/:id' element = {<Detail shoes = {shoes}/>}></Route>
        <Route path='/about' element = {<About/>}>
            <Route path='/about/member' element = {<div className='member'>member 페이지 입니다.</div>}></Route>

            <Route path='/about/location' element = {<div>location 페이지 입니다.</div>}></Route>
        </Route>
        
        
        <Route path='*' element = {<div className='none'>404 error</div>}></Route>
      </Routes>

      <Footer/>


    </div>
  );
}









export default App;

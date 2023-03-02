import axios from 'axios';

import { Container, Row, Button, Col} from 'react-bootstrap';

import Product from '../component/Product';

import { useState } from 'react';

import Title from '../component/Title';

import Title2 from '../component/Title2';

import nike from '../nike.js';

function Home(props) {
    let [res, setRes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    let [nike1, setNike1] = useState(nike);
    let [count, setCount] = useState(1);

    return (
        <div>

            <div className="slider"></div>

            <Title />

            <Button variant="outline-primary" onClick={() => {
                let copy = [...props.shoes].sort((a, b) => a.title > b.title ? 1 : -1);

                props.setShoes(copy);

                let res1 = [];
                for (let i in props.shoes) {
                    res1.push(props.shoes[i].id)
                }

                setRes(res = res1);

            }}>이름순</Button>{' '}

            <Button variant="outline-secondary" onClick={() => {
                let copy = [...props.shoes].sort((a, b) => a.price > b.price ? 1 : -1);

                props.setShoes(copy);

                let res1 = [];
                for (let i in props.shoes) {
                    res1.push(props.shoes[i].id)
                }

                setRes(res = res1);


            }}>낮은 가격순</Button>{' '}

            <Button variant="outline-secondary" onClick={() => {
                let copy = [...props.shoes].sort((a, b) => a.price < b.price ? 1 : -1);

                props.setShoes(copy);

                let res1 = [];
                for (let i in props.shoes) {
                    res1.push(props.shoes[i].id)
                }

                setRes(res = res1);


            }}>높은 가격순</Button>{' '}

            <Container>
                <Row>

                    {
                        props.shoes.map((v, i) => {
                            return (
                                <Product shoes={props.shoes[i]} i={i} res={res} setRes={setRes} />
                            )
                        })
                    }

                </Row>
            </Container>

            <Title2 />

            <Button variant="info" onClick = {() => {
                if(count === 1) {
                    axios.get('https://namseongju0.github.io/react_blog/nike2.json').then((result) => {
                        
                        let copy = [...nike1, ...result.data];
                        setNike1(copy);console.log(copy)
                        setCount(2);
                    })
                }

                else if(count === 2) {
                    axios.get('https://namseongju0.github.io/react_blog/nike3.json').then((result) => {
                        let copy = [...nike1, ...result.data];
                        setNike1(copy);
                        setCount(3);
                    })
                }
                
                else {
                    alert('더이상 상품이 없습니다.');
                }
            }}>+ 3개 상품 더보기</Button>{' '}

            <Container style={{ marginTop: '30px' }}>
                <Row>
                    {
                        nike1.map((ele, i) => {
                            return (
                                <Nike nike1={nike1[i]}/>
                            )
                        })
                    }
                </Row>
            </Container>


        </div>
    )
}


function Nike(props) {
    

    return(
        <Col md = {4}>
            <img src={props.nike1.imgUrl} width = "80%" alt="item2" />
            <h5>{props.nike1.title}</h5>
            <p>{props.nike1.content}</p>
            <p>{props.nike1.price}</p>
        </Col>
    )
}

export default Home;
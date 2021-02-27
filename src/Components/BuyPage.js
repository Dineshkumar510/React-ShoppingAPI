import React, {useState, useEffect} from "react";
import  Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "5ROhGYwUt8yWEwq9T3-ZRILb8n1OTtVu0KveRiJufEg"

const url = "https://api.unsplash.com/search/photos/?client_id=5ROhGYwUt8yWEwq9T3-ZRILb8n1OTtVu0KveRiJufEg&query=laptop&per_page=6&page=1"


const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

    const fetchPhotos = async() => {
        const {data} = await Axios.get(url, {
            header:{
                Authorization: apiKey 
            }
        });

    const { results } = data;

    const allProduct = results.map(result => ({
        smallImage: result.urls?.regular,
        tinyImage: result.urls?.thumb,
        productName: random.word(),
        productPrice: commerce.price(),
        id: random.uuid()
       }));

       setProduct(allProduct);
    
    };

        useEffect(() => {
            fetchPhotos();
        }, []);

    return(
        <Container fluid>
            <h1 className = "text-success text-center"> 
                Buy page
            </h1>
            <Row>
                {product.map(product => (
                   <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart}/>
                   </Col>
                ))};
            </Row>
        </Container>
    );

};

export default BuyPage;
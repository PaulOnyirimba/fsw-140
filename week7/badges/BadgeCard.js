import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

const BadgeCard = ( {firstName, lastName, email, birthPlace, phoneNbr, favefood, about, bgcolor} ) => {
    return (
        <div>
            <Container style={{borderStyle:"solid", borderColor:"black", borderWidth:"1px", borderRadius:"5px"}}>
                <Row style={{padding:"10px", backgroundColor:bgcolor, fontWeight:"900"}}>
                <Col sm={12}>Badge:</Col>
                </Row>
                <Row style={{padding:"10px"}}>
                    <Col sm={1}></Col>
                    <Col sm={5}>Name: {firstName} {lastName}</Col>
                    <Col sm={5}>Phone Number: {phoneNbr}</Col>
                    <Col sm={1}></Col>
                </Row>
                <Row style={{padding:"10px"}}>
                    <Col sm={1}></Col>
                    <Col sm={5}>Birth Place: {birthPlace}</Col>
                    <Col sm={5}>Favorite Food: {favefood}</Col>
                    <Col sm={1}></Col>
                </Row>
                <Row style={{padding:"10px"}}>
                <Col sm={1}></Col>
                <Col sm={10} style={{borderStyle:"solid", borderColor:"black", borderWidth:"1px", height:"100px"}}>About me: {about}</Col>
                <Col sm={1}></Col>
                </Row>
            </Container>
            <br />
        </div>
    )
}
export default BadgeCard
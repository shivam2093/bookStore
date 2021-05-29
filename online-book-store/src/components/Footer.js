import React, { Component } from 'react'


import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Container,
    InputGroup,
    FormControl,
    Button, Form,
    Image
} from "react-bootstrap";

export class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {

            subscribe: ''
        }
    }


    subscribe = (event) => {


        this.setState({

            subscribe: "Thank you for subscribe"
        })

    }



    render() {
        return (
            <>
                <section className="imgwithwrite" style={{ backgroundColor: "beige", width: "100%" }}>
                    <div >
                        <div className="header">
                            <h3 style={{ marginLeft: 80, marginTop: 20, padding: 20 }}> </h3>
                            <p style={{ marginLeft: 80, marginTop: 30, padding: 20 }} > </p>
                        </div>
                        <div className="image">
                            <img alt="" src="img/8.jpg" style={{ width: 950, height:500 ,padding: 10, marginLeft: 570 }}></img>

                        </div>
                    </div>
                </section>


                <section className="login_work" style={{ backgroundColor: "lightgreen", height: 200, width: "100%" }}>
                    <Container>
                        <Row>
                            <Col>
                                <h5 style={{ textAlign: "center", margin: 100 }}>
                                    For Buisness Inquiry? {" "}
                                    <Link to="/Login">
                                        Work with Us
                                    </Link>
                                </h5>

                            </Col>
                        </Row>
                    </Container>
                </section>

                <div >
                    <Container>
                        <Col>
                            <Row md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                                <Col md={6} style={{ textAlign: "center" }}>
                                    <h3> Subscribe to our Newsletter </h3>
                                    <Form style={{ marginBottom: 1 }}>
                                        <InputGroup style={{ marginBottom: 3 }}>
                                            <FormControl type="text" placeholder="please enter your email" />
                                            <InputGroup.Append>
                                                <Button type="button" variant="primary" style={{ width: 130 }} onClick={this.subscribe}>Subscribe</Button>
                                            </InputGroup.Append>
                                        </InputGroup>

                                    </Form>
                                </Col>
                                <Col md={6} style={{ textAlign: "center" }}>
                                    <div className="app">
                                        <p>Download App</p>
                                        <Link to="#"><Image src="img/downloadapp.png" alt="" fluid /></Link>
                                        <Link to="#">
                                            <Image src="img/apple.png" alt="" fluid />
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Col >
                                    <h5 style={{ marginBottom: 20 }} className="mb-3">
                                        About Us
                                </h5>
                                    <ul style={{ listStyle: "none" }}>


                                        <li> <Link to="#"> Culture </Link> </li>
                                        <li> <Link to="#"> Blog </Link> </li>
                                        <li> <Link to="#"> Careers </Link> </li>
                                        <li> <Link to="#"> Contact </Link> </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5 className="mb-3"> Foodies</h5>
                                    <ul style={{ listStyle: "none" }}>

                                        <li> <Link to="#"> Community </Link> </li>
                                        <li> <Link to="#"> Developers </Link> </li>
                                        <li> <Link to="#"> Blogger </Link> </li>
                                        <li> <Link to="#"> Verified Users </Link> </li>
                                    </ul>
                                </Col>

                                <Col>
                                    <h5 className="mb-3"> For restaurants</h5>
                                    <ul style={{ listStyle: "none" }}>

                                        <li> <Link to="#"> Advertise </Link> </li>
                                        <li> <Link to="#"> Add a restaurant </Link> </li>
                                        <li> <Link to="#"> For business </Link> </li>
                                        <li> <Link to="#"> Guidlines </Link> </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </div>
                <footer>
                    <Container style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <p> &copy; 2021 The University of Southern Mississippi. All rights reserved
                            <Link to="usm.edu">
                                <img style={{ height: 50 }} src="https://www.usm.edu/university-communications/files/univ_c_123pc.png" alt="" />
                            </Link>
                        </p>


                    </Container>


                </footer>

            </>
        )
    }
}

export default Footer

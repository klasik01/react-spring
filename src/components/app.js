import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Header from './Header';
import Footer from './Footer';
import PostsList from './Blog/PostsList';
import NavBar from "./Navbar";
import AlertBox from "./Alert/Alert";
import PostShow from './Blog/PostShow';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size: 12}}>
                        <NavBar/>
                        <Header/>
                        <AlertBox/>
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route exact={true} path="/" component={Home}/>
                                    <Route path="/blog" component={PostsList}/>
                                    <Route path="/post/:id" component={PostShow}/>
                                </Switch>
                            </div>
                        </BrowserRouter>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

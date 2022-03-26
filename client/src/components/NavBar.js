import React, {useContext} from 'react';
import {Context} from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {NavLink} from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts';
import {Button} from "react-bootstrap";

const NavBar = () => {
    const {user} = useContext (Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}> КупиДевайс</NavLink>
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant='outline-light'>Авторизация</Button>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
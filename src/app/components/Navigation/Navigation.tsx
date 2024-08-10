"use client"
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => (
        <Navbar variant="light" bg="light">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href={"/"}>
                            Karte
                        </Nav.Link>
                        <Nav.Link href={"/regions"}>
                            Nach Region
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
)

export default Navigation;
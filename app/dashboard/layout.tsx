'use client';
import { Container, Navbar } from "@nextui-org/react";
import { ReactNode } from "react";
import React from "react";
import { AppLogo } from "./AppLogo";


export default function DashboardLayout({ children }: {
    children: ReactNode;
}) {
    return (
        <Container>
            <Navbar variant="floating">
                <Navbar.Brand>
                    <AppLogo scale={0.4} />
                    <h1 style={{ paddingLeft: "10px" }}> 6ix</h1>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link isActive href="#">Profile</Navbar.Link>
                    <Navbar.Link href="#">Search</Navbar.Link>
                    <Navbar.Link href="#">Settings</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </Container>
    )

}
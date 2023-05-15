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
                    <AppLogo scale={0.4}/>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </Container>
    )

}
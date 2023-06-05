'use client';
import { Navbar } from "@nextui-org/react"
import React from "react"
import { AppLogo } from "./AppLogo";

export default function SixNavigationBar() {
    return (
        <Navbar variant="floating" style={{ position: "fixed" }}>
            <Navbar.Brand>
                <AppLogo scale={0.5} />
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href="#Home">Home</Navbar.Link>
                <Navbar.Link isActive href="#">Profile</Navbar.Link>
                <Navbar.Link href="#">Search</Navbar.Link>
                <Navbar.Link href="#">Settings</Navbar.Link>
            </Navbar.Content>
        </Navbar>
        )
}
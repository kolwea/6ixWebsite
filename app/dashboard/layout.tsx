'use client';
import { Container, Navbar } from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { AppLogo } from "./AppLogo";
import { GoogleMapsProvider } from "./GoogleMaps/GoogleMapsProvider";
import { GoogleMapsContext } from "./GoogleMaps/GoogleMapsContext";
import styles from "./styles.module.scss"


export default function DashboardLayout({ children }: {
    children: ReactNode;
}) {
    return (
        <GoogleMapsProvider context={GoogleMapsContext}>
            <Navbar variant="floating" style={{position:"fixed"}}>
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
            {children}
        </GoogleMapsProvider>
    )

}
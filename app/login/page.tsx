'use client';
import { Container, Card, Row, Input, Spacer, Button, Grid } from "@nextui-org/react";
import React from "react";
// NextUI only works in client-side components!!!

const LoginCard = () => {
    return (
        <Container justify="center">
            <Card css={{ height: "300px", }}>
                <Card.Header css={{ pd: 'none' }}>
                    <img
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="34px"
                        height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            6ixDegrees
                        </Grid>
                        <Grid xs={12}>
                            itsuptwo.us
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ pd: 'none' }}>
                    <Spacer y={1} />
                    <Row justify="center" align="center">
                        <Input width="300px" size="lg" color="secondary" clearable bordered labelPlaceholder="Username" placeholder="Username" />
                    </Row>
                    <Spacer y={2} />
                    <Row justify="center" align="center">
                        <Input.Password width="300px" size="lg" color="secondary" clearable bordered labelPlaceholder="Password" placeholder="Password" />
                    </Row>
                </Card.Body>
                <Card.Footer css={{ pd: 'none' }} >
                    <Container display="flex" justify="center" css={{ margin: 'auto' }}>
                        <Button>Login</Button>
                    </Container>
                </Card.Footer>
            </Card>
        </Container >)
}

export default function LoginPage() {
    return (
        <Container display="flex" alignContent="center" justify="center" css={{ height: '100vh', mw: '500px' }}>
            <LoginCard />
        </Container>);
}


import { Container, Nav, Navbar, NavbarToggle } from "react-bootstrap"

export function Header( props ) {
    return (
        <><h1>{props.text}</h1><NavbarToggle aria-controls='main-nav' />
        <Navbar.Collapse id="main-nav"/>
    
}

<Container></Container>
<Navbar.Collapse id="main-nav">
    <Nav>
        <Nav.Link href="/">/Home</Nav.Link>
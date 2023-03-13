import React, { useState, useEffect } from "react"
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem, NavItemBtn, NavBtnLink } from "./Navbar.elements"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Button, Button2, NavButton } from "../../globalStyles";
import { GrSteps } from "react-icons/gr"


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }
    
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener("resize", showButton)

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                        STEP-1
                        </NavLogo>
                        <MobileIcon onClick={handleClick} >
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/Services">Blog</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <a href=' https://calendly.com/step1strategy/30min?month=2023-02
                                    '>
                                        <NavButton>Schedule a meeting</NavButton>
                                    </a>
                                ) : (
                                    <a href='https://ntqfgiovpio.typeform.com/to/vLwRk52x'>
                                            <Button>
                                                Start Now
                                        </Button>
                                        </a>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider >
        </>
    )
}

export default Navbar


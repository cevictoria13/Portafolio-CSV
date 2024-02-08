import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
 
} from "@nextui-org/react";
//import {AcmeLogo} from "./AcmeLogo.jsx";


const Appbar = () => {

  const links = [
    {
      nombre: "Acerca de mí",
      href: "/about"
    },
    {
      nombre: "Proyectos",
      href: "/projects"
    },
    {
      nombre: "Contacto",
      href: "/contact"
    },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        {/*<AcmeLogo />*/}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link) => (
          <NavbarItem >
            <Link color="foreground" href="{link.href}">
            {link.nombre}
            </Link>
          </NavbarItem>
        ))}

        </NavbarContent>

        
    </Navbar>
  );
}

export default Appbar;
import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container maxW="1200px">
      <header>
        <Navbar />
      </header>
      <main className="container">{children}</main>
    </Container>
  );
};

export default Layout;

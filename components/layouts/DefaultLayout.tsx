import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";

interface DefaultLayoutProps {}

export const DefaultLayout = ({
  children,
}: PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          padding: "2rem",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { Movie } from "@mui/icons-material";
import React from "react";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Movie sx={{ mr: 2 }} />
        <NextLink href="/">
          <Link
            sx={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <Typography variant="h6" color="inherit" noWrap>
              Movies 🍿
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

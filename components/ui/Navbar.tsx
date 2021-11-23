import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { Movie } from "@mui/icons-material";
import React from "react";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Movie sx={{ mr: 1 }} color="primary" />
        <NextLink href="/">
          <Link
            sx={{
              color: "primary",
              textDecoration: "none",
              fontWeight: 700,
              cursor: "pointer",
              marginRight: "2rem",
            }}
          >
            <Typography variant="h6" color="inherit" noWrap>
              JZM
            </Typography>
          </Link>
        </NextLink>
        <NextLink href="/movies">
          <Link
            sx={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <Typography variant="body1" color="inherit" noWrap>
              Movies List
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

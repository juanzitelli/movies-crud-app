import { Alert, Link, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Stack
        direction="column"
        gap={2}
        sx={{ height: "100vh", maxWidth: "50vw", margin: "0 auto" }}
      >
        <Typography variant="h2">Welcome to Movies CRUD App! 🍿</Typography>
        <Typography variant="subtitle1">
          {`Next.js + TypeScript client application for the MCGA subject's second
          mid-term exam. Built by @juanzitelli`}
        </Typography>
        <Alert variant="outlined" color="info">
          <Typography variant="body1" color="inherit">
            Get started by going to{" "}
            <NextLink href="/movies">
              <Link>
                <code>/movies</code>
              </Link>
            </NextLink>
          </Typography>
        </Alert>
      </Stack>
    </div>
  );
};

export default Home;

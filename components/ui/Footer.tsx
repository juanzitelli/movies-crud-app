import { Stack, Avatar, Box } from "@mui/material";
import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flex: "1",
        padding: "2rem 0",
        borderTop: "1px solid #eaeaea",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column" alignItems="center">
        Developed by
        <a
          href="https://github.com/juanzitelli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stack direction="row" alignItems="center">
            <Avatar
              component="image"
              src="https://avatars.githubusercontent.com/u/39205380?v=4"
            />
            @juanzitelli
          </Stack>
        </a>
      </Stack>
    </Box>
  );
};

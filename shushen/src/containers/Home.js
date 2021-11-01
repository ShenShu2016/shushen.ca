import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div>
      <Typography variant="h3">Welcome to my Home Page</Typography>
      <Button
        color="primary"
        variant="contained"
        sx={{ my: 3 }}
        component={Link}
        to="/blog"
      >
        Click me to go Blog
      </Button>
    </div>
  );
}

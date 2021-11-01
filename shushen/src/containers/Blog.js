import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function Blog() {
  return (
    <div>
      <Typography variant="h4"> Welcome to my BLog</Typography>
      <Button
        color="primary"
        variant="contained"
        sx={{ my: 3 }}
        component={Link}
        to="/"
      >
        Click me to go Home
      </Button>
    </div>
  );
}

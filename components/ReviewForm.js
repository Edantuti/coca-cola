"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function ReviewForm({ productId: id }) {
  const [content, setContent] = useState("");
  function handleSubmit(form) {
    //TODO: Implementing the Review submission for the product
  }
  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="caption">Create a new Review</Typography>
      <TextField
        className="w-full"
        onChange={(e) => setContent(e.target.value)}
        label="Review"
        variant="outlined"
      />
    </Box>
  );
}

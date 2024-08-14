"use client";
import { useState } from "react";

import { Button, Container, Typography } from "@mui/material";

export function QuantityButton({ id, quantity: productQuantity }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Container className="flex items-center">
      <Button
        onClick={() =>
          setQuantity(
            productQuantity
              ? Math.min(quantity + 1, productQuantity)
              : quantity + 1,
          )
        }
      >
        +
      </Button>
      <Typography className="px-6 py-1.5 ">
        {Math.min(quantity, productQuantity)}
      </Typography>
      <Button
        onClick={() =>
          setQuantity(
            quantity - 1 > 1
              ? productQuantity
                ? Math.min(quantity - 1, productQuantity)
                : quantity - 1
              : 1,
          )
        }
      >
        -
      </Button>
    </Container>
  );
}

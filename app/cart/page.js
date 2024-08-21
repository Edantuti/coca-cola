"use client";
import { Button, Card, Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { redirect } from "next/navigation";
import Link from "next/link";
// import { useRouter } from "next/router";

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
          onClick: props.onIncrement,
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
          onClick: props.onDecrement,
        },
      }}
      {...props}
      // value={props.value}
      ref={ref}
    />
  );
});

export default function Page() {
  // const router = useRouter();
  const initialproducts = [
    {
      id: 1,
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      description:
        "note:the jackets is us standard size, please choose size as your usual wear material: 100% polyester; detachable liner fabric: warm fleece. detachable functional liner: skin friendly, lightweigt and warm.stand collar liner jacket, keep you warm in cold weather. zippered pockets: 2 zippered hand pockets, 2 zippered pockets on chest (enough to keep cards or keys)and 1 hidden pocket inside.zippered hand pockets and hidden pocket keep your things secure. humanized design: adjustable and detachable hood and adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 detachable design provide more convenience, you can separate the coat and inner as needed, or wear it together. it is suitable for different season and help you adapt to different climates",
      currentPrice: 56.99,
      originalPrice: 66.99,
      imageUrl: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      currentPrice: 29.95,
      originalPrice: 39.95,
      imageUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      currentPrice: 39.99,
      originalPrice: 49.99,
      imageUrl: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      quantity: 1,
    },
  ];
  const [products, setProducts] = useState(initialproducts);

  const handleIncrement = (productId) => {
    console.log("inc", productId);
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    console.log("dec", productId);
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, value) => {
    const newValue = isNaN(value) || value < 1 ? 1 : value;
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: newValue } : product,
    );
    setProducts(updatedProducts);
  };

  const handleRemove = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.currentPrice * product.quantity;
    }, 0.0);
  };

  return (
    <Container className=" flex flex-col gap-5 lg:w-75 w-78 mt-5 mb-5">
      <div>
        <Link href="/checkout">
          <Button
            variant="contained"
            className="rounded-3xl text-black w-full bg-yellow-300"
          >
            Proceed to buy
          </Button>
        </Link>
      </div>
      {products.map((product) => (
        <Card key={product.id} className="p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width="100"
              height="100"
              className="w-[40%] h-[20vh] rounded"
            />
            <div className="flex flex-col">
              <Typography variant="h6" className="line-clamp-1">
                {product.name}
              </Typography>
              <Typography variant="body1" className="line-clamp-2">
                {product.description}
              </Typography>
              <div className="flex items-center gap-2">
                <Typography
                  variant="subtitle2"
                  className="line-through text-gray-500"
                >
                  {/*₹ */}${product.originalPrice}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="font-bold text-black"
                >
                  ${product.currentPrice}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <NumberInput
              aria-label="Quantity Input"
              defaultValue={1}
              min={1}
              max={99}
              value={product.quantity}
              onIncrement={() => handleIncrement(product.id)}
              onDecrement={() => handleDecrement(product.id)}
              onChange={(e) => {
                handleQuantityChange(product.id, parseInt(e.target.value));
                console.log(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              className="bg-transparent text-black rounded-full"
              onClick={() => handleRemove(product.id)}
            >
              Remove from Cart
            </Button>
          </div>
        </Card>
      ))}

      <Container>
        <Box sx={{ marginTop: "24px", textAlign: "left" }}>
          <Typography variant="h6">
            Total Price: ${calculateTotalPrice()}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/checkout" className="rounded-3xl text-black w-[60%] bg-yellow-300"><Button
            variant="contained"
            className="rounded-3xl text-black w-full bg-yellow-300"
            
          >
            Proceed to buy
          </Button></Link>
          <Button variant="contained" className="rounded-3xl">
            Checkout
          </Button>
        </Box>
      </Container>
    </Container>
  );
}

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 4px 6px;
  outline: 0;
  min-width: 0;
  width: 2rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  width: 28px;
  height: 28px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

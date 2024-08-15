// 'use client'
// import { Button, Card, Container, Typography } from "@mui/material";
// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import Image from "next/image";
// import * as React from 'react';
// import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
// import { styled } from '@mui/system';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
//   return (
//     <BaseNumberInput
//       slots={{
//         root: StyledInputRoot,
//         input: StyledInput,
//         incrementButton: StyledButton,
//         decrementButton: StyledButton,
//       }}
//       slotProps={{
//         incrementButton: {
//           children: <AddIcon fontSize="small" />,
//           className: 'increment',
//         },
//         decrementButton: {
//           children: <RemoveIcon fontSize="small" />,
//         },
//       }}
//       {...props}
//       ref={ref}
//     />
//   );
// });


// export default function Page() {
//   return (
//     <Container className=" flex flex-col gap-5 lg:w-75 w-78 mt-5">
//       <div>
//         <Button variant="contained" className="rounded-3xl text-black w-full bg-yellow-300">Proceed to buy</Button>
//       </div>
//       <Card className="p-4 flex flex-col gap-3">
//         <div className="flex gap-3">
//         <Image
//           src={"https://dummyimage.com/600x400/000/fff.png"}
//           alt=""
//           width="200"
//           height="300"
//           className="w-20 rounded"
//         />
//         <div className="flex flex-col">
//         <Typography variant="h6">Product Name</Typography>
//         <Typography variant="body1">Description</Typography>
//         <Typography variant="subtitle2">Price</Typography>
//         </div>
//         </div>
//         <div className="flex justify-between">
//         <NumberInput aria-label="Quantity Input" min={1} max={99}
//          />
//          <Button variant="outlined" className="bg-transparent text-black rounded-full">Remove from Cart</Button>
//         </div>
//       </Card>
//       <Card className="p-4 flex flex-col gap-3">
//         <div className="flex gap-3">
//         <Image
//           src={"https://dummyimage.com/600x400/000/fff.png"}
//           alt=""
//           width="200"
//           height="300"
//           className="w-20 rounded"
//         />
//         <div className="flex flex-col">
//         <Typography variant="h6">Product Name</Typography>
//         <Typography variant="body1">Description</Typography>
//         <Typography variant="subtitle2">Price</Typography>
//         </div>
//         </div>
//         <div className="flex justify-between">
//         <NumberInput aria-label="Quantity Input" min={1} max={99}
//          />
//          <Button variant="outlined" className="bg-transparent text-black rounded-full">Remove from Cart</Button>
//         </div>
//       </Card>
//       <Card className="p-4 flex flex-col gap-3">
//         <div className="flex gap-3">
//         <Image
//           src={"https://dummyimage.com/600x400/000/fff.png"}
//           alt=""
//           width="200"
//           height="300"
//           className="w-20 rounded"
//         />
//         <div className="flex flex-col">
//         <Typography variant="h6">Product Name</Typography>
//         <Typography variant="body1">Description</Typography>
//         <Typography variant="subtitle2">Price</Typography>
//         </div>
//         </div>
//         <div className="flex justify-between">
//         <NumberInput aria-label="Quantity Input" min={1} max={99}
//          />
//          <Button variant="outlined" className="bg-transparent text-black rounded-full">Remove from Cart</Button>
//         </div>
//       </Card>
//       <Card className="p-4 flex flex-col gap-3">
//         <div className="flex gap-3">
//         <Image
//           src={"https://dummyimage.com/600x400/000/fff.png"}
//           alt=""
//           width="200"
//           height="300"
//           className="w-20 rounded"
//         />
//         <div className="flex flex-col">
//         <Typography variant="h6">Product Name</Typography>
//         <Typography variant="body1">Description</Typography>
//         <Typography variant="subtitle2">Price</Typography>
//         </div>
//         </div>
//         <div className="flex justify-between">
//         <NumberInput aria-label="Quantity Input" min={1} max={99}
//          />
//          <Button variant="outlined" className="bg-transparent text-black rounded-full">Remove from Cart</Button>
//         </div>
//       </Card>
//       <Card className="p-4 flex flex-col gap-3">
//         <div className="flex gap-3">
//         <Image
//           src={"https://dummyimage.com/600x400/000/fff.png"}
//           alt=""
//           width="200"
//           height="300"
//           className="w-20 rounded"
//         />
//         <div className="flex flex-col">
//         <Typography variant="h6">Product Name</Typography>
//         <Typography variant="body1">Description</Typography>
//         <Typography variant="subtitle2">Price</Typography>
//         </div>
//         </div>
//         <div className="flex justify-between">
//         <NumberInput aria-label="Quantity Input" min={1} max={99}
//          />
//          <Button variant="outlined" className="bg-transparent text-black rounded-full">Remove from Cart</Button>
//         </div>
//       </Card>
      

//       <Container>
//         <Button>Checkout</Button>
//       </Container>
//     </Container>
//   );
// }


// const blue = {
//   100: '#daecff',
//   200: '#b6daff',
//   300: '#66b2ff',
//   400: '#3399ff',
//   500: '#007fff',
//   600: '#0072e5',
//   700: '#0059B2',
//   800: '#004c99',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E5EAF2',
//   200: '#DAE2ED',
//   300: '#C7D0DD',
//   400: '#B0B8C4',
//   500: '#9DA8B7',
//   600: '#6B7A90',
//   700: '#434D5B',
//   800: '#303740',
//   900: '#1C2025',
// };

// const StyledInputRoot = styled('div')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 400;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
// `,
// );

// const StyledInput = styled('input')(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 1.375;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 4px ${
//     theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
//   };
//   border-radius: 8px;
//   margin: 0 8px;
//   padding: 4px 6px;
//   outline: 0;
//   min-width: 0;
//   width: 2rem;
//   text-align: center;

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   &:focus {
//     border-color: ${blue[400]};
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
//   }

//   &:focus-visible {
//     outline: 0;
//   }
// `,
// );

// const StyledButton = styled('button')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   line-height: 1.5;
//   border: 1px solid;
//   border-radius: 999px;
//   border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
//   width: 28px;
//   height: 28px;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     cursor: pointer;
//     background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
//     border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
//     color: ${grey[50]};
//   }

//   &:focus-visible {
//     outline: 0;
//   }

//   &.increment {
//     order: 1;
//   }
// `,
// );

'use client'
import { Button, Card, Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import * as React from 'react';
import { useState } from "react";
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

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
          className: 'increment',
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
  const initialproducts =
[
  {
    "id": 1,
    "name": "Men's Classic Denim Jacket",
    "description": "A timeless denim jacket with a comfortable fit, perfect for casual wear.",
    "currentPrice": 2999,
    "originalPrice": 3999,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  },
  {
    "id": 2,
    "name": "Women's Floral Summer Dress",
    "description": "A light and breezy summer dress with a vibrant floral print, ideal for warm days.",
    "currentPrice": 1999,
    "originalPrice": 2499,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  },
  {
    "id": 3,
    "name": "Men's Casual Chinos",
    "description": "Comfortable and stylish chinos, suitable for both casual and semi-formal occasions.",
    "currentPrice": 1499,
    "originalPrice": 1999,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  },
  {
    "id": 4,
    "name": "Women's Cozy Knit Sweater",
    "description": "A warm and cozy knit sweater, perfect for chilly evenings.",
    "currentPrice": 1799,
    "originalPrice": 2299,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  },
  {
    "id": 5,
    "name": "Men's Athletic Running Shoes",
    "description": "High-performance running shoes with excellent cushioning and support.",
    "currentPrice": 3499,
    "originalPrice": 4499,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  },
  {
    "id": 6,
    "name": "Women's Lightweight Parka",
    "description": "A versatile and lightweight parka, perfect for unpredictable weather.",
    "currentPrice": 3999,
    "originalPrice": 4999,
    "imageUrl": "https://dummyimage.com/600x400/000/fff.png",
    "quantity": 1
  }
]
  const [products, setProducts] = useState(initialproducts);

  const handleIncrement = (productId) => {
    console.log('inc',productId);
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    console.log('dec',productId);
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, value) => {
    const newValue = isNaN(value) || value < 1 ? 1 : value;
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: newValue }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleRemove = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.currentPrice * product.quantity;
    }, 0);
  };
  
  return (
    <Container className=" flex flex-col gap-5 lg:w-75 w-78 mt-5 mb-5">
      <div>
        <Button variant="contained" className="rounded-3xl text-black w-full bg-yellow-300">Proceed to buy</Button>
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
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <div className="flex items-center gap-2">
                <Typography variant="subtitle2" className="line-through text-gray-500">
                  ₹{product.originalPrice}
                </Typography>
                <Typography variant="subtitle2" className="font-bold text-black">
                  ₹{product.currentPrice}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <NumberInput 
            aria-label="Quantity Input" 
            defaultValue={1} min={1} max={99} 
            value={product.quantity}
            onIncrement={() => handleIncrement(product.id)}
              onDecrement={() => handleDecrement(product.id)}
              onChange={(e) => {handleQuantityChange(product.id, parseInt(e.target.value))
                console.log(e.target.value);
              }}  
              />
            <Button variant="outlined" className="bg-transparent text-black rounded-full" onClick={() => handleRemove(product.id)}>Remove from Cart</Button>
          </div>
        </Card>
      ))}
     
      <Container>
      <Box sx={{ marginTop: "24px", textAlign: "left" }}>
        <Typography variant="h6">Total Price: ₹{calculateTotalPrice()}</Typography>
      </Box>

      <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "space-between" }}>
      <Button variant="contained" className="rounded-3xl text-black w-[60%] bg-yellow-300">Proceed to buy</Button>
        <Button variant="contained"  className="rounded-3xl">
          Checkout
        </Button>
      </Box>
      </Container>
    </Container>
  );
}

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
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
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
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
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
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
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

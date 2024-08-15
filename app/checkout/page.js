
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Container,
} from "@mui/material";
import Image from "next/image";

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
  // const [products, setProducts] = useState(initialproducts);
  return (
    <Container className="flex flex-col gap-5 mt-5 mb-5">
      <Button variant="contained" className="rounded-3xl text-black w-full bg-yellow-300">Place your Order</Button>
      <Card className="p-4">
      <FormControl>
        <FormLabel>Type of Delivery</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="takeaway"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="takeaway"
            control={<Radio />}
            label="TakeAway"
          />
          <FormControlLabel
            value="delivery"
            control={<Radio />}
            label="Home Delivery"
          />
        </RadioGroup>
      </FormControl>
      </Card>
      <Card className="p-4">
      <Typography variant="h6" className="mb-5">Place your Order</Typography>
        <Typography variant="subtitle2" className="flex justify-between"><div>Total Price:</div> <div>₹500</div></Typography>
        <Typography variant="subtitle2" className="flex justify-between"><div>Total Discount:</div><div>-₹200</div></Typography>
        <Typography variant="h6" className="flex justify-between"><div>Overall Price:</div><div>₹300</div> </Typography>
      </Card>
      
     
      {/* <Button variant="contained" className="w-fit">
        Pay Now
      </Button> */}
      {/* <Card className="p-4">
        <Image
          src={"https://dummyimage.com/600x400/000/fff.png"}
          alt=""
          width="400"
          height="600"
          className="w-64 rounded"
        />
        <Typography variant="h6">Product Name</Typography>
        <Typography variant="subtitle2">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
      </Card> */}
      {initialproducts.map((product) => (
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
        </Card>
      ))}
      
      
    </Container>
  );
}

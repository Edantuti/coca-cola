import { OrderPlaced } from "@/components/OrderPlaced";
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
  const initialproducts = [
    {
      id: 1,
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      description:
        "note:the jackets is us standard size, please choose size as your usual wear material: 100% polyester; detachable liner fabric: warm fleece. detachable functional liner: skin friendly, lightweigt and warm.stand collar liner jacket, keep you warm in cold weather. zippered pockets: 2 zippered hand pockets, 2 zippered pockets on chest (enough to keep cards or keys)and 1 hidden pocket inside.zippered hand pockets and hidden pocket keep your things secure. humanized design: adjustable and detachable hood and adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 detachable design provide more convenience, you can separate the coat and inner as needed, or wear it together. it is suitable for different season and help you adapt to different climates",
      currentPrice: 56.99,
      originalPrice: 66.99,
      imageUrl: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      quantity: 3,
    },
    {
      id: 2,
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      currentPrice: 29.95,
      originalPrice: 39.95,
      imageUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      quantity: 4,
    },
    {
      id: 3,
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      currentPrice: 39.99,
      originalPrice: 49.99,
      imageUrl: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      quantity: 5,
    },
  ];
  // const [products, setProducts] = useState(initialproducts);
  return (
    <Container className="flex flex-col gap-5 mt-5 mb-5">
      <OrderPlaced />
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
        <Typography variant="h6" className="mb-5">
          Place your Order
        </Typography>
        <Typography variant="subtitle2" className="flex justify-between">
          <div>Total Price:</div> <div>$156.93</div>
        </Typography>
        <Typography variant="subtitle2" className="flex justify-between">
          <div>Total Discount:</div>
          <div>-$30</div>
        </Typography>
        <Typography variant="h6" className="flex justify-between">
          <div>Overall Price:</div>
          <div>$126.93</div>{" "}
        </Typography>
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
        </Card>
      ))}
    </Container>
  );
}

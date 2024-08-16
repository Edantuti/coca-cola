import { BottomNav } from "@/components/BottomNav";
import { QuantityButton } from "@/components/QuantityButton";
import { ReviewForm } from "@/components/ReviewForm";
import { ShoppingCart, Star } from "@mui/icons-material";
import {
  List,
  ListItem,
  Box,
  Container,
  Grid,
  Typography,
  ListItemText,
  Button,
  TextField,
  Rating,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import Image from "next/image";

const Products = [
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    originalPrice: 66.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    originalPrice: 39.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    originalPrice: 49.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    originalPrice: 10.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    originalPrice: 8.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    originalPrice: 13.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
];
export default function Page({ params }) {
  const data = Products.filter((data) => data.id == params.id)[0];
  return (
    <Container className="w-fit p-0">
      <Image
        src={data.image || "https://dummyimage.com/600x600/000/fff.png"}
        alt={"product"}
        width="600"
        height="600"
        className="w-96"
      />
      <Typography variant="body2" component="h2" className="px-3 py-1.5">
        {data.title}
      </Typography>
      <Box className="flex items-center gap-2 px-3">
        <Rating
          value={4}
          defaultValue={4}
          precision={0.5}
          readOnly
          className=""
        />
        <Typography variant="caption">4.0</Typography>
        <Typography variant="caption">134 ratings</Typography>
      </Box>
      <Box className="flex items-center gap-2 px-3">
        <Typography className="text-green-500 p-0.5" variant="body2">
          {Math.floor(
            ((data.originalPrice - data.price) / data.originalPrice) * 100,
          )}
          % off
        </Typography>
        <Typography className="line-through text-slate-500" variant="body2">
          ${data.originalPrice}
        </Typography>
        <Typography variant="h6">${data.price}</Typography>
      </Box>
      {/*<QuantityButton id={params.id} quantity={10} />*/}
      <Box className="px-2">
        <Typography variant="h6" as="h6" className="text-lg">
          Offers {"&"} Coupons
        </Typography>
        <Typography variant="body2" className="px-1">
          Partner Offer - Buy this {"&"} get upto $10 off on Clothes
        </Typography>
      </Box>
      <Container className="p-2 space-y-2">
        <Box className="">
          <Typography variant="h6">Description</Typography>
          <Typography variant="body2" className="text-sm px-1">
            {data.description}
          </Typography>
        </Box>
        <Typography variant="h6">Details</Typography>
        <Container className="px-2">
          <List className="p-0">
            {Array.from({ length: 3 }, (_, i) => i + 1).map((ind) => (
              <ListItem className="px-2" key={ind}>
                <ListItemIcon className="p-1">
                  <Star className="w-5 h-5" />
                </ListItemIcon>
                <ListItemText>
                  <Typography className="text-xs p-0">
                    Amazing product
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>
      </Container>
      <Container className="mb-20">
        <Typography variant="h6">Reviews</Typography>
        <Container className="flex flex-col gap-5">
          <ReviewForm productId="productId" />
          <ReviewCard
            name="Samantha K"
            description="This jacket is everything I wanted and more! The fit is perfect, and the removable hood adds versatility. It looks just like real leather, and I've received so many compliments. Definitely worth the purchase!"
          />
          <ReviewCard
            name="Emily S"
            description="I've been searching for a stylish and affordable faux leather jacket, and this one exceeded my expectations. The material feels soft, and the removable hood is a nice touch. It keeps me warm during chilly nights, and I adore the biker style. Highly recommend!"
          />
          <ReviewCard
            name="Rachel P"
            description="The jacket looks great and is very fashionable. However, I found the sleeves a bit tight, and the material doesn’t breathe well. It's more of a fashion piece than something you'd want to wear for long periods. Still, it’s a cute addition to my wardrobe."
          />
        </Container>
      </Container>
      <Paper className="fixed z-10 bottom-0 right-0 left-0">
        <BottomNav />
      </Paper>
    </Container>
  );
}

function ReviewCard({ name, description }) {
  return (
    <Box className="p-2 shadow rounded border space-y-2">
      <Box className="flex gap-2.5 items-center">
        <Avatar src="" alt="jake" />
        <Typography variant="h6" className="text-sm">
          {name}
        </Typography>
      </Box>
      <Typography variant="subtitle1">Review</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
}

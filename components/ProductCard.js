import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function ProductCard({
  id,
  name,
  type,
  category,
  image,
  price,
}) {
  return (
    <Link href={`/product/${id}`}>
      <Card className="md:w-96 w-fit rounded-none border border-px">
        <CardMedia
          component={"img"}
          image={image || "https://dummyimage.com/600x600/000/fff.png"}
          title={name}
        />
        <CardContent>
          <Typography
            variant="caption"
            component="h2"
            className="text-slate-500 line-clamp-2"
          >
            {name}
          </Typography>
          <Typography variant="h5" component="div" className="flex gap-2">
            <Typography component="span" className="text-green-600">
              76% off
            </Typography>
            <Typography
              component="span"
              className="line-through text-slate-400"
            >
              199
            </Typography>
            <Typography component="span" className="">
              ${price}
            </Typography>
          </Typography>
          <Rating value={4} defaultValue={4} readOnly />
        </CardContent>
      </Card>
    </Link>
  );
}

//TODO: things to implement
// 1. Products manipulating page
// 2. Carts Page
// 3. wishlist page
// 4. Backend routes (carts crud, wishlist crud, products crud)

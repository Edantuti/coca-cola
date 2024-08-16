import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, name, originalPrice, image, price }) {
  return (
    <Link href={`/product/${id}`}>
      <Card className="md:w-96 w-fit rounded-none border border-px">
        <Image
          src={image || "https://dummyimage.com/600x600/000/fff.png"}
          alt={name}
          width="600"
          height="600"
          className="aspect-square"
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
            <Typography component="span" className="text-green-600 text-sm">
              {Math.floor(((originalPrice - price) / originalPrice) * 100)}% off
            </Typography>
            <Typography
              component="span"
              className="line-through text-slate-400 text-sm"
            >
              {originalPrice}
            </Typography>
            <Typography component="span" className=" text-sm">
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

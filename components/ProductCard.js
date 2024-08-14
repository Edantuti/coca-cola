import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";


export default function ProductCard({ id, name, type, category, image, price }) {
  return (
    <Link href={`/product/${id}`}>
    <Card className="md:w-96 w-fit m-2">
      <CardMedia component={'img'} image={image || "https://dummyimage.com/600x400/000/fff.png"} title={name} />
      <CardContent>
        <Typography variant="caption" component="h2" >
            {type} | {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" component="div">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
    </Link>
  );
}


//TODO: things to implement
// 1. Products manipulating page
// 2. Carts Page
// 3. wishlist page
// 4. Backend routes (carts crud, wishlist crud, products crud)
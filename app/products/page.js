import ProductCard from "@/components/ProductCard";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Grid className="grid grid-cols-2">
      <CategoryCard category="clothes" image="" route="clothes" />
      <CategoryCard category="grocery" image="" route="grocery" />
      <CategoryCard category="accessories" image="" route="accessories" />
      <CategoryCard category="QRCode Scanner" image="" route="qrcode" />
    </Grid>
  );
}

function CategoryCard({ category, image, route }) {
  return (
    <Link href={`/products/${route}`}>
      <Card className="md:w-96 w-fit rounded-none border border-px">
        <Image
          src={image || "https://dummyimage.com/600x600/000/fff.png"}
          alt={category}
          width="600"
          height="600"
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            className="text-center"
          >
            {category}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

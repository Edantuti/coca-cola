import ProductCard from "@/components/ProductCard";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Page(){
    return (
        <Grid className="gap-10">
            <CategoryCard category="clothes" image="" route="clothes"/>
            <CategoryCard category="grocery" image="" route="grocery"/>
            <CategoryCard category="accessories" image="" route="accessories"/>
            <CategoryCard category="QRCode" image="" route="qrcode"/>
        </Grid>
    )
}

function CategoryCard({category, image, route}){
    return (<Link href={`/products/${route}`}>
    <Card className="md:w-96 w-fit m-2">
      <CardMedia component={'img'} image={image || "https://dummyimage.com/600x400/000/fff.png"} title={category} />
      <CardContent>
        
        <Typography variant="h5" component="div" className="text-center">
          {category}
        </Typography>
      </CardContent>
    </Card>
    </Link>)
}


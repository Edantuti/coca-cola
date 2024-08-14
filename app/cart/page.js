import { Button, Card, Container, Typography } from "@mui/material";
import Image from "next/image";
export default function Page() {
  return (
    <Container className="outline flex flex-col gap-5 w-72">
      <Card className="p-4">
        <Image
          src={"https://dummyimage.com/600x400/000/fff.png"}
          alt=""
          width="400"
          height="600"
          className="w-64 rounded"
        />
        <Typography variant="h6">Product Name</Typography>
        <Typography variant="subtitle1">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
        <Button variant="contained">Remove from Cart</Button>
      </Card>
      <Card className="p-4">
        <Image
          src={"https://dummyimage.com/600x400/000/fff.png"}
          alt=""
          width="400"
          height="600"
          className="w-64"
        />
        <Typography variant="h6">Product Name</Typography>
        <Typography variant="subtitle1">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
        <Button variant="contained">Remove from Cart</Button>
      </Card>
      <Card className="p-4">
        <Image
          src={"https://dummyimage.com/600x400/000/fff.png"}
          alt=""
          width="400"
          height="600"
          className="w-64"
        />
        <Typography variant="h6">Product Name</Typography>
        <Typography variant="subtitle1">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
        <Button variant="contained">Remove from Cart</Button>
      </Card>

      <Container>
        <Button>Checkout</Button>
      </Container>
    </Container>
  );
}

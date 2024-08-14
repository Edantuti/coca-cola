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
  return (
    <Container className="flex flex-col gap-5">
      <Card className="p-4">
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
        <Typography variant="subtitle2">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
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
        <Typography variant="subtitle2">Quantity</Typography>
        <Typography variant="subtitle2">Price</Typography>
      </Card>

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
      <Card className="p-4">
        <Typography variant="h6">Total Price:</Typography>
        <Typography variant="subtitle2">Total Discount:</Typography>
        <Typography variant="subtitle2">Overall Price: </Typography>
      </Card>
      <Button variant="contained" className="w-fit">
        Pay Now
      </Button>
    </Container>
  );
}

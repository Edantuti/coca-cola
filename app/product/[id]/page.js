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

export default function Page({ params }) {
  return (
    <Container className="w-fit p-0">
      <Image
        src={"https://dummyimage.com/600x600/000/fff.png"}
        alt={"product"}
        width="600"
        height="600"
        className="w-96"
      />
      <Typography variant="body2" component="h2" className="px-3 py-1.5">
        Life could be dream
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
          50%
        </Typography>
        <Typography className="line-through text-slate-500" variant="body2">
          $199
        </Typography>
        <Typography variant="h6">$99</Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            blandit erat ac est ullamcorper maximus. Aliquam eget lacinia dolor.
            Fusce ut nisi ornare, posuere mi nec, fringilla lacus.
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
                    Lorem ipsum dolor sit amet, vitae euismod dui.
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
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Container>
      </Container>
      <Paper className="fixed z-10 bottom-0 right-0 left-0">
        <BottomNav />
      </Paper>
    </Container>
  );
}

function ReviewCard() {
  return (
    <Box className="p-2 shadow rounded border space-y-2">
      <Box className="flex gap-2.5 items-center">
        <Avatar src="" alt="jake" />
        <Typography variant="h6" className="text-sm">
          Jake Rick
        </Typography>
      </Box>
      <Typography variant="subtitle1">Review</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit
        erat ac est ullamcorper maximus. Aliquam eget lacinia dolor. Fusce ut
        nisi ornare, posuere mi nec, fringilla lacus. Vivamus vitae commodo
        erat, nec rhoncus enim. Morbi dapibus nunc ornare diam varius, at ornare
        tortor maximus. Curabitur vestibulum nisi a egestas pharetra. Proin
        varius fermentum tellus in lobortis.
      </Typography>
    </Box>
  );
}

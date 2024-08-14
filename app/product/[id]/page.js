import { QuantityButton } from "@/components/QuantityButton";
import { ReviewForm } from "@/components/ReviewForm";
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
} from "@mui/material";
import Image from "next/image";

export default function Page({ params }) {
  return (
    <Container className="w-96 outline">
      <Image
        src={"https://dummyimage.com/600x400/000/fff.png"}
        alt={"product"}
        width="600"
        height="400"
        className="w-64"
      />
      <Typography variant="caption" component="h2">
        Product type | Product category
      </Typography>
      <Typography variant="h5">Product Name</Typography>
      <Typography variant="subtitle1">Product Price:99</Typography>
      <QuantityButton id={params.id} quantity={10} />
      <Container>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit erat ac est ullamcorper maximus. Aliquam eget lacinia dolor.
          Fusce ut nisi ornare, posuere mi nec, fringilla lacus. Vivamus vitae
          commodo erat, nec rhoncus enim. Morbi dapibus nunc ornare diam varius,
          at ornare tortor maximus. Curabitur vestibulum nisi a egestas
          pharetra. Proin varius fermentum tellus in lobortis. Maecenas sit amet
          elit quis enim euismod maximus. Donec efficitur sem nibh, viverra
          feugiat odio facilisis vitae. Donec vel purus tempus, ornare odio
          volutpat, egestas ligula. Cras id orci sodales, consequat neque eget,
          malesuada lectus. Proin ut dolor non velit semper tincidunt vel in
          massa. Morbi vitae vehicula ante, vitae euismod dui.
        </Typography>
        <Typography variant="h6">Details</Typography>
        <Container>
          <List>
            <ListItem>
              <ListItemText>
                Lorem ipsum dolor sit amet, vitae euismod dui.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Lorem ipsum dolor sit amet, vitae euismod dui.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Lorem ipsum dolor sit amet, vitae euismod dui.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Lorem ipsum dolor sit amet, vitae euismod dui.
              </ListItemText>
            </ListItem>
          </List>
        </Container>
      </Container>
      <Container>
        <Typography variant="h6">Reviews</Typography>
        <Container className="flex flex-col gap-5">
          <ReviewForm productId="productId" />
          <Box className="outline">
            <Image
              src={""}
              alt=""
              className="w-20 h-20"
              height="20"
              width="20"
            />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              blandit erat ac est ullamcorper maximus. Aliquam eget lacinia
              dolor. Fusce ut nisi ornare, posuere mi nec, fringilla lacus.
              Vivamus vitae commodo erat, nec rhoncus enim. Morbi dapibus nunc
              ornare diam varius, at ornare tortor maximus. Curabitur vestibulum
              nisi a egestas pharetra. Proin varius fermentum tellus in
              lobortis.
            </Typography>
          </Box>

          <Box className="outline">
            <Image
              src={""}
              alt=""
              className="w-20 h-20"
              height="20"
              width="20"
            />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              blandit erat ac est ullamcorper maximus. Aliquam eget lacinia
              dolor. Fusce ut nisi ornare, posuere mi nec, fringilla lacus.
              Vivamus vitae commodo erat, nec rhoncus enim. Morbi dapibus nunc
              ornare diam varius, at ornare tortor maximus. Curabitur vestibulum
              nisi a egestas pharetra. Proin varius fermentum tellus in
              lobortis.
            </Typography>
          </Box>

          <Box className="outline">
            <Image
              src={""}
              alt=""
              className="w-20 h-20"
              height="20"
              width="20"
            />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              blandit erat ac est ullamcorper maximus. Aliquam eget lacinia
              dolor. Fusce ut nisi ornare, posuere mi nec, fringilla lacus.
              Vivamus vitae commodo erat, nec rhoncus enim. Morbi dapibus nunc
              ornare diam varius, at ornare tortor maximus. Curabitur vestibulum
              nisi a egestas pharetra. Proin varius fermentum tellus in
              lobortis.
            </Typography>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}

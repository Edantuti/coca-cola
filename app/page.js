import Link from "next/link";
import { Button, Typography } from "@mui/material";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Typography variant="h6">Trade-in-offer</Typography>
      <Typography variant="h6">Super value deals</Typography>
      <Typography variant="h6">On all products</Typography>
      <Typography variant="caption"> Save more with coupons</Typography>
      <Link href="/products">
        <Button variant="contained">Shop Now</Button>{" "}
      </Link>
    </main>
  );
}

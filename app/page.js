import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { MapSharp, QrCode, ShoppingBag } from "@mui/icons-material";
import { AuroraBackground } from "@/components/ui/background";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <img src={"https://e-commerce-iecara.netlify.app/img/hero4.png"} alt="background" className="absolute -z-10 h-full object-cover"/>
      <Box className="flex flex-col items-start space-y-2 my-20 mx-10">
      <Typography variant="h6" className="font-semibold text-base">Trade-in-offer</Typography>
      <Typography variant="h6" className="font-semibold text-2xl">Super value deals</Typography>
      <Typography variant="h6" className="font-bold text-lime-500 text-3xl">On all products</Typography>
      <Typography variant="caption" className="text-sm text-slate-400"> Save more with coupons</Typography>
      <Link href="/products">
        <button variant="contained" className="bg-black py-2 px-8 text-white rounded">Shop Now</button>{" "}
      </Link>
      </Box>
      <Link className="absolute bottom-36 right-5 border rounded-full shadow py-4 bg-white" href="/products/qrcode"><Button className="p-0"><QrCode className="size-8" /></Button></Link>
      <Link className="absolute bottom-20 right-5 border rounded-full shadow py-4 bg-white" href="/map"><Button className="p-0"><MapSharp /></Button></Link>
    </main>
  );
}

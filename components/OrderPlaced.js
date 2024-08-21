"use client";
import { Button } from "@mui/material";
import { toast } from "sonner";

export function OrderPlaced(){
    return (
        <Button
        variant="contained"
        className="rounded-3xl text-black w-full bg-yellow-300"
        onClick={()=>toast.success("Your Billing is Done!")}
      >
        Place your Order
      </Button>
    )
}
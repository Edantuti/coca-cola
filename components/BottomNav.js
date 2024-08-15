"use client";
import { ShoppingCart } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { toast } from "sonner";

export function BottomNav() {
  return (
    <BottomNavigation className="bg-[#1976d2]" showLabels>
      <BottomNavigationAction
        className="w-full"
        label="Add to Cart"
        value="Add to Cart"
        onClick={() => toast.success("Successfully Added to the cart")}
        icon={<ShoppingCart />}
      />
    </BottomNavigation>
  );
}

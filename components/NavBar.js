"use client";
import { signOut, useSession } from "next-auth/react";
import { FaCartShopping, FaOpencart } from "react-icons/fa6";
// import { AccountCircle, ShoppingCart } from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function NavBar({ auth }) {
  const { data } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" className="bg-neutral-700" bg={"#404040"}>
      <Toolbar className="flex justify-between gap-4" bg={"#404040"}>
        <Typography className="text-xl font-cendarville">Wal Cart</Typography>
        {auth ? (
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <Link href="/cart" className="flex gap-2">
              <FaCartShopping className="fill-white size-6" />
            </Link>

            <Avatar
              src={data.user?.image || ""}
              alt="Profile"
              onClick={handleMenu}
            />
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOut();
                }}
              >
                Logout
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/cart">My Cart </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/wishlist">My WishList </Link>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <Link href="/login" className="bg-slate-950 rounded py-2 px-4">
              Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

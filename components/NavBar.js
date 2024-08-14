"use client";
import { signOut } from "next-auth/react";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function NavBar({ auth }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <h6 className="text-xl">Project Name</h6>
        {auth ? (
          <div>
            <Link href="/cart">
              <IconButton size="large">
                <ShoppingCart />
              </IconButton>
            </Link>
            <IconButton size="large" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
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
            <Link href="/login" className="bg-blue-800 rounded py-2 px-4">
              Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

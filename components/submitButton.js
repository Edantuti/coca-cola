"use client";
import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, className }) {
  const { pending } = useFormStatus();
  return (
    <Button variant="contained" className={className} disabled={pending}>
      {children ? children : "Submit"}
    </Button>
  );
}

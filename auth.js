import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia } from "lucia";
import { db } from "@/db";
import { Google } from "arctic";

export const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: true,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      name: attributes.name,
      email: attributes.email,
      staff: attributes.staff,
      photo: attributes.photo,
    };
  },
});

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.BACKEND_URL}/api/auth/google/callback`,
);

"use server";

import { redirect } from "next/navigation";
import { cache } from "react";
import { lucia } from "@/auth";
import { cookies } from "next/headers";
export const getUser = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) return { user: null, session: null };
  const result = await lucia.validateSession(sessionId);
  const session = result.session;
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
  } catch (error) {
    console.error(error);
  }
  return result;
});

export const logout = async () => {
  const { session } = await getUser();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
};

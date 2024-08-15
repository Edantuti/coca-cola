import { getServerAuthSession } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function addCart(productId, quantity) {
  const session = await getServerAuthSession();
  if (!session) return;
  const data = await db.cart.create({
    data: {
      userId: session.user.id,
      productId: productId,
      quantity: quantity,
    },
  });
}

export async function modifyCart(productId, quantity) {
  const session = await getServerAuthSession();
  if (!session) return;
  await db.cart.update({
    where: { userId: session.user.id, productId: productId },
    data: { quantity: quantity },
  });
  revalidatePath("/cart");
}

export async function removeProductCart(productId) {
  const session = await getServerAuthSession();
  if (!session) return;
  await db.cart.delete({
    where: {
      userId: session.user.id,
      productId: productId,
    },
  });
  revalidatePath("/cart");
}

"use server";

import { getServerAuthSession } from "@/auth";
import { db } from "@/db";

export async function getProductByType(type) {
  const data = await db.product.findMany({ type: type });
  return data;
}
export async function getProductByCategory(category) {
  const data = await db.product.findMany({ category });
  return data;
}
export async function getProductById(id) {
  const data = await db.product.findUnique({ id: id });
  return data;
}

export async function setProduct(data) {
  const productData = await db.product.create({
    data: {
      name: data.name,
      image: data.image,
      stock: data.stock,
      price: data.price,
      category: data.category,
      details: data.details,
      description: data.description,
      size: data.size,
    },
  });
  if (data.type === "clothes") {
    await db.clothProduct.create({
      data: {
        productId: productData.id,
        humanType: productData.humanType,
      },
    });
  } else if (data.type === "grocery") {
    await db.groceryProduct.create({
      data: {
        productId: productData.id,
        expiryDate: productData.expiryDate,
      },
    });
  }
  return productData;
}

export async function updateProduct(productId, data) {
  await db.product.update({
    where: { id: productId },
    data: data,
  });
  revalidate(`/product/${productId}`);
}
export async function setReviewProduct(productId, content) {
  const session = await getServerAuthSession();
  if (!session) return;
  const data = await db.reviews.create({
    userId: session.user.id,
    productId: productId,
    content: content,
  });
  revalidatePath(`/product/${productId}`);
  return data;
}

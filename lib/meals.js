import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug =?').get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instruction = xss(meal.instructions);

  const extention = meal.image.split(".").pop();
  const filename = `${meal.slug}.${extension}}`;

}
import { get } from "firebase/database";
const { dbMealsRef } = require("./firebase");

export const getMeals = async () => {
  try {
    const snapshot = await get(dbMealsRef);

    if (!snapshot.exists()) {
      throw new Error("Resource does not exist");
    }

    const mealsCollection = snapshot.val();

    return Object.entries(mealsCollection).map(([id, data]) => ({
      id: id,
      ...data,
    }));
  } catch (error) {
    return error;
  }
};

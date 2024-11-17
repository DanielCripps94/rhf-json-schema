export const GET_JSON_SCHEMA = "GET_JSON_SCHEMA";
import { ResponseSchema } from "~/layers/shared/types";

export const getJsonSchema = async () => {
  const BASE_URL =
    process.env.BASE_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";
  try {
    const response = await fetch(`${BASE_URL}/api/get-schema`);

    if (response.ok) {
      const data = await response.json();
      return ResponseSchema.parse(data);
    } else {
      const errorData = await response.json();
      return { error: errorData };
    }
  } catch (error) {
    console.error("Error fetching JSON schema:", error);
    return { error: "An error occurred during fetch" };
  }
};

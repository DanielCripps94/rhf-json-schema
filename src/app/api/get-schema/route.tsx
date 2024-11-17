import { NextResponse } from "next/server";
import { transformSchema } from "~/app/api/get-schema/data-manipulation";

export async function GET() {
  const REGISTRATION_TENANT_ID = process.env.REGISTRATION_TENANT_ID;
  const SCHEMA_ORIGIN_URL = process.env.SCHEMA_ORIGIN_URL;

  try {
    const response = await fetch(`${SCHEMA_ORIGIN_URL}/v1/schema/client`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-Id": `${REGISTRATION_TENANT_ID}`,
      },
    });
    const data = await response.json();
    const transformedData = transformSchema(data);

    return NextResponse.json(transformedData, { status: 200 });
  } catch (error) {
    console.error(error, "error");
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

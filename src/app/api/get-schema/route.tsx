import { NextResponse } from "next/server";
import { transformSchema } from "~/app/api/get-schema/data-manipulation";

export async function GET() {
  const REGISTRATION_TENANT_ID = "63328b33-67f0-4037-ade2-473ea69617b1";
  try {
    const response = await fetch(
      "https://registration.mamabet.cd/v1/schema/client",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant-Id": `${REGISTRATION_TENANT_ID}`,
        },
      }
    );
    const data = await response.json();
    const transformedData = transformSchema(data);

    return NextResponse.json(transformedData, { status: 200 });
  } catch (error) {
    console.error(error, "error");
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Template from "@/models/Template";

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const countryCode = searchParams.get('countryCode');

    if (countryCode) {
      const template = await Template.findOne({ countryCode });
      if (!template) {
        return NextResponse.json({ error: "Template not found" }, { status: 404 });
      }
      return NextResponse.json(template);
    }

    const templates = await Template.find({});
    return NextResponse.json(templates);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

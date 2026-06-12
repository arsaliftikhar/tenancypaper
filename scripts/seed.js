import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

const TemplateSchema = new mongoose.Schema(
  {
    countryCode: String,
    title: String,
    fields: [
      {
        name: String,
        label: String,
        type: String,
        placeholder: String,
      },
    ],
  },
  { timestamps: true }
);

const Template = mongoose.models.Template || mongoose.model("Template", TemplateSchema);

const templates = [
  {
    countryCode: "UAE",
    title: "UAE Standard Tenancy Contract",
    fields: [
      { name: "landlordName", label: "Landlord Name", type: "text", placeholder: "e.g., Ahmed Al Maktoum" },
      { name: "tenantName", label: "Tenant Name", type: "text", placeholder: "e.g., John Doe" },
      { name: "propertyAddress", label: "Property Address", type: "text", placeholder: "e.g., Apt 101, Marina Tower, Dubai" },
      { name: "propertyType", label: "Property Type", type: "text", placeholder: "e.g., Apartment, Villa" },
      { name: "rentAmount", label: "Annual Rent (AED)", type: "number", placeholder: "e.g., 100000" },
      { name: "securityDeposit", label: "Security Deposit (AED)", type: "number", placeholder: "e.g., 5000" },
      { name: "startDate", label: "Contract Start Date", type: "date" },
      { name: "endDate", label: "Contract End Date", type: "date" },
      { name: "additionalTerms", label: "Additional Terms", type: "textarea", placeholder: "Any special conditions..." },
    ],
  },
  {
    countryCode: "UK",
    title: "UK Assured Shorthold Tenancy Agreement",
    fields: [
      { name: "landlordName", label: "Landlord Name", type: "text", placeholder: "e.g., James Smith" },
      { name: "tenantName", label: "Tenant Name", type: "text", placeholder: "e.g., Emily Johnson" },
      { name: "propertyAddress", label: "Property Address", type: "text", placeholder: "e.g., 10 Downing Street, London" },
      { name: "rentAmount", label: "Monthly Rent (£)", type: "number", placeholder: "e.g., 1500" },
      { name: "securityDeposit", label: "Security Deposit (£)", type: "number", placeholder: "e.g., 1500" },
      { name: "startDate", label: "Tenancy Start Date", type: "date" },
      { name: "endDate", label: "Tenancy End Date", type: "date" },
    ],
  },
  {
    countryCode: "Canada",
    title: "Canada Residential Tenancy Agreement",
    fields: [
      { name: "landlordName", label: "Landlord Name", type: "text", placeholder: "e.g., Robert Brown" },
      { name: "tenantName", label: "Tenant Name", type: "text", placeholder: "e.g., Sarah Davis" },
      { name: "propertyAddress", label: "Property Address", type: "text", placeholder: "e.g., 123 Maple Street, Toronto, ON" },
      { name: "rentAmount", label: "Monthly Rent (CAD)", type: "number", placeholder: "e.g., 2000" },
      { name: "startDate", label: "Tenancy Start Date", type: "date" },
      { name: "endDate", label: "Tenancy End Date", type: "date" },
    ],
  },
];

async function seed() {
  if (!MONGODB_URI || MONGODB_URI.includes("dummy")) {
    console.log("Using a dummy MONGODB_URI, skipping DB seed. Please update .env.local with a real connection string to use the DB.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    await Template.deleteMany({});
    console.log("Cleared existing templates.");

    await Template.insertMany(templates);
    console.log("Successfully seeded database with templates!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

seed();

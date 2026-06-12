import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    countryCode: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    fields: [
      {
        name: { type: String, required: true },
        label: { type: String, required: true },
        type: { type: String, required: true }, // e.g., 'text', 'date', 'number'
        placeholder: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Template ||
  mongoose.model("Template", TemplateSchema);

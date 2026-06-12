export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-[16px]">Last updated: June 12, 2026</p>
      </div>

      <div className="prose prose-blue prose-lg max-w-none text-gray-600 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          When you use TenancyPaper, we temporarily collect the information necessary to generate your contract. This includes personal details (names, contact info, Emirates ID numbers) and property details extracted from your uploaded documents.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          The data collected is used strictly for the purpose of auto-filling the DLD Unified Tenancy Contract PDF. We do not use your personal information for marketing, nor do we sell it to third parties.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">3. Data Security and Retention</h2>
        <p className="mb-6">
          All data transfers are secured using industry-standard SSL encryption. Uploaded documents (Title Deeds, IDs) are processed in memory and are automatically deleted from our servers immediately after the PDF is generated.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">4. Third-Party Services</h2>
        <p className="mb-6">
          We may use third-party AI OCR services to extract text from your documents. These providers are bound by strict confidentiality agreements and do not retain your data.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about our privacy practices, please contact our data protection officer at privacy@tenancypaper.com.
        </p>
      </div>
    </main>
  );
}

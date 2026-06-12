export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-[16px]">Last updated: June 12, 2026</p>
      </div>

      <div className="prose prose-blue prose-lg max-w-none text-gray-600 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">1. Introduction</h2>
        <p className="mb-6">
          Welcome to TenancyPaper. By using our website and services to generate Dubai tenancy contracts, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">2. Service Description</h2>
        <p className="mb-6">
          TenancyPaper provides an automated software tool that assists users in generating residential tenancy contracts based on the Dubai Land Department (DLD) Unified Tenancy Contract format. We are a technology platform, not a law firm, and we do not provide legal advice.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">3. User Responsibilities</h2>
        <p className="mb-6">
          You are solely responsible for ensuring the accuracy of all information entered into the contract. You must verify all details before signing or submitting the contract for Ejari registration.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">4. Document Processing</h2>
        <p className="mb-6">
          Any documents uploaded (such as Emirates IDs or Title Deeds) are processed temporarily to extract data and populate your contract. We do not permanently store these documents on our servers.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">5. Disclaimer of Liability</h2>
        <p>
          TenancyPaper shall not be held liable for any disputes, financial losses, or legal complications arising from the use of the contracts generated on our platform. The final responsibility for regulatory compliance lies with the landlord and tenant.
        </p>
      </div>
    </main>
  );
}

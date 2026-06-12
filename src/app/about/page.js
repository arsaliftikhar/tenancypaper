import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-6">
          About TenancyPaper
        </h1>
        <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed">
          We are on a mission to simplify real estate transactions in Dubai by providing the fastest, most secure way to generate legally compliant Ejari-ready tenancy contracts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-[24px] font-bold text-[#0B132B] mb-4">Our Story</h2>
        <p className="mb-6 leading-relaxed">
          TenancyPaper was built by real estate professionals who were tired of the manual, error-prone, and expensive process of generating standard tenancy agreements at traditional typing centres. We realized that with modern AI, the process could be entirely automated, saving both landlords and tenants valuable time and money.
        </p>
        
        <h2 className="text-[24px] font-bold text-[#0B132B] mb-4 mt-10">Simplifying Dubai Real Estate</h2>
        <p className="mb-6 leading-relaxed">
          The process of drafting a <strong>Dubai tenancy contract</strong> used to be complicated and expensive. Whether you are a landlord leasing out a residential property or a tenant moving into your new home, compliance with the <strong>Real Estate Regulatory Agency (RERA)</strong> is mandatory. We provide the officially recognized <strong>DLD Unified Tenancy Contract (v1.4)</strong> template so your rental agreement is instantly valid and recognized by the government.
        </p>

        <h2 className="text-[24px] font-bold text-[#0B132B] mb-4 mt-10">100% Ejari-Ready Agreements</h2>
        <p className="mb-6 leading-relaxed">
          Every residential rental agreement in Dubai must be registered with the <strong>Ejari system</strong>. To ensure a smooth registration process without delays, the document must adhere strictly to the regulations set forth by the <strong>Dubai Land Department (DLD)</strong> and <strong>Dubai Law No. 26 of 2007</strong> regulating the relationship between landlords and tenants. By using TenancyPaper, you guarantee that your printed PDF is <strong>Ejari-ready</strong>, allowing you to seamlessly register your lease via the Dubai REST app or at a typing centre.
        </p>

        <h2 className="text-[24px] font-bold text-[#0B132B] mb-4 mt-10">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>100% Free:</strong> Skip the expensive typing centre fees (typically AED 150-300). Generate your contract instantly online at zero cost.</li>
          <li><strong>DLD & RERA Compliant:</strong> Our templates precisely match the official <strong>Dubai Land Department Unified Tenancy Contract</strong>.</li>
          <li><strong>AI-Powered Automation:</strong> We eliminate manual data entry by securely extracting information directly from your <strong>Emirates IDs</strong> and Title Deeds.</li>
          <li><strong>Bank-Grade Security:</strong> We employ end-to-end encryption. Your highly sensitive documents are processed securely and deleted immediately after your PDF is generated.</li>
        </ul>

        <div className="mt-12 text-center">
          <Link href="/generate" className="inline-flex bg-[#0066FF] text-white px-8 py-4 rounded-xl text-[16px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] items-center justify-center gap-2 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300">
            Generate Contract Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}

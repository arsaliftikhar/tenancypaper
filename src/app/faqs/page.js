"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FAQsPage() {
  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pt-12 pb-24 space-y-16">
      
      <div className="text-center mb-16 max-w-2xl mx-auto mt-8">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed">
          Everything you need to know about TenancyPaper. Can't find the answer you're looking for? Reach out to our support team.
        </p>
      </div>

      <div className="space-y-4 max-w-[800px] mx-auto mb-20">
        {[
          { q: "What is a Dubai tenancy contract?", a: "A Dubai tenancy contract is the official rental agreement between a landlord and tenant, required by the Real Estate Regulatory Agency (RERA) and the Dubai Land Department (DLD). It must follow the DLD Unified Tenancy Contract format (v1.4) and must be registered with Ejari to be legally valid." },
          { q: "Is the contract generated here valid for Ejari registration?", a: "Yes. We use the official DLD Unified Tenancy Contract v1.4 — the exact format required by RERA and accepted for Ejari registration. The PDF output is identical to the official DLD template." },
          { q: "How much does it cost?", a: "It is free. Traditional typing centres in Dubai charge AED 150–300 for the same document and require you to visit in person during business hours. We are online 24/7 at no cost." },
          { q: "How long does it take to generate a contract?", a: "Under 3 minutes. Upload your documents, our AI extracts the information automatically, you review and confirm the details, and download your PDF contract immediately." },
          { q: "What documents do I need?", a: "You need: the property Title Deed (from the landlord), both parties' Emirates IDs or passport copies, and the agreed rental terms (amount, duration, payment schedule). Our AI can extract details automatically from uploaded documents." },
          { q: "Is this RERA and DLD compliant?", a: "Yes. We use the official Dubai Land Department Unified Tenancy Contract template (version 1.4), which is fully compliant with RERA regulations and Dubai Law No. 26 of 2007 and its amendments." },
          { q: "Can both landlords and tenants use this?", a: "Yes. Our platform is used by landlords, tenants, and real estate agents across Dubai and the UAE. Anyone involved in a Dubai rental can generate a legally valid tenancy contract here." },
          { q: "What is the maximum security deposit allowed?", a: "By Dubai law, the security deposit cannot exceed 5% of the annual rent for residential properties, or 10% for commercial properties. We ensure your contract reflects legally compliant deposit amounts." },
          { q: "Can I add additional terms to the contract?", a: "Yes. The DLD Unified Tenancy Contract includes 8 fields for additional terms. You can add specific conditions agreed between landlord and tenant, such as maintenance responsibilities, pet policies, or parking terms." },
          { q: "Do I need to go to a typing centre after generating my contract?", a: "You still need to register the signed contract with Ejari (AED 220), which can be done at a typing centre, through the Dubai REST app, or online. But you skip the typing centre for the contract preparation itself, which saves AED 150–300." },
          { q: "What if I make a mistake on the contract?", a: "Simply regenerate the contract with the correct information. Since it is free, you can redo it as many times as you need — far faster and cheaper than going back to a typing centre." },
          { q: "Is this service available for all 7 Emirates?", a: "The DLD Unified Tenancy Contract format is specific to Dubai. For other Emirates (Abu Dhabi, Sharjah, Ajman, etc.), rental contracts may have different requirements. Our platform is optimised for Dubai properties." }
        ].map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
      
      {/* PREMIUM CTA */}
      <section className="relative max-w-[800px] mx-auto bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 lg:p-10 overflow-hidden mt-12 mb-12">
        {/* Subtle Background Pattern/Glow */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] -z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#0B132B] mb-3 leading-tight tracking-tight">
              Generate a Dubai Tenancy Contract Online in Minutes
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed">
              Create a legally compliant <strong>Dubai tenancy contract</strong> using the official <strong>DLD Unified Tenancy Contract (v1.4)</strong>. <strong>RERA-approved</strong>, <strong>Ejari-ready</strong>, and aligned with <strong>Dubai Law No. 26 of 2007</strong> for residential rental agreements in Dubai.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end shrink-0">
            <Link href="/generate" className="bg-[#0066FF] text-white px-6 py-4 rounded-xl text-[15px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-1.5 mt-3 text-[12px] text-gray-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> No signup required
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none"
      >
        <span className="font-bold text-[16px] text-[#0B132B] text-left pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[#6B7280] text-[15px] leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Settings, Shield, Edit3, Building, MapPin, Search, Users, Scale, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Dubai Tenancy Contract: The Complete 2026 Guide | TenancyPaper",
  description: "The complete 2026 guide to Dubai tenancy contracts: DLD Unified format, Ejari registration, RERA rent rules, deposit caps, renewal, and free online generation.",
};

export default function GuidePage() {
  const tableOfContents = [
    { id: "what-is", label: "What is the Dubai Tenancy Contract?" },
    { id: "create", label: "How to Create a Dubai Tenancy Contract" },
    { id: "documents", label: "Documents Required" },
    { id: "fields", label: "DLD Contract Fields Explained" },
    { id: "rent", label: "Rent and Deposit Rules" },
    { id: "ejari", label: "Ejari Registration" },
    { id: "renewal", label: "Tenancy Contract Renewal" },
    { id: "changes", label: "Amending Tenants" },
    { id: "rights", label: "Landlord & Tenant Rights" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      q: "How do I create a tenancy contract in Dubai online?",
      a: "Upload your title deed and Emirates ID at TenancyPaper. Our AI extracts the property and party details automatically, you review the auto-filled DLD form, add the rental terms, and download the official PDF — free, in under 3 minutes."
    },
    {
      q: "Is the online tenancy contract legally valid in Dubai?",
      a: "Yes. The output is the official DLD Unified Tenancy Contract v1.4 — identical to the typing-centre version. It's accepted by Ejari, the Dubai Rental Dispute Centre, DEWA, and all UAE government services."
    },
    {
      q: "What is the difference between a tenancy contract and Ejari?",
      a: "The tenancy contract is the agreement between landlord and tenant. Ejari is the government registration of that contract. Both are required — the contract itself doesn't fully protect you legally until it's registered on Ejari."
    },
    {
      q: "How much does a tenancy contract cost in Dubai?",
      a: "Free at TenancyPaper. Typing centres charge AED 150–300 for the same document. Ejari registration (the separate government registration step) costs AED 220."
    },
    {
      q: "What is the security deposit limit in Dubai?",
      a: "5% of annual rent for unfurnished properties, 10% for furnished. For an AED 100,000 unfurnished apartment, that's AED 5,000. Anything above these caps is unenforceable under Dubai law."
    },
    {
      q: "Can I cancel a tenancy contract early in Dubai?",
      a: "Yes, but with consequences. If your contract has an early-termination clause, the agreed penalty applies (typically 1–2 months rent). Without a clause, you may owe the remaining rent or negotiate with the landlord. Disputes go to the RERA Rental Dispute Centre."
    }
  ];

  return (
    <main className="min-h-screen bg-transparent font-sans pb-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1B2B5E] to-[#2C3E7A] text-center pt-24 pb-20 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-white/90 text-[12px] sm:text-[14px] font-bold tracking-[0.15em] uppercase mb-4">
            The Complete 2026 Guide
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
            Dubai Tenancy Contract
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Everything you need to know about creating, signing, registering, and renewing a tenancy contract in Dubai — DLD format, Ejari, RERA rent rules, deposit caps, and our free online generator.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/generate"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0066FF] rounded-xl font-bold text-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Generate Contract for FREE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="text-white/60 text-[13px] mt-4 font-medium">
            Under 3 minutes · DLD-compliant · Completely Free
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Table of Contents */}
        <aside className="lg:w-1/4 lg:sticky lg:top-24 h-max order-2 lg:order-1 hidden lg:block">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <h3 className="text-[13px] text-gray-400 font-bold tracking-widest uppercase mb-5">
              Contents
            </h3>
            <ul className="space-y-4">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-[14px] text-[#3D4A6E] font-medium hover:text-[#0066FF] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 order-1 lg:order-2">
          {/* Section 1 */}
          <section id="what-is" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                What is the Dubai Tenancy Contract?
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              A Dubai tenancy contract is the legally-required rental agreement between a landlord and tenant in Dubai. Every rental — apartment, villa, commercial — must use the official DLD Unified Tenancy Contract (currently version 1.4) issued by the Dubai Land Department. Custom-drafted contracts are not accepted by Ejari registration and have no legal standing in the Dubai Rental Dispute Centre.
            </p>
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-sm">
              <h4 className="text-[13px] text-gray-400 font-bold tracking-widest uppercase mb-3">Key Takeaway</h4>
              <p className="text-[15px] text-[#0B132B] font-medium">Always ensure you are signing the official DLD Unified format, not a randomly typed word document.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="create" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Settings className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                How to Create a Dubai Tenancy Contract
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              There are two paths: visit a typing centre and pay AED 150–300, or generate the same official DLD contract online for free in under 3 minutes using our platform. Online generation uses AI to read your title deed and Emirates ID, auto-filling every required field — eliminating the typo errors that cause Ejari rejection.
            </p>
            <div className="bg-[#0B132B] rounded-xl p-8 text-center text-white mt-8 shadow-lg">
              <h3 className="text-[20px] font-bold mb-3">Ready to generate yours?</h3>
              <p className="text-white/80 text-[15px] mb-6 max-w-lg mx-auto">Stop paying typing centres. Generate a flawless, Ejari-ready contract right now for absolutely zero cost.</p>
              <Link 
                href="/generate"
                className="inline-flex px-6 py-3 bg-[#0066FF] text-white rounded-lg font-bold text-[14px] hover:bg-[#0055FF] transition-colors"
              >
                Start Creating for FREE
              </Link>
            </div>
          </section>

          {/* Section 3 */}
          <section id="documents" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Search className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                Documents Required
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              To draft a flawless contract, you generally need three core documents. Having these ready will make the generation and signing process incredibly fast:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <Building className="w-8 h-8 text-[#0066FF] mb-3" />
                <h4 className="font-bold text-[#0B132B] mb-1">Title Deed</h4>
                <p className="text-[13px] text-gray-500">Provides Plot Number and exact ownership details.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <Shield className="w-8 h-8 text-[#0066FF] mb-3" />
                <h4 className="font-bold text-[#0B132B] mb-1">Emirates IDs</h4>
                <p className="text-[13px] text-gray-500">Needed for both the Landlord and the Tenant.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <MapPin className="w-8 h-8 text-[#0066FF] mb-3" />
                <h4 className="font-bold text-[#0B132B] mb-1">DEWA Bill</h4>
                <p className="text-[13px] text-gray-500">Provides the crucial 9-digit Premises Number.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="fields" className="mb-16 scroll-mt-24">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight mb-6">
              DLD Contract Fields Explained
            </h2>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              The DLD Unified Tenancy Contract has 6 main sections: Owner/Landlord, Tenant, Property Details, Contract Period, Financial Terms, and Additional Terms. The most error-prone fields are Plot Number, Property Number, and DEWA Premises Number — mismatches here are the number one cause of Ejari rejection.
            </p>
          </section>

          {/* Section 5 */}
          <section id="rent" className="mb-16 scroll-mt-24">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight mb-6">
              Rent and Deposit Rules
            </h2>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Annual rent in Dubai is typically paid via post-dated cheques (1, 2, 4, 6, or 12 cheques). Security deposits are strictly capped by law:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span className="text-[#3D4A6E]"><strong className="text-[#0B132B]">Unfurnished Properties:</strong> Capped at 5% of the annual rent.</span>
              </li>
              <li className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span className="text-[#3D4A6E]"><strong className="text-[#0B132B]">Furnished Properties:</strong> Capped at 10% of the annual rent.</span>
              </li>
            </ul>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E]">
              Anything above these caps is unenforceable. Rent increases at renewal are governed by the RERA Rent Index, which determines maximum permissible increases based on the neighborhood average.
            </p>
          </section>

          {/* Section 6 */}
          <section id="ejari" className="mb-16 scroll-mt-24">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight mb-6">
              Ejari Registration
            </h2>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Once both parties sign the contract, the tenant must register Ejari within 30 days. Without Ejari, you cannot connect DEWA water and electricity, renew your residence visa, enrol children in school, or take rental disputes to RERA.
            </p>
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <p className="text-[15px] text-[#0066FF] font-medium">
                <strong>Cost & Method:</strong> Online registration via the Dubai REST app or the DLD website costs approximately AED 220. It's fast and protects your legal rights.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="renewal" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Edit3 className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                Tenancy Contract Renewal
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Dubai requires a brand-new DLD contract for every renewal — there is no automatic extension or simple addendum to extend time. Furthermore, the landlord must give exactly <strong>90 days written notice</strong> prior to contract expiry for any rent increase or major changes. 
            </p>
          </section>

          {/* Section 8 */}
          <section id="changes" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                Adding, Transferring, or Amending Tenants
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Most changes mid-tenancy require a fresh DLD contract rather than a simple amendment. Adding a co-tenant, transferring to a new tenant, or substantial term changes typically need new Ejari registration too. It is highly recommended to finalize all terms before initial signing to avoid early exit penalties.
            </p>
          </section>

          {/* Section 9 */}
          <section id="rights" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                Tenant and Landlord Rights
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Dubai Law No. 26 of 2007 (and Law No. 33 of 2008) regulates the landlord-tenant relationship. Tenants have rights to 90-day rent-increase notice, 12-month eviction notice for personal use, deposit refund within 30 days, and dispute filing at the RERA Rental Dispute Centre.
            </p>
            <p className="text-[16px] leading-relaxed text-[#3D4A6E] mb-6">
              Landlords can evict for non-payment with 30 days notice and have rights to RERA-compliant rent increases depending on the current market average of the neighborhood.
            </p>
          </section>

          {/* Section 10: FAQs */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 pt-8 border-t border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0066FF]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0B132B] leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-[18px] font-bold text-[#0B132B] mb-3">{faq.q}</h3>
                  <p className="text-[15px] leading-relaxed text-[#3D4A6E]">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

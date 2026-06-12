import Link from "next/link";
import { CloudUpload, Sparkles, ShieldCheck, Download, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: 1,
      icon: CloudUpload,
      title: "Upload Documents",
      desc: "Securely upload the necessary property documents. Our system accepts the property Title Deed and the Emirates IDs or passports of both the landlord and the tenant.",
      details: [
        "Drag & drop interface for quick uploads",
        "Supports PDF, JPG, and PNG formats",
        "Bank-grade encryption ensures your files are safe"
      ]
    },
    {
      num: 2,
      icon: Sparkles,
      title: "AI Extraction",
      desc: "Our advanced OCR AI instantly scans your uploaded documents to extract names, property details, and identification numbers, filling out the contract for you.",
      details: [
        "Eliminates manual typing errors",
        "Processes data in under 5 seconds",
        "Documents are deleted immediately after extraction"
      ]
    },
    {
      num: 3,
      icon: ShieldCheck,
      title: "Review Details",
      desc: "Verify the auto-filled information. Here you can also set the rent amount, payment schedule, and add any custom clauses or conditions to the agreement.",
      details: [
        "Add up to 8 custom conditions",
        "Specify cheque dates and amounts",
        "Compliant with Dubai Law No. 26 of 2007"
      ]
    },
    {
      num: 4,
      icon: Download,
      title: "Download Contract",
      desc: "Instantly generate your official DLD Unified Tenancy Contract (v1.4) as a print-ready PDF. It is ready to be signed and submitted for Ejari registration.",
      details: [
        "100% RERA accepted format",
        "Clean, professional PDF layout",
        "Download and print instantly without watermarks"
      ]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-6">
          How TenancyPaper Works
        </h1>
        <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed">
          Generate your official Dubai tenancy contract in 4 simple steps. We handle the heavy lifting so you don't have to visit a typing centre.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-12 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent mb-20">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={step.num} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-white bg-blue-50 shadow-[0_0_0_4px_rgba(0,102,255,0.05)] absolute left-0 md:left-1/2 md:-translate-x-1/2 shrink-0 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0066FF]">
                <step.icon className="w-10 h-10 text-[#0066FF] group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-7rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="text-[14px] font-black text-[#0066FF] tracking-wider uppercase mb-2">Step {step.num}</div>
                <h3 className="text-[24px] font-bold text-[#0B132B] mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {step.desc}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Link href="/generate" className="inline-flex bg-[#0066FF] text-white px-10 py-5 rounded-xl text-[18px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] items-center justify-center gap-3 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
          Start Your Contract Now <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
}

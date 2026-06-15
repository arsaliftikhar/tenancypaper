"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ShieldCheck, Zap, Lock, CloudUpload, Globe, FileText, Download, ArrowRight, CheckCircle2, ChevronDown, Sparkles, Pencil } from "lucide-react";
import GenerateWizard from "../components/GenerateWizard";

export default function Home() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pb-20 space-y-24 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 pb-4 lg:pb-12">

        {/* Subtle dot pattern background top right */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}></div>

        <div className="text-center relative flex-1 w-full z-10 max-w-[800px] mx-auto">
          <div className="w-full">
            <div className="text-left w-full">
              <GenerateWizard />
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 mt-8 sm:mt-16 mb-4 rounded-full bg-[#E5F0FF] text-[#0066FF] border border-[#CCE0FF] text-[10px] sm:text-[13px] font-bold tracking-wide shadow-sm whitespace-nowrap">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /> 100% Free <span className="hidden sm:inline">for Use </span>• No Sign Up<span className="hidden sm:inline"> Required</span>
          </div>

          <h1 className="text-[28px] sm:text-[48px] lg:text-[54px] font-bold text-[#0B132B] leading-[1.1] mb-6 tracking-tight">
            Create Your <span className="text-[#0066FF]">Tenancy<br className="hidden sm:block" /> Agreement</span> in Minutes
          </h1>

          <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-[600px] text-center mx-auto">
            Create a legally compliant <strong>Dubai tenancy contract</strong> using the official <strong>DLD Unified Tenancy Contract (v1.4)</strong>. <strong>RERA-approved</strong>, <strong>Ejari-ready</strong>, and aligned with <strong>Dubai Law No. 26 of 2007</strong> for residential rental agreements in Dubai.
          </p>

          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 w-full">
              <span className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" /> RERA Compliant
              </span>
              <span className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" /> DLD Approved
              </span>
              <span className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" /> AI-Powered
              </span>
              <span className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                <FileText className="w-3.5 h-3.5 text-[#0066FF]" /> Ejari Ready
              </span>
              <span className="shrink-0 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" /> Encrypted
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="pt-6 pb-4 px-4 scroll-mt-24 !mt-0 lg:!mt-8" id="how-it-works">
        <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0B132B] text-center mb-12 lg:mb-16 tracking-tight">How It Works</h2>

        <div className="relative grid grid-cols-2 md:flex md:flex-row justify-between items-start max-w-[900px] mx-auto gap-y-10 gap-x-4 md:gap-y-0 md:gap-x-0">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] -z-10">
            <svg width="100%" height="2" className="overflow-visible">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animate-move-line"
              />
            </svg>
          </div>

          {/* Steps */}
          {[
            { num: 1, icon: CloudUpload, title: "Upload Documents", desc: "Upload your Title Deed and IDs" },
            { num: 2, icon: Sparkles, title: "AI Extraction", desc: "We automatically fill your details" },
            { num: 3, icon: ShieldCheck, title: "Review Details", desc: "Verify terms and add conditions" },
            { num: 4, icon: Download, title: "Download Contract", desc: "Get your official DLD format PDF" },
          ].map((step) => (
            <div key={step.num} className="group flex flex-col items-center text-center relative w-full md:w-1/4 cursor-pointer">
              <div className="relative mb-4 sm:mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50 mx-auto transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,102,255,0.12)] group-hover:border-blue-100 group-hover:bg-[#F8FAFC]">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#3B82F6] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -left-1 w-7 h-7 sm:w-8 sm:h-8 bg-[#0066FF] rounded-full flex items-center justify-center text-white text-[12px] sm:text-[13px] font-bold shadow-md border-2 border-white transition-transform duration-500 group-hover:scale-110">
                  {step.num}
                </div>
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0B132B] mb-1.5 sm:mb-2 transition-colors duration-300 group-hover:text-[#0066FF]">{step.title}</h3>
              <p className="text-[#6B7280] text-[12px] sm:text-[14px] leading-relaxed max-w-[130px] sm:max-w-[150px] mx-auto transition-colors duration-300 group-hover:text-gray-900">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>






    </main>
  );
}


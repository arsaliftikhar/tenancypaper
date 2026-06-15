"use client";

import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed">
          Have questions about your tenancy contract or need help with our platform? Our support team is here to help.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* Contact Info */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-start h-full">
            <div className="w-16 h-16 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mb-8">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-bold text-[#0B132B] mb-3">Send us a Message</h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
              We typically respond within 24 hours during regular business days. For urgent inquiries, please mark your message subject as URGENT.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 relative overflow-hidden">
            
            {submitStatus === "success" ? (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0B132B] mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">We've received your message and will get back to you shortly.</p>
                <button type="button" onClick={() => setSubmitStatus(null)} className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                  Send another message
                </button>
              </div>
            ) : null}

            {submitStatus === "error" && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 shrink-0" />
                There was a problem sending your message. Please try again.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-700">Full Name</label>
                <input required name="fullName" type="text" autoComplete="off" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-700">Email Address</label>
                <input required name="email" type="email" autoComplete="off" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-gray-700">Subject</label>
              <input required name="subject" type="text" autoComplete="off" placeholder="How can we help you?" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-gray-700">Message</label>
              <textarea required name="message" rows="5" placeholder="Write your message here..." className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none bg-gray-50/50 focus:bg-white"></textarea>
            </div>

            <button disabled={isSubmitting} type="submit" className="bg-[#0066FF] text-white px-8 py-4 rounded-xl text-[16px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 hover:bg-blue-600 disabled:opacity-70 disabled:hover:bg-[#0066FF] transition-all duration-300 mt-4">
              {isSubmitting ? (
                <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}

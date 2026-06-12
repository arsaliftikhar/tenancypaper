import { Mail, Send } from "lucide-react";

export default function ContactPage() {
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
            <h3 className="text-[24px] font-bold text-[#0B132B] mb-3">Email Us</h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
              We typically respond within 24 hours during regular business days. For urgent inquiries, please mark your email subject as URGENT.
            </p>
            <div className="mt-auto">
              <span className="block text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2">Direct Email</span>
              <a href="mailto:hello@tenancypaper.com" className="text-[#0066FF] text-[20px] font-bold hover:underline">
                hello@tenancypaper.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form className="bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-700">Full Name</label>
                <input type="text" autoComplete="off" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-700">Email Address</label>
                <input type="email" autoComplete="off" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-gray-700">Subject</label>
              <input type="text" autoComplete="off" placeholder="How can we help you?" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all bg-gray-50/50 focus:bg-white" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-gray-700">Message</label>
              <textarea rows="5" placeholder="Write your message here..." className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none bg-gray-50/50 focus:bg-white"></textarea>
            </div>

            <button type="button" className="bg-[#0066FF] text-white px-8 py-4 rounded-xl text-[16px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 mt-4">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}

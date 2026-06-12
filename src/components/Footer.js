import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center text-center">
        
        <Link href="/" className="mb-6">
          <img src="/logo-horizontal.png" alt="TenancyContract Logo" className="h-10 sm:h-12 w-auto object-contain" />
        </Link>
        
        <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-[400px]">
          The fastest, most secure way to generate legally compliant Dubai tenancy agreements in minutes. No signup required.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12">
          <Link href="/about" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">About Us</Link>
          <Link href="/generate" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Generate Contract</Link>
          <Link href="/blogs" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Blogs</Link>
          <Link href="/terms" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Terms & Services</Link>
          <Link href="/privacy" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Cookies Policy</Link>
          <Link href="/contact" className="text-[14px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">Contact Us</Link>
        </div>

        <div className="w-full pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-[14px] font-medium">
            © {new Date().getFullYear()} TenancyPaper. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Safe area spacing for mobile bottom bar */}
      <div className="h-20 md:h-0"></div>
    </footer>
  );
}

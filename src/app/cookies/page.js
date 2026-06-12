export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-4">
          Cookies Policy
        </h1>
        <p className="text-gray-500 text-[16px]">Last updated: June 12, 2026</p>
      </div>

      <div className="prose prose-blue prose-lg max-w-none text-gray-600 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">What Are Cookies?</h2>
        <p className="mb-6">
          Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently and provide useful information to the website owners.
        </p>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">How We Use Cookies</h2>
        <p className="mb-6">
          At TenancyPaper, we use cookies primarily to enhance your experience. Because our service does not require an account, we use minimal cookies, specifically for:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., maintaining your session while you fill out the contract form).</li>
          <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website anonymously (e.g., counting visits and traffic sources).</li>
        </ul>

        <h2 className="text-[20px] font-bold text-[#0B132B] mb-4">Managing Cookies</h2>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, you may not be able to use the contract generation features of our site.
        </p>
      </div>
    </main>
  );
}

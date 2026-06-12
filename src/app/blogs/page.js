import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

// Helper to format dates
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));
}

export default async function BlogsPage() {
  await dbConnect();

  // Fetch posts from MongoDB
  let posts = await Blog.find({}).sort({ createdAt: -1 }).lean();

  // Auto-seed dummy data if the database is entirely empty so the UI doesn't look broken
  if (posts.length === 0) {
    const dummyPosts = [
      { 
        title: "Everything You Need to Know About Ejari Registration in 2026", 
        slug: "everything-you-need-to-know-about-ejari-registration-in-2026", 
        category: "Guides",
        excerpt: "Learn the essential steps and documentation required to successfully navigate Dubai's real estate regulations...",
        content: "<p>Understanding the regulations surrounding Dubai real estate is critical. Whether you are dealing with Ejari registration, RERA guidelines, or the DLD Unified Tenancy Contract format, staying informed ensures you remain legally compliant and avoid unexpected fees.</p>"
      },
      { 
        title: "Understanding RERA's Rental Increase Calculator", 
        slug: "understanding-reras-rental-increase-calculator", 
        category: "Legal",
        excerpt: "Learn how the RERA rental calculator determines if your landlord can legally increase your rent.",
        content: "<p>The RERA rental calculator is the definitive tool used in Dubai to determine rent increases...</p>"
      },
      { 
        title: "Top 5 Mistakes Landlords Make in Dubai Tenancy Contracts", 
        slug: "top-5-mistakes-landlords-make-in-dubai-tenancy-contracts", 
        category: "Landlord Tips",
        excerpt: "Avoid these common pitfalls that could cost you money and cause legal headaches with tenants.",
        content: "<p>Many landlords rush the contract process and fail to include necessary addendums...</p>"
      },
      { 
        title: "How to Secure Your Deposit When Moving Out in Dubai", 
        slug: "how-to-secure-your-deposit-when-moving-out-in-dubai", 
        category: "Tenant Tips",
        excerpt: "A step-by-step guide to ensuring you get your full security deposit back from your landlord.",
        content: "<p>Getting your deposit back starts on day one of moving in. Always take photos...</p>"
      },
    ];
    await Blog.insertMany(dummyPosts);
    posts = await Blog.find({}).sort({ createdAt: -1 }).lean();
  }

  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#0B132B] tracking-tight mb-6">
          Real Estate Insights
        </h1>
        <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed mb-8">
          The latest guides, tips, and legal updates for landlords and tenants in Dubai.
        </p>
        <Link 
          href="/dubai-tenancy-contract-guide"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0044FF] via-[#0066FF] to-[#0044FF] bg-[length:200%_auto] hover:bg-right text-white rounded-xl font-bold text-[15px] shadow-[0_8px_30px_rgba(0,102,255,0.35)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,102,255,0.55)] transition-all duration-500"
        >
          View Guide for 2026 <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post._id.toString()} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group cursor-pointer hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-[13px] text-gray-400 font-medium">{formatDate(post.createdAt || new Date())}</span>
              </div>
              <h2 className="text-[20px] font-bold text-[#0B132B] leading-tight mb-4 group-hover:text-[#0066FF] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>
            <Link href={`/blogs/${post.slug}`} className="flex items-center text-[#0066FF] font-bold text-[14px] group-hover:gap-2 transition-all">
              Read Article <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

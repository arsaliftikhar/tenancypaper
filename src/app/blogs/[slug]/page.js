import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));
}

export default async function BlogPost({ params }) {
  await dbConnect();
  
  const resolvedParams = await params;
  const post = await Blog.findOne({ slug: resolvedParams.slug }).lean();

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto w-full min-h-screen px-5 pt-16 pb-24 text-center">
        <h1 className="text-[36px] font-extrabold text-[#0B132B] mb-6">Blog Post Not Found</h1>
        <p className="text-gray-500 mb-10">We couldn't find the article you're looking for.</p>
        <Link href="/blogs" className="inline-flex bg-[#0066FF] text-white px-8 py-4 rounded-xl text-[16px] font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] hover:bg-blue-600 transition-all">
          Return to Blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto w-full min-h-screen px-5 pt-16 pb-24">
      <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0066FF] transition-colors font-bold mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to Blogs
      </Link>

      <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h1 className="text-[32px] sm:text-[40px] font-extrabold text-[#0B132B] tracking-tight mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100">
          <span className="text-[12px] font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-[13px] text-gray-400 font-medium">Published on {formatDate(post.createdAt || new Date())}</span>
        </div>

        <div 
          className="prose prose-blue prose-lg max-w-none text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}

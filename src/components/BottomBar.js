import Link from "next/link";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-[20px] border-t border-gray-200/50 p-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-[560px] mx-auto flex gap-2">
        <Link 
          href="/generate" 
          className="flex-1 py-3.5 px-4 text-[15px] font-bold text-white text-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-[0_6px_20px_rgba(79,70,229,0.28)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
        >
          Get Started →
        </Link>
      </div>
    </div>
  );
}

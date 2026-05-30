import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-md flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-semibold text-gray-800">WriteBoom</span>
          <span className="text-gray-400 text-sm">· 爆款文案 AI 生成器</span>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} WriteBoom. AI 驱动的社交媒体文案工具.
        </p>
      </div>
    </footer>
  );
}

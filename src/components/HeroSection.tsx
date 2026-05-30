import { Sparkles, Zap, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 text-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-sm text-orange-600 mb-6">
          <Sparkles className="w-4 h-4" />
          AI 驱动 · 爆款文案一键生成
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          社交媒体
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> 爆款文案 </span>
          生成器
        </h1>

        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          输入主题，AI 秒出小红书、抖音、微博、B站爆款文案。<br />
          不用憋灵感，10秒搞定一天的内容。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#tool"
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all text-lg"
          >
            免费开始创作 →
          </a>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4" /> 10秒出稿
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> 多平台适配
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" /> 爆款模板
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, RefreshCw } from "lucide-react";
import { generate, type Platform } from "@/lib/generator";

const platformList: { key: Platform; name: string; icon: string }[] = [
  { key: "xiaohongshu", name: "小红书", icon: "📕" },
  { key: "douyin", name: "抖音", icon: "🎵" },
  { key: "weibo", name: "微博", icon: "🔥" },
  { key: "bilibili", name: "B站", icon: "📺" },
];

const sampleTopics = [
  "健身减脂",
  "独居好物分享",
  "职场新人避坑",
  "平价护肤推荐",
  "考研上岸经验",
  "穿搭ootd",
  "美食探店",
  "副业赚钱",
];

export default function WriteBoomTool() {
  const [platform, setPlatform] = useState<Platform>("xiaohongshu");
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleGenerate = () => {
    if (!topic.trim()) return;

    setLoading(true);
    // 模拟短暂加载效果
    setTimeout(() => {
      const content = generate(platform, topic.trim());
      setResult(content);
      setGeneratedCount((prev) => prev + 1);
      setLoading(false);
    }, 800);
  };

  const handleRegenerate = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const content = generate(platform, topic.trim());
      setResult(content);
      setGeneratedCount((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = result;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="tool" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">开始创作</h2>
        <p className="text-center text-gray-500 mb-8">
          选择平台，输入主题，秒出爆款文案
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/50 p-6 md:p-8">
          {/* 平台选择 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              ① 选择平台
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {platformList.map((p) => (
                <button
                  key={p.key}
                  onClick={() => {
                    setPlatform(p.key);
                    setResult("");
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all text-sm font-medium cursor-pointer ${
                    platform === p.key
                      ? "border-orange-400 bg-orange-50 text-orange-600 shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span className="text-lg">{p.icon}</span>
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* 主题输入 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              ② 输入你的主题
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="比如：减脂期便当分享 / 28岁转行程序员 / 大理旅行攻略..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none resize-none text-gray-800 placeholder-gray-400"
            />
            {/* 快捷主题 */}
            <div className="flex flex-wrap gap-2 mt-3">
              {sampleTopics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 生成按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="flex-1 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              {result ? "重新生成" : "生成爆款文案"}
            </button>
            {result && (
              <button
                onClick={handleRegenerate}
                disabled={loading}
                className="py-3.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50"
                title="换一版"
              >
                <RefreshCw className={`w-5 h-5 text-gray-500 ${loading ? "animate-spin" : ""}`} />
              </button>
            )}
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            已生成 {generatedCount} 次 · 免费无限次使用
          </p>

          {/* 结果展示 */}
          {result && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-lg">
                    {platformList.find((p) => p.key === platform)?.icon}
                  </span>
                  {platformList.find((p) => p.key === platform)?.name} 爆款文案
                </h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" /> 已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> 复制全部
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-gray-700 whitespace-pre-wrap leading-relaxed border border-gray-100 text-sm">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

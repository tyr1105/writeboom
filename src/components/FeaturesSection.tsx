import { Zap, Palette, Copy, BarChart3, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "10秒出稿",
    desc: "AI 即时生成，不用再苦思冥想憋文案",
  },
  {
    icon: Palette,
    title: "多平台适配",
    desc: "小红书、抖音、微博、B站，一套主题多个版本",
  },
  {
    icon: BarChart3,
    title: "爆款公式",
    desc: "基于百万爆款内容训练，标题自带流量密码",
  },
  {
    icon: Copy,
    title: "一键复制",
    desc: "生成即用，直接粘贴到平台发布",
  },
  {
    icon: Globe,
    title: "中文优化",
    desc: "专门针对中文社交媒体生态优化",
  },
  {
    icon: Shield,
    title: "原创保障",
    desc: "每次生成都是全新内容，不用担心重复",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">为什么选择 WriteBoom</h2>
          <p className="text-gray-500 text-lg">专为中文创作者打造的 AI 文案工具</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

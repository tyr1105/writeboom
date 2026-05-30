import { Check } from "lucide-react";

const plans = [
  {
    name: "免费版",
    price: "0",
    period: "永久免费",
    desc: "日常创作够用",
    features: [
      "每天5次文案生成",
      "支持4大平台",
      "一键复制",
      "快捷主题推荐",
    ],
    cta: "立即使用",
    highlighted: false,
  },
  {
    name: "Pro 专业版",
    price: "¥19.9",
    period: "/月",
    desc: "重度创作者首选",
    features: [
      "无限次文案生成",
      "支持所有平台",
      "批量生成（一次5条）",
      "自定义风格语气",
      "历史记录保存",
      "优先响应速度",
      "专属客服支持",
    ],
    cta: "即将上线",
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">简单定价</h2>
          <p className="text-gray-500 text-lg">免费版就能满足大部分需求</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all ${
                plan.highlighted
                  ? "border-orange-400 bg-orange-50/50 shadow-xl shadow-orange-100/50 relative"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-medium">
                  推荐
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

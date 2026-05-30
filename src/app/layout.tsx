import type { Metadata } from "next";
import "./globals.css";
import { ToolNetworkFooter } from "@/components/ToolNetworkFooter";

export const metadata: Metadata = {
  title: "WriteBoom - 社交媒体爆款文案AI生成器 | 小红书·抖音·微博·B站",
  description:
    "AI驱动的社交媒体文案生成工具。一键生成小红书、抖音、微博、B站爆款文案，10秒搞定一天的内容。免费无限使用！",
  keywords:
    "AI文案生成,小红书文案,抖音标题,微博文案,B站标题,爆款文案,社交媒体营销,内容创作工具,文案写作,AI写作",
  openGraph: {
    title: "WriteBoom - 社交媒体爆款文案AI生成器",
    description: "输入主题，AI秒出小红书/抖音/微博/B站爆款文案。免费无限使用！",
    url: "https://tyr1105.github.io/writeboom/",
    siteName: "WriteBoom",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteBoom - 社交媒体爆款文案AI生成器",
    description: "输入主题，AI秒出小红书/抖音/微博/B站爆款文案。免费无限使用！",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://tyr1105.github.io/writeboom/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WriteBoom",
              description: "AI驱动的社交媒体爆款文案生成工具",
              url: "https://tyr1105.github.io/writeboom/",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CNY",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1 }}>{children}</div>
        <ToolNetworkFooter />
      </body>
    </html>
  );
}

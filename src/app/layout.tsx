import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WriteBoom - 社交媒体爆款文案AI生成器 | 小红书·抖音·微博·B站",
  description:
    "AI驱动的社交媒体文案生成工具。一键生成小红书、抖音、微博、B站爆款文案，10秒搞定一天的内容。",
  keywords:
    "AI文案生成,小红书文案,抖音标题,微博文案,B站标题,爆款文案,社交媒体营销,内容创作",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

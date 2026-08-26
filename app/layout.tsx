import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_SC({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "700"] });
const serif = Noto_Serif_SC({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "700", "900"] });

export const metadata: Metadata = {
  title: "未完手记｜记录思考与生活的纹理",
  description: "一个关于创造、技术与日常观察的中文个人博客。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}

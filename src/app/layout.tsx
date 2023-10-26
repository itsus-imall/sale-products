import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '아이몰 할인관',
  description: '아이몰 상품을 할인된 가격에 만나보세요!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}

"use client";

import {
  Header,
  Footer,
  Info,
  Getting,
  Insight,
  MapWord,
  New,
  Samantha,
} from "@/components/pages/home";

// trang chủ

export default function Home() {
  return (
    <main className="relative max-w-[1440px] w-full m-auto">
      <div className="image-layout">
        {/* header */}
        <Header />
        <Info />
        <Getting />
        <New />
        <MapWord />
        <Insight />
        <Samantha />
        {/* footer */}
        <Footer />
      </div>
    </main>
  );
}

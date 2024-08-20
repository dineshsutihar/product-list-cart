
// import data from "@/public/data.json";

import { Card } from "@/components/Card";

export default function Home() {
  // console.log(data);
  return (
    <main className="lg:w-[1440px] h-screen m-auto grid grid-cols-3 gap-4">
      <section className="col-span-3 border-4 px-2">
        <h1 className="text-black text-3xl font-bold mt-5 ml-6">Desserts</h1>
        <div className="grid grid-cols-3 grid-rows-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      {/* <section className="bg-red-500">
        <h1 className="text-black">Drinks</h1>
      </section> */}
    </main>
  );
}

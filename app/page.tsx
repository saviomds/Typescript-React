import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 font-bold" >
      <h1 className="text-5xl">dsCrowdy</h1><br />
      <button className="bg-slate-950 text-white p-3 rounded-full hover:bg-white hover:text-black border border-black border-solid transition ease-in duration-300">
        <Link href="dash/welcome">Get Started</Link>
      </button>
    </main>
  );
}

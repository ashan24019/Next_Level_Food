import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Share Page</Link></p>
      <p><Link href="/community">community</Link></p>
      <p><Link href="/meals/share/">Share Page</Link></p>
    </main>
  );
}

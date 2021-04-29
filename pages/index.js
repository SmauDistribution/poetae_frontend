import Head from "next/head";
import Navbar from "../components/Navbar";

//TODO: Devi migliorare timeline icon perchè non è coerente alle altre due icone

export default function Home() {
  return (
    <main
      className="bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: "url('img/background.jpg')" }}
    >
      <Navbar />
    </main>
  );
}

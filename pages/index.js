import Navbar from "../components/Navbar";

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

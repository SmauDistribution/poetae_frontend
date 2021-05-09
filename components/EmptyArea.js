import Link from "next/link";

const EmptyArea = ({ message }) => {
  return (
    <div className="mt-16 flex flex-col justify-center items-center border-4 border-dashed border-custom-darkgray h-96 rounded-lg">
      <span className="text-2xl font-serif">{message}</span>
      <Link href="/">
        <a className="poeate-link">Torna indietro</a>
      </Link>
    </div>
  );
};

export default EmptyArea;

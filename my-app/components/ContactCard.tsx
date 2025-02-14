import Image from "next/image";

export default function ContactCard() {
  return(
  <div className="mt-16">
    <div className="rounded-3xl border border-gray-200 p-7 sm:flex sm:p-8">
      <div className="flex flex-1 flex-col items-start gap-8 leading-relaxed">
        <h2>
          <p>パソコンやスマホのお困りごと、相談してみませんか？</p>
        </h2>
        <a 
          href="https://forms.gle/kqDmMQxbXq7x1VTd9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center duration-500 leading-4 border border-gray-300 rounded-full disabled:border-gray-200 disabled:opacity-60 hover:bg-gray-100 hover:border-gray-400 hover:disabled:bg-white py-4 px-6 tracking-wider"
          >
            相談してみる
          </button>
        </a>
      </div>
      <div className="mt-4 mb-2 flex justify-end sm:mt-6">
        <Image
          src="/images/home/home2.png"
          alt="Home"
          width={200}
          height={200}
        />
      </div>
    </div>
  </div>
  );
}
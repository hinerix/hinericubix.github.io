import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-amber-50">
			<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md ">
				<section className="pt-24">
					<header className="flex flex-col items-center">
						<Image
							src="/images/home/home.png"
							alt="Home"
							width={200}
							height={200}
							className="pt-5"
						/>
						<h1 className="mt-5 text-xl">ひねりキュービックス</h1>
					</header>
					<div className="mt-16 flex flex-col gap-7 leading-looser tracking-wide">
						<p>
							ひねりキュービックスは、パソコンやスマホの「ちょっとした困った」を気軽に相談できる、お手伝いサービスです。
						</p>
						<p>
							「調べてもさっぱり分からない」「どうも便利に使いこなせない」は誰にでもあります。
						</p>
						<p>
							でも、相談できる人が身の回りにいる人は多くありません。そんな方々のための拠り所です。
						</p>
						<p>
							<Link
								href="/about"
								className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
							>
								できることを見る →
							</Link>
						</p>
					</div>
					<div className="mt-16">
						<div className="p-7 sm:flex sm:p-8">
							<div className="flex flex-1 flex-col items-start gap-4 leading-relaxed">
								<h2>
									<p>パソコンやスマホのお困りごと、相談してみませんか？</p>
								</h2>
								<button
									type="button"
									className="inline-flex items-center justify-center duration-500 leading-[1.1] border border-gray-300 rounded-full disabled:border-gray-200 disabled:opacity-60 hover:bg-gray-100 hover:border-gray-400 hover:disabled:bg-white py-3.5 px-6 tracking-wider"
								>
									相談してみる
								</button>
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

					{/* Footer */}
					<Footer />
				</section>
			</div>
		</div>
	);
}

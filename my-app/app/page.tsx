import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen">
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
							ひねりキュービックスは、パソコンやスマホの「ちょっと困った」を気軽に相談できる、お手伝いサービスです。
						</p>
						<p>
							「調べてもさっぱり分からない」「便利に使いこなせない」は誰にでもあります。
							<br />
							でも、相談できる人が身の回りにいる人は多くありません。
						</p>
						<p>そんな方々のための拠り所です。</p>
						<p>
							<Link
								href="/about"
								className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
							>
								できることを見る →
							</Link>
						</p>
					</div>
					<ContactCard />
					<div className="mt-16">
						<p className="mt-20 mb-10 flex items-center justify-center text-sm text-gray-600">
							&copy; 2025 Hinericubix All rights reserved.
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

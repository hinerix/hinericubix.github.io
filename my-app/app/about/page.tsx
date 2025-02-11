import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function About() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="min-h-screen">
				<section className="mt-16 pb-32">
					<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
						<header className="flex flex-col items-center">
							<h1 className="text-xl">このサービスについて</h1>
							<Image
								src="/images/about/about.png"
								alt="About"
								width={200}
								height={200}
								className="pt-5"
							/>
						</header>
						<div className="mt-6 text-base leading-looser">
							<p>ある日、母にパソコンの使い方を教えたことがきっかけでした。</p>
							<p className="mt-4">
								「世の中にはきっと、母のように使い方が分からずに困っている人がたくさん居るかもしれない。」
							</p>
							<p className="mt-4">そんな思いから、このサービスを作りました。</p>
							<p className="mt-4">
								私はコールセンターで電話やメールでトラブルのサポートを3年間、ITヘルプデスクとして対面でのトラブル対応を3年間経験してきました。
							</p>
							<p className="mt-4">
								この経験を活かし、皆さまのお困りごとを全力でサポートいたします。
							</p>
							<div className="flex justify-center">
								<Image
									src="/images/about/about2.png"
									alt="About"
									width={200}
									height={200}
									className="pt-5"
								/>
							</div>
							<h2 className="text-xl">サービスの内容</h2>
							<h3 className="text-lg mt-6">ITツールの使い方サポート</h3>
							<p className="mt-4">
								パソコンやスマートフォン、タブレットなどのITツールの使い方をサポートいたします。
							</p>
							<h3 className="text-lg mt-6">Webサイト、LP制作</h3>
							<p className="mt-4">
								Webサイトやランディングページの制作を行います。
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

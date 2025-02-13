import Header from "@/components/layouts/Header";
import { BarChart3, CheckCircle2, ChevronRight, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
						<div className="mt-6 text-base leading-loose">
							<p>ある日、母にパソコンの使い方を教えたことがきっかけでした。</p>
							<p className="mt-4">
								「世の中にはきっと、母のように使い方が分からずに困っている人がたくさん居るかもしれない。」
							</p>
							<p className="mt-4">そんな思いから、このサービスを作りました。</p>
							<p className="mt-4">
								私は過去に勤めていた会社で、IT機器のトラブルサポートを約7年経験してきました。
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
							<h3 className="text-lg mt-6">パソコンやスマホの使い方サポート</h3>
							<p className="mt-4">
								パソコンやスマートフォン、タブレットなどのITツールの使い方をサポートいたします。
							</p>
							<h3 className="text-lg mt-6">Webサイト、LP制作</h3>
							<p className="mt-4">
								Webサイトやランディングページの制作を行います。
							</p>
						</div>
					</div>
					{/* Hero Section */}
					<section className="pt-32 pb-24 bg-background">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
								<div className="mb-12 lg:mb-0">
									<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
										ITの「感動」を
										<br />
										あなたに。
									</h1>
									<p className="text-xl text-muted-foreground mb-8">
										パソコンが苦手な方でも大丈夫。
										<br />
										一緒に仕事を効率化しませんか？
									</p>
									<div className="flex space-x-4">
										<button type="button">
											Get Started
											<ChevronRight className="ml-2 h-4 w-4" />
										</button>
										<button type="button">
											Learn More
										</button>
									</div>
								</div>
								<div className="relative h-[400px] rounded-lg overflow-hidden">
									<Image
										src="/images/home/home.png"
										alt="Enterprise Solutions"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>
						</div>
					</section>

					{/* Features Section */}
					<section id="services" className="py-24 bg-muted/50">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-16">
								<h2 className="text-3xl font-bold mb-4">Our Services</h2>
								<p className="text-xl text-muted-foreground">
									ひねりキュービックスは小さなビジネスの「不便」をITで解消するお手伝いをしているサービスです。
								</p>
							</div>
							<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
								{[
									{
										id: "it-support",
										icon: <Globe2 className="h-8 w-8" />,
										title: "ITツールの使い方サポート",
										description:
											"日常で利用されているExcelやGoogleスプレッドシートの上手な使い方をサポートします。これから使用を検討している方も丁寧にサポートいたします。",
									},
									{
										id: "web-development",
										icon: <BarChart3 className="h-8 w-8" />,
										title: "Webサイト、LP制作",
										description:
											"お店や商品の魅力がそのまま伝わる、シンプルなデザインが得意です。構成やデザインをどうして良いか分からない方にも、考え方や知識を共有、打ち合わせをした上で制作します。",
									},
								].map((feature) => (
									<div
										key={feature.id}
										className="p-6 hover:shadow-lg transition-shadow"
									>
										<div className="mb-4">{feature.icon}</div>
										<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
										<p className="text-muted-foreground">{feature.description}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Case Studies Section */}
					<section id="case-studies" className="py-24 bg-background">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-16">
								<h2 className="text-3xl font-bold mb-4">Case Studies</h2>
								<p className="text-xl text-muted-foreground">
									サービス提供事例をご紹介します。
								</p>
							</div>
							<div className="grid md:grid-cols-2 gap-8">
								{[
									{
										id: "byeWork",
										company: "退職代行サービス Byeバイト",
										image: "/images/caseStudies/Byeバイト.png",
										title: "LP制作",
										description: "200%のユーザーの増加に貢献しました。",
										link: "/case-study/byework",
									},
									{
										id: "coming-soon",
										company: "",
										image: "/images/home/coming-soon.png",
										title: "Coming Soon",
										description: "",
										link: "",
									},
								].map((study) => (
									<div key={study.id} className="overflow-hidden">
										<div className="relative h-72">
											<Image
												src={study.image}
												alt={study.title}
												fill
												className="object-cover"
											/>
										</div>
										<div className="p-6">
											<div className="text-sm text-muted-foreground mb-2">
												{study.company}
											</div>
											<h3 className="text-xl font-semibold mb-2">{study.title}</h3>
											<p className="text-muted-foreground mb-4">
												{study.description}
											</p>
											<Link href={study.link}>
												<button type="button">Read More</button>
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Pricing Section */}
					<section id="pricing" className="py-24 bg-muted/50">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-16">
								<h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
								<p className="text-xl text-muted-foreground">
									サービスごとの料金プランです。
								</p>
							</div>
							<div className="grid md:grid-cols-2 gap-8">
								{[
									{
										name: "ITツールの使い方サポート",
										price: "時給4,000円～",
										features: [
											"基礎的な利用方法のレクチャー",
											"業務での実践的な運用支援",
											"対面、ビデオ通話、メールでのサポート",
										],
									},
									{
										name: "Webサイト、LP制作",
										price: "50,000円～",
										features: [
											"デザイン、構成の打ち合わせ",
											"Webサイトからの流入分析",
											"運用、保守のサポート",
										],
									},
								].map((plan) => (
									<div key={plan.name} className="p-6">
										<h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
										<div className="text-3xl font-bold mb-6">{plan.price}</div>
										<ul className="space-y-3 mb-6">
											{plan.features.map((feature) => (
												<li
													key={`${plan.name}-${feature}`}
													className="flex items-center text-muted-foreground"
												>
													<CheckCircle2 className="h-5 w-5 mr-2" />
													{feature}
												</li>
											))}
										</ul>
										<button type="button">Get Started</button>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Contact Section */}
					<section id="contact" className="py-24 bg-background">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-16">
								<h2 className="text-3xl font-bold mb-4">Contact Us</h2>
								<p className="text-xl text-muted-foreground">
									お問い合わせはこちらからお願いいたします。
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="border border-gray-200 p-8 rounded-lg">
									<h3 className="text-xl font-bold mb-2">お問い合わせフォーム</h3>
									<p className="text-muted-foreground mb-6">
										以下のボタンからお問い合わせフォームにアクセスできます。
									</p>
									<a href="https://forms.gle/kqDmMQxbXq7x1VTd9" target="_blank" rel="noopener noreferrer">
										<button type="button">Contact Us</button>
									</a>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
		</div>
	);
}

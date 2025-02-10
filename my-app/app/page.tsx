import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	BarChart3,
	Building2,
	CheckCircle2,
	ChevronRight,
	Globe2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Header */}
			<Header />

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
								<Button size="lg">
									Get Started
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
								<Button variant="outline" size="lg">
									Learn More
								</Button>
							</div>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1497366216548-37526070297c"
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
							<Card
								key={feature.id}
								className="p-6 hover:shadow-lg transition-shadow"
							>
								<div className="mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</Card>
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
								id: "bye-bite",
								company: "退職代行サービス Byeバイト",
								image:
									"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
								title: "LP制作",
								description: "200%のユーザーの増加に貢献しました。",
							},
							{
								id: "coming-soon",
								company: "",
								image:
									"https://images.unsplash.com/photo-1554469384-e58fac16e23a",
								title: "Coming Soon",
								description: "",
							},
						].map((study) => (
							<Card key={study.id} className="overflow-hidden">
								<div className="relative h-48">
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
									<Button variant="outline">Read More</Button>
								</div>
							</Card>
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
							<Card key={plan.name} className="p-6">
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
								<Button className="w-full">Get Started</Button>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

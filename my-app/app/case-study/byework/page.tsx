"use client";

import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Byework() {
	const [toc, setToc] = useState<Array<{ id: string; text: string }>>([]);

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const tocData = Array.from(sections)
			.map((section) => {
				const heading = section.querySelector("h2");
				return {
					id: section.id,
					text: heading?.textContent || section.id,
				};
			})
			.filter((item) => item.id); // 空のIDを除外

		setToc(tocData);
	}, []);

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="min-h-screen">
				<section className="mt-16 pb-20">
					<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
						<header className="flex flex-col items-center">
							<h1 className="text-xl">[インタビュー] 退職代行 Byeバイト</h1>
							<p className="mt-4">2025/02/14 更新</p>
							<Image
								src="/images/caseStudies/Byeバイト.png"
								alt="Byeバイト_画像"
								width={1080}
								height={720}
								className="shadow rounded-3xl mt-8"
							/>
						</header>
						{/* LP制作後のインタビュー導入 */}
						<div className="mt-16 text-base leading-loose">
							<p>
								Byeバイト様のLP制作後、インタビューを行いました。以下、その内容をご紹介いたします。
							</p>
							{/* Byeバイトの実際のLPサイト */}
							<div className="mt-4">
								<a
									href="https://jlsu-dev.github.io/byework/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
								>
									Byeバイト公式サイト
								</a>
							</div>
						</div>
						{/* 目次 */}
						<div className="p-4 mt-16 border border-gray-200">
							<h2 className="text-lg">目次</h2>
							<ul>
								{toc.map((item, index) => (
									<li
										className="mt-3 text-gray-400 hover:text-gray-300"
										key={`${item.id}-${index}`}
									>
										<a href={`#${item.id}`}>{item.text}</a>
									</li>
								))}
							</ul>
						</div>
						<div className="mt-6 text-base leading-loose">

							{/* 話者表記 */}
							<div className="space-y-2">
								<p>本文の話者表記↓</p>
								<p>
									<span>ひねりキュービックス：</span>
									<span className="text-gray-600">ひねり</span>
								</p>
								<p>
									<span>退職代行 Byeバイト様：</span>
									<span className="text-red-400">Byeバイト</span>
								</p>
							</div>

							<section id="Byeバイトについて" className="pt-12">
								<h2 className="text-lg">Byeバイトについて</h2>
								<div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
								<div className="space-y-8 mt-8">
									<p>
										<span className="text-gray-600">ひねり：</span>
										本日はよろしくお願いいたします。こうして改まると緊張しますね笑
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										本当に笑 よろしくお願いいたします！
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										では、Byeバイトのサービス概要について教えていただけますでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										Byeバイトは、アルバイト・パート専門の退職代行サービスを提供しています。「働く選択を、もっと自由に」という理念のもと、誰もが気軽に新しい一歩を踏み出せる世界を目指しています。
									</p>
									<p>
									<span className="text-gray-600">ひねり：</span>
										退職代行サービスを始められた背景には、どのような思いがあったのでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										働く環境で悩むのは、正社員だけではありません。アルバイト・パートの方も同様に悩みを抱えています。しかし、既存の退職代行サービスは高額で、利用したくても手が届きにくい状況でした。そこで、私たちは低価格で利用できる退職代行サービスを提供したいと考えました。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										サービスへの強い想いを感じます。具体的にどのような点にこだわってサービスを提供されていますか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										経験豊富なスタッフが、お客様の「辞めたい」という気持ちに寄り添い、一歩を後押しすることを大切にしています。また、広告費をかけていません。SNSに自分たちで発信を行うことで、認知向上を目指しています。その結果が、業界最安級の料金に繋がっています。学生の方には、さらに学割プランもご用意しています。
									</p>
									<div className="border border-gray-200 p-4 rounded-3xl">
										<p className="text-gray-600 text-sm">
											📢 ByeバイトのYoutubeチャンネルでは、オリジナルのアニメを配信しています。ぜひ、チェックしてみてください！
										</p>
										<p>
											<a
												href="https://www.youtube.com/@byebaito"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
											>
												Byeバイト公式Youtube
											</a>
										</p>
									</div>
								</div>
							</section>

							<section id="Webサイト制作の背景" className="pt-12">
								<h2 className="text-lg">Webサイト制作の背景</h2>
								<div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
								<div className="space-y-8 mt-8">
									<p>
										<span className="text-gray-600">ひねり：</span>
										今回、ByeバイトのLP制作をお手伝いさせていただきましたが、制作しようと思ったきっかけは何だったのでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										これまで、SNSを中心に情報発信を行っていましたが、より多くの方にサービスを知っていただくために、Webサイトを制作したいと考えました。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										Webサイトの制作を行うことで、どのような効果を期待されていましたか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										サービスの認知度向上、お客様の獲得、そして信頼性向上です。Webサイトを通じて、Byeバイトの想いやサービス内容をより深く理解していただきたいと考えていました。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										LP制作にあたって、課題点はございましたか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										予算を抑えつつ、サービスの魅力を最大限に伝えることでした。また、ターゲット層である学生やアルバイトの方に響くデザインにすることも課題でした。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										そのような課題がある中で、私にLP制作をご依頼いただいた理由をお聞かせいただけますでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										ご提案に魅力を感じました。Webサイトの運用については調べてもよく分からないことが多かった中、ランニングコストをほとんどかけない運用方法を分かりやすくご提案くださり、安心してお任せできると感じました。
									</p>
								</div>
							</section>

							<section id="制作の過程" className="pt-12">
								<h2 className="text-lg">制作の過程</h2>
								<div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
								<div className="space-y-8 mt-8">
									<p>
										<span className="text-gray-600">ひねり：</span>
										打ち合わせの様子はいかがでしたでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										とてもスムーズでした。私たちの要望や課題を丁寧にお聞きいただき、具体的な提案をいただきました。デザインや構成についても、私たちのイメージを的確に反映していただきました。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										制作中のエピソードで何か印象に残っていることはありますか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										納品前の最終チェックで、細かい修正をお願いしたところ、すぐに対応していただきました。スピーディーな対応に感謝しています。
									</p>
									<p><span className="text-gray-600">ひねり：</span>
									こだわった点はありますか？</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										特に、ターゲット層である学生やアルバイトの方に響くデザインにこだわりました。また、サイト内の情報がわかりやすいように工夫しました。
									</p>
								</div>
							</section>

							<section id="Webサイト完成後の反響" className="pt-12">
								<h2 className="text-lg">Webサイト完成後の反響</h2>
								<div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
								<div className="space-y-8 mt-8">
									<p>
										<span className="text-gray-600">ひねり：</span>
										Webサイト完成後の反響はいかがでしたでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										実は、以前自分たちで制作したサイトでは、お問い合わせがほとんどなかったのですが、今回のサイトでは大きく変わりました。
										サイト流入数が200%向上し、多くのお問い合わせをいただくようになりました。顧客からの反応も良く、「料金が安くて助かる」「安心して相談できる」といった声をいただいています。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										サイト流入数200%向上、素晴らしいですね！お客様からの反応も好評のようで、安心しました。
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										サービスの認知度が向上し、多くのお客様にご利用いただけるようになりました。Webサイトを通じて、私たちの想いをより多くの方に届けることができていると感じています。
									</p>
								</div>
							</section>

							<section id="今後の展望" className="pt-12">
								<h2 className="text-lg">今後の展望</h2>
								<div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
								<div className="space-y-8 mt-8">
									<p>
										<span className="text-gray-600">ひねり：</span>
										今後の展望について教えていただけますでしょうか？
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										より多くの方にサービスを知っていただくために、SNSを中心に情報発信を続けていきます。また、新しいサービスの提供や、サイトのリニューアルなど、お客様に喜んでいただけるような取り組みを進めていきます。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										最後に、Byeバイトを利用される方へメッセージをお願いいたします。
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										「働く選択を、もっと自由に」。Byeバイトは、あなたの新しい一歩を応援します。ぜひ、お気軽にご相談ください。
									</p>
									<p>
										<span className="text-gray-600">ひねり：</span>
										ありがとうございます。私もByeバイト様の発展に貢献できるよう、尽力いたします。本日は貴重なお話をありがとうございました。
									</p>
									<p>
										<span className="text-red-400">Byeバイト：</span>
										こちらこそ、ありがとうございました。
									</p>
								</div>
							</section>
						</div>
						<ContactCard />
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}

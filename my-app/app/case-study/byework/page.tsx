'use client';

import Header from "@/components/layouts/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Byework() {
  const [toc, setToc] = useState<Array<{ id: string; text: string }>>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const tocData = Array.from(sections).map((section) => {
      const heading = section.querySelector("h2");
      return {
        id: section.id,
        text: heading?.textContent || section.id,
      };
    }).filter(item => item.id); // 空のIDを除外

    setToc(tocData);
  }, []);

  return(
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="min-h-screen">
        <section className="mt-16 pb-32">
          <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
            <header className="flex flex-col items-center">
              <h1 className="text-xl">退職代行 Byeバイト</h1>
              <Image
                src="/images/caseStudies/Byeバイト.png"
                alt="Byeバイト_画像"
                width={1080}
                height={720}
                className="mt-6 border border-gray-200"
              />
            </header>
            {/* LP制作後のインタビュー導入 */}
            <div className="mt-16 text-base leading-loose">
              <p>Byeバイト様のLP制作後のインタビューを行いました。以下、その内容をご紹介いたします。</p>
              {/* Byeバイトの実際のLPサイト */}
              <div className="mt-4">
                <a href="https://jlsu-dev.github.io/byework/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Byeバイト公式サイト</a>
              </div>
            </div>
            {/* 目次 */}
            <div className="p-4 mt-16 border border-gray-200">
                <h2 className="text-lg">目次</h2>
                <ul>
                   {toc.map((item, index) => (
                      <li className="mt-3 text-gray-400 hover:text-blue-300" key={`${item.id}-${index}`}>
                        <a href={`#${item.id}`}>{item.text}</a>
                      </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 text-base leading-loose">
              <section id="Byeバイトについて" className="pt-8">
                <h2 className="text-lg">Byeバイトについて</h2>
                <div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
                <p className="mt-4">あなた: 本日はよろしくお願いいたします。まず、Byeバイト様のサービス概要についてお聞かせいただけますでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: こちらこそ、よろしくお願いいたします。Byeバイトは、退職代行サービスを提供しています。「働く選択を、もっと自由に」という理念のもと、誰もが気軽に新しい一歩を踏み出せる世界を目指しています。</p>
                <p className="mt-4">あなた: 退職代行サービスを始められた背景には、どのような思いがあったのでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: 働く環境で悩むのは、正社員だけではありません。アルバイトの方も同様に悩みを抱えています。しかし、既存の退職代行サービスは高額で、学生やアルバイトの方には手が届きにくい状況でした。そこで、私たちは低価格で利用できる退職代行サービスを提供したいと考えました。</p>
                <p className="mt-4">あなた: サービスへの強い想いを感じます。具体的にどのような点にこだわってサービスを提供されていますか？</p>
                <p className="mt-4">Byeバイト担当者様: 経験豊富なスタッフが、お客様の「辞めたい」という気持ちに寄り添い、一歩を後押しすることを大切にしています。また、広告費を削減し、サイト制作やSNS運用も自社で行うことで、料金を必要最低限に抑えています。学生さん向けの学割プランもご用意しています。</p>
              </section>

              <section id="Webサイト制作の背景" className="pt-8">
                <h2  className="text-lg">Webサイト制作の背景</h2>
                <div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
                <p className="mt-4">あなた: 今回、ByeバイトのLP制作をお手伝いさせていただきましたが、Webサイト制作の背景についてお聞かせいただけますでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: これまで、SNSを中心に情報発信を行っていましたが、より多くの方にサービスを知っていただくために、Webサイトを制作したいと考えました。</p>
                <p className="mt-4">あなた: Webサイト制作の目的は何でしたか？</p>
                <p className="mt-4">Byeバイト担当者様: サービスの認知度向上、お客様の獲得、そして信頼性向上です。Webサイトを通じて、Byeバイトの想いやサービス内容をより深く理解していただきたいと考えていました。</p>
                <p className="mt-4">あなた: LP制作にあたって、課題点はございましたか？</p>
                <p className="mt-4">Byeバイト担当者様: 予算を抑えつつ、サービスの魅力を最大限に伝えることでした。また、ターゲット層である学生やアルバイトの方に響くデザインやコピーにすることも課題でした。</p>
                <p className="mt-4">あなた: そのような課題がある中で、私にLP制作をご依頼いただいた理由をお聞かせいただけますでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: 実績と提案力に魅力を感じました。私たちの要望をしっかりと理解してくださり、最適なLPを制作していただけると確信しました。</p>
              </section>

              <section id="制作の過程" className="pt-8">
                <h2 className="text-lg">制作の過程</h2>
                <div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
                <p className="mt-4">あなた: 打ち合わせはどのような様子でしたか？</p>
                <p className="mt-4">Byeバイト担当者様: とてもスムーズでした。私たちの要望や課題を丁寧にお聞きいただき、具体的な提案をいただきました。デザインや構成についても、私たちのイメージを的確に反映していただきました。</p>
                <p className="mt-4">あなた: 制作中のエピソードで何か印象に残っていることはありますか？</p>
                <p className="mt-4">Byeバイト担当者様: サイトのキャッチコピーについて、何度も議論を重ねたことが印象に残っています。「働く選択を、もっと自由に」という言葉に決まった時は、本当に感動しました。</p>
                <p className="mt-4">あなた: こだわった点はありますか？</p>
                <p className="mt-4">Byeバイト担当者様: ターゲット層である学生やアルバイトの方に響くデザイン、コピー、そしてメッセージにこだわりました。また、サービスの信頼性を高めるために、実績やお客様の声も掲載しました。</p>
              </section>
              
              <section id="Webサイト完成後の反響" className="pt-8">
                <h2 className="text-lg">Webサイト完成後の反響</h2>
                <div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
                <p className="mt-4">あなた: Webサイト完成後の反響はいかがでしたでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: サイト流入数が200%向上し、多くのお問い合わせをいただくようになりました。顧客からの反応も良く、「料金が安くて助かる」「安心して相談できる」といった声をいただいています。</p>
                <p className="mt-4">あなた: サイト流入数200%向上、素晴らしいですね！Byeバイトへの影響はいかがですか？</p>
                <p className="mt-4">Byeバイト担当者様: サービスの認知度が向上し、多くのお客様にご利用いただけるようになりました。Webサイトを通じて、私たちの想いをより多くの方に届けることができていると感じています。</p>
              </section>

              <section id="今後の展望" className="pt-8">
                <h2 className="text-lg">今後の展望</h2>
                <div className="mt-2 bottom-0 left-0 right-0 border-b border-gray-200" />
                <p className="mt-4">あなた: 今後の展望について教えていただけますでしょうか？</p>
                <p className="mt-4">Byeバイト担当者様: より多くの方にサービスを知っていただくために、SNSや広告を活用していきたいと考えています。また、お客様の声をもとに、サービスのさらなる充実を図っていきます。</p>
                <p className="mt-4">あなた: 最後に、Byeバイトを利用される方へメッセージをお願いいたします。</p>
                <p className="mt-4">Byeバイト担当者様: 「働く選択を、もっと自由に」。Byeバイトは、あなたの新しい一歩を応援します。ぜひ、お気軽にご相談ください。</p>
                <p className="mt-4">あなた: ありがとうございます。私もByeバイト様の発展に貢献できるよう、尽力いたします。本日は貴重なお話をありがとうございました。</p>
                <p className="mt-4">Byeバイト担当者様: こちらこそ、ありがとうございました。</p>
              </section>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
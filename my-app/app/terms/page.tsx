import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Terms() {
	return (
		<div>
			<div className="flex min-h-screen flex-col">
				<Header />
				<div className="min-h-screen">
					<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
						<nav className="relative flex items-center whitespace-nowrap mt-12 text-sm xs:text-base sm:text-mdlg gap-6">
							<div className="absolute bottom-0 left-0 right-0 border-b border-main-200" />
							<a
								className="relative inline-flex items-center border-b py-2.5 border-main-body text-main-body"
								href="/terms"
							>
								利用規約
							</a>
							<a
								className="relative inline-flex items-center border-b py-2.5 border-transparent text-main-600 hover:text-main-body"
								href="/terms?tab=privacy"
							>
								<span>
									プライバシー
									<span className="hidden sm:inline">ポリシー</span>
								</span>
							</a>
							<a
								className="relative inline-flex items-center border-b py-2.5 border-transparent text-main-600 hover:text-main-body"
								href="/terms?tab=specified"
							>
								特商法表記
							</a>
						</nav>
						<div className="mt-12 pb-32">
							<div className="">content here.</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

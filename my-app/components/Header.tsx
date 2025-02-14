import Link from "next/link";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-6 py-10">
			<Link href="/" className="flex items-center gap-2.5">
				<div className="flex items-center">
					<span className="leading-1.5 text-lg xs:text-base">ひねりキュービックス</span>
				</div>
			</Link>
		</header>
	);
}

import { Building2 } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<div>
			<header className="top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<Link href="/">
							<div className="flex items-center">
								<Building2 className="h-8 w-8" />
								<span className="ml-2 text-lg">ひねりキュービックス</span>
							</div>
						</Link>
						<nav className="hidden md:flex space-x-8">
							<Link
								href="/#services"
								className="text-muted-foreground hover:text-foreground"
							>
								Services
							</Link>
							<Link
								href="/#case-studies"
								className="text-muted-foreground hover:text-foreground"
							>
								Case Studies
							</Link>
							<Link
								href="/#pricing"
								className="text-muted-foreground hover:text-foreground"
							>
								Pricing
							</Link>
							<Link
								href="/#contact"
								className="text-muted-foreground hover:text-foreground"
							>
								Contact
							</Link>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

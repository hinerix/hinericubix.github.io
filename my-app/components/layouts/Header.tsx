import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export default function Header() {
	return (
		<div>
			<header className="top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<a href="/">
							<div className="flex items-center">
								<Building2 className="h-8 w-8" />
								<span className="ml-2 text-lg">ひねりキュービックス</span>
							</div>
						</a>
						<nav className="hidden md:flex space-x-8">
							<a
								href="#services"
								className="text-muted-foreground hover:text-foreground"
							>
								Services
							</a>
							<a
								href="#case-studies"
								className="text-muted-foreground hover:text-foreground"
							>
								Case Studies
							</a>
							<a
								href="#pricing"
								className="text-muted-foreground hover:text-foreground"
							>
								Pricing
							</a>
							<a
								href="#contact"
								className="text-muted-foreground hover:text-foreground"
							>
								Contact
							</a>
						</nav>
						<div className="flex items-center space-x-4">
							<ThemeToggle />
							<Button variant="outline" className="hidden md:inline-flex">
								Get Started
							</Button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

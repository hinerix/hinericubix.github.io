import { Building2 } from "lucide-react";

export default function Footer() {
	return (
		<div>
			<footer className="bg-muted py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<ul className="space-y-2">
								<li>
									<a
										href="/about"
										className="text-muted-foreground hover:text-foreground"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/careers"
										className="text-muted-foreground hover:text-foreground"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-muted-foreground hover:text-foreground"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul className="space-y-2">
								<li>
									<a
										href="/terms"
										className="text-muted-foreground hover:text-foreground"
									>
										規約とポリシー
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul className="space-y-2 text-muted-foreground">
								<li>hinericubix@gmail.com</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
						<p>&copy; 2025 Hineri Cubix. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

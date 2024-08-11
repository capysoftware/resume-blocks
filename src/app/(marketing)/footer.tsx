import { COMPANY_NAME } from "@/lib/constants";

export default function Footer() {
	return (
		<footer className="border-t bg-foreground text-background">
			<div className="container flex justify-center items-center py-10">
				<span>
					© {new Date().getFullYear()} {COMPANY_NAME}, Inc.
				</span>
			</div>
		</footer>
	);
}

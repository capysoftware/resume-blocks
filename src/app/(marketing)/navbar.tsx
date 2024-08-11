import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
	return (
		<header>
			<div className="container flex justify-between relative z-10 border-b py-6 items-center">
				<Logo href="/" />
				<Button asChild>
					<Link href="/dashboard">Dashboard</Link>
				</Button>
			</div>
		</header>
	);
}

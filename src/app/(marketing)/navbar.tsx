import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
	getKindeServerSession,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
	const { getUser } = getKindeServerSession();

	const user = await getUser();

	return (
		<header>
			<div className="container flex justify-between relative z-10 border-b py-6 items-center">
				<Logo href="/" />
				<Button asChild>
					{user ? (
						<Link href="/dashboard">Dashboard</Link>
					) : (
						<LoginLink>Login</LoginLink>
					)}
				</Button>
			</div>
		</header>
	);
}

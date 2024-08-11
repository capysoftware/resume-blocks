import { COMPANY_NAME } from "@/lib/constants";
import { Package2Icon } from "lucide-react";
import Link from "next/link";

export default function Logo({ href }: { href: string }) {
	return (
		<Link href={href} className="flex items-center gap-2 font-semibold">
			<Package2Icon className="h-6 w-6" />
			<span className="">{COMPANY_NAME}</span>
		</Link>
	);
}

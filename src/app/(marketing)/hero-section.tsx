import { Button } from "@/components/ui/button";

export default function HeroSectionGradientBackground() {
	return (
		<section>
			{/* Hero */}
			<div className="relative overflow-hidden">
				<div className="relative z-10">
					<div className="container py-10 lg:py-16">
						<div className="max-w-2xl text-center mx-auto">
							<p className="">Elevate your projects</p>
							{/* Title */}
							<div className="mt-5 max-w-2xl">
								<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
									Beautiful UI Blocks
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-3xl">
								<p className="text-xl text-muted-foreground">
									Over 10+ fully responsive, UI blocks you can drop into your
									Shadcn UI projects and customize to your heart&apos;s content.
								</p>
							</div>
							{/* Buttons */}
							<div className="mt-8 gap-3 flex justify-center">
								<Button size={"lg"}>Get started</Button>
								<Button size={"lg"} variant={"outline"}>
									Learn more
								</Button>
							</div>
							{/* End Buttons */}
						</div>
						<div className="mt-10 relative max-w-5xl mx-auto">
							<img
								src="https://placehold.co/1024x480"
								className="rounded-xl"
								alt="Image Description"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* End Hero */}
		</section>
	);
}

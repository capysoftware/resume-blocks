import FeatureSection from "./feature-section";
import Footer from "./footer";
import HeroSectionGradientBackground from "./hero-section";
import Navbar from "./navbar";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div className="flex flex-col gap-10 pb-24 md:pb-32">
				<HeroSectionGradientBackground />
				<FeatureSection />
			</div>
			<Footer />
		</>
	);
}

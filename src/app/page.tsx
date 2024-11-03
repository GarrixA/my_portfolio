import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "./components/RenderModel";
import WizardModel from "./components/model/WizardModel";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen items-center justify-between relative bg-black">
			<Image
				src={bg}
				alt="bg-image"
				className="w-full h-full object-cover object-center opacity-60"
			/>

			<div className="w-full h-screen">
				{/* Nav and 3 model */}
				<RenderModel className="">
					<WizardModel />
				</RenderModel>
			</div>
		</main>
	);
}

"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";

interface RenderModelProps {
	children: React.ReactNode;
	className: string;
}
const RenderModel: React.FC<RenderModelProps> = ({ children, className }) => {
	return (
		<Canvas className={clsx("w-screen h-screen relative", className)}>
			<Suspense fallback={null}>{children}</Suspense>
		</Canvas>
	);
};

export default RenderModel;

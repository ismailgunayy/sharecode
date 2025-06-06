"use client";

import Button from "@/components/ui/Button";
import GitHub from "@/assets/icons/GitHub";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "@/assets/icons/LinkedIn";
import ShareCode from "@/assets/icons/ShareCode.png";
import clsx from "clsx";
import { createSession } from "@/service/api/session";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [isFadingOut, setIsFadingOut] = useState(false);

	const router = useRouter();

	const createNewSession = async () => {
		setIsLoading(true);
		const data = await createSession();
		setIsLoading(false);

		if (data?.id) {
			setIsFadingOut(true);
			setTimeout(() => {
				router.push(`/${data.id}`);
			}, 660); // Update this time if you change the animate-fade-out duration
		}
	};

	return (
		<div
			className={clsx(
				"flex flex-col justify-center items-center h-full select-none animate-fade-in",
				isFadingOut && "animate-fade-out"
			)}
		>
			<Image
				src={ShareCode}
				alt="sharecode-icon"
				className="absolute top-8 size-32 hover:rotate-12 transition"
			/>
			<h1 className="text-6xl mb-8">ShareCode</h1>
			<Button
				className="mb-2"
				isLoading={isLoading}
				onClick={createNewSession}
			>
				Create a session
			</Button>
			<div className="absolute bottom-0 flex mx-auto mb-2">
				<Link
					href="https://github.com/ismailgunayy/sharecode"
					target="_blank"
				>
					<GitHub
						className={clsx(
							"size-12 transition rounded-lg p-2",
							"text-secondary",
							"hover:text-primary hover:bg-secondary"
						)}
					/>
				</Link>
				<Link
					href="https://linkedin.com/in/ismailgunayy"
					target="_blank"
				>
					<LinkedIn
						className={clsx(
							"size-12 transition rounded-lg p-2",
							"text-secondary",
							"hover:text-primary hover:bg-secondary"
						)}
					/>
				</Link>
			</div>
			<div className="absolute bottom-4 right-4 select-none"></div>
		</div>
	);
}

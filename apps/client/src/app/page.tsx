"use client";

import Button from "@/components/ui/Button";
import GitHub from "@/assets/icons/GitHub";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "@/assets/icons/LinkedIn";
import ShareCode from "@/assets/icons/ShareCode.png";
import { createSession } from "@/service/api/session";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const createNewSession = async () => {
		setIsLoading(true);
		const data = await createSession();
		setIsLoading(false);

		if (data?.id) {
			router.push(`/${data.id}`);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<Image
				src={ShareCode}
				alt="sharecode-icon"
				className="absolute top-8 size-32"
			/>
			<h1 className="text-6xl mb-8">ShareCode</h1>
			<Button
				isLoading={isLoading}
				onClick={createNewSession}
			>
				Create a session
			</Button>
			<div className="absolute bottom-0 opacity-75 flex mx-auto mb-2">
				<Link
					href="https://github.com/ismailgunayy/sharecode"
					target="_blank"
				>
					<GitHub className="text-primary size-12 transition rounded-lg p-2 hover:text-secondary hover:bg-primary" />
				</Link>
				<Link
					href="https://linkedin.com/in/ismailgunayy"
					target="_blank"
				>
					<LinkedIn className="text-primary size-12 transition rounded-lg p-2 hover:text-secondary hover:bg-primary" />
				</Link>
			</div>
			<div className="absolute bottom-4 right-4 select-none"></div>
		</div>
	);
}

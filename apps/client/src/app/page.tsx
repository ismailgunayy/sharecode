"use client";

import Button from "@/components/ui/Button";
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

		if (data.id) {
			router.push(`/${data.id}`);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1 className="text-5xl mb-8">ShareCode</h1>
			<Button
				isLoading={isLoading}
				onClick={createNewSession}
			>
				Create a session
			</Button>
		</div>
	);
}

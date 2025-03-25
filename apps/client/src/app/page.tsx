"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

export default function Home() {
	const router = useRouter();

	const createNewSession = async () => {
		const sessionId = uuid();
		router.push(`/${sessionId}`);
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1 className="text-5xl mb-8">ShareCode</h1>
			<Button onClick={createNewSession}>Create a session</Button>
		</div>
	);
}

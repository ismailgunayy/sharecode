"use client";

import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		if (router) {
			router.replace("/");
			toast.error("Page not found", { id: "page-not-found" });
		}
	}, [router]);

	return <div></div>;
}

import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1 className="text-5xl mb-8">ShareCode</h1>
			<Link
				href={"/23"}
				className="border-2 rounded-lg p-4 text-lg cursor-pointer hover:bg-primary hover:text-secondary transition"
			>
				Create New Session
			</Link>
		</div>
	);
}

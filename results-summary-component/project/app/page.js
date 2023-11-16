import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";

const hanken = Hanken_Grotesk({
	weight: ["500", "700", "800"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`${hanken.className} flex flex-col md:flex-row h-screen items-center justify-center`}
		>
			<div className="card--result flex flex-col items-center justify-between text-center text-white py-10 px-16 rounded-3xl">
				<p className="text-xl font-bold text-[color:var(--light-lavender)]">
					Your Result
				</p>
				<div className="card--score flex flex-col justify-center rounded-full w-52 h-52">
					<p className="font-extrabold text-7xl">76</p>
					<p className="text-[color:var(--light-lavender)]">of 100</p>
				</div>
				<p className="text-3xl font-bold">Great</p>
				<p className="text-[color:var(--light-lavender)] font-medium">
					You scored higher than 65% of the people who have taken
					these tests
				</p>
			</div>
			<div className="card--summary flex flex-col justify-between p-10 rounded-3xl">
				<p className="text-xl font-bold text-[color:var(--dark-gray-blue)]">
					Summary
				</p>
				<div className="flex w-full p-1 rounded gap-2 bg-[var(--light-red-20)]">
					<Image
						priority
						src="/icon-reaction.svg"
						height={18}
						width={18}
					/>
					<p className="flex-grow text-[color:var(--light-red)]">
						Reaction
					</p>
					<p className="text-[color:var(--dark-gray-blue)]">80</p>
					<p className="text-gray-500">/ 100</p>
				</div>
				<div className="flex w-full p-1 rounded gap-2 bg-[var(--orangey-yellow-20)]">
					<Image
						priority
						src="/icon-memory.svg"
						height={18}
						width={18}
					/>
					<p className="flex-grow text-[color:var(--orangey-yellow)]">
						Memory
					</p>
					<p className="text-[color:var(--light-red-blue)]">92</p>
					<p className="text-gray-500">/ 100</p>
				</div>
				<div className="flex w-full p-1 rounded gap-2 bg-[var(--green-teal-20)]">
					<Image
						priority
						src="/icon-verbal.svg"
						height={18}
						width={18}
					/>
					<p className="flex-grow text-[color:var(--green-teal)]">
						Verbal
					</p>
					<p className="text-[color:var(--dark-gray-blue)]">61</p>
					<p className="text-gray-500">/ 100</p>
				</div>
				<div className="flex w-full p-1 rounded gap-2 bg-[var(--cobalt-blue-20)]">
					<Image
						priority
						src="/icon-visual.svg"
						height={18}
						width={18}
					/>
					<p className="flex-grow text-[color:var(--cobalt-blue)]">
						Visual
					</p>
					<p className="text-[color:var(--dark-gray-blue)]">72</p>
					<p className="text-gray-500">/ 100</p>
				</div>
				<button className="card--button w-full text-white rounded-3xl xl h-12">
					Continue
				</button>
			</div>
		</main>
	);
}

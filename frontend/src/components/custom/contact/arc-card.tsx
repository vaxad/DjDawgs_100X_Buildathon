"use client"
import { useRef } from "react"

export const ArcCard = ({
	name,
	title,
	url,
	college,
	img,
}: {
	name: string
	title: string
	url: string
	college: string
	img: string
}) => {
	const boundingRef = useRef<DOMRect | null>(null)

	return (
		<div className="[perspective:800px] w-full col-span-1 flex justify-center items-center">
			<div
				onMouseLeave={() => (boundingRef.current = null)}
				onMouseEnter={(ev) => {
					boundingRef.current =
						ev.currentTarget.getBoundingClientRect()
				}}
				onMouseMove={(ev) => {
					if (!boundingRef.current) return
					const x = ev.clientX - boundingRef.current.left
					const y = ev.clientY - boundingRef.current.top
					const xPercentage = x / boundingRef.current.width
					const yPercentage = y / boundingRef.current.height
					const xRotation = (xPercentage - 0.5) * 20
					const yRotation = (0.5 - yPercentage) * 20

					ev.currentTarget.style.setProperty(
						"--x-rotation",
						`${yRotation}deg`,
					)
					ev.currentTarget.style.setProperty(
						"--y-rotation",
						`${xRotation}deg`,
					)
					ev.currentTarget.style.setProperty(
						"--x",
						`${xPercentage * 100}%`,
					)
					ev.currentTarget.style.setProperty(
						"--y",
						`${yPercentage * 100}%`,
					)
				}}
				className="group relative flex flex-col gap-2 flex-grow w-full  rounded-md bg-foreground p-4 text-accent transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.06)]"
			>
				{/* <figure className="rounded-md mix-blend-multiply [background-image:radial-gradient(at_70%_40%,transparent_30%,currentColor_80%),url(/noise.svg)]" /> */}
				<div className=" w-full h-full">
					<img
						alt={title}
						className="[perspective:1000px] hover:shadow-xl shadow-slate-700 transition-all  w-full rounded-md mix-blend-multiply object-cover aspect-square"
						src={img}
					/>
				</div>
				<div className="pt-4">
					<p className="text-3xl font-bold">{name}</p>
					<p className="text-xl">{title}</p>
				</div>
				<footer className="flex items-end">
					<p className="flex rounded-sm border border-current px-1 py-px text-[9px] uppercase">
						<a href={url} target="_blank">
							<img
								width="30"
								height="30"
								src="https://img.icons8.com/ios-glyphs/60/5f6cd3/new-post.png"
								alt=""
							/>
						</a>
						<p className="-my-px mx-1 inline-block w-4 border-l border-r border-current bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_2px)]" />
					</p>
					<div className="ml-auto w-16 text-right">{college}</div>
				</footer>
				<div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
			</div>
		</div>
	)
}

export default ArcCard

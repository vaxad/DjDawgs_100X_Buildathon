import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/wrappers/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"

const clashGrotesk = localFont({
	src: "../fonts/ClashGrotesk-Variable.woff2",
	variable: "--font-CG",
})

export const metadata: Metadata = {
	title: "Insight Hound",
	description: "Generated by djdawgs",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${clashGrotesk.variable} [font-family:var(--font-CG)] antialiased`}
			>
				<TooltipProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster />
						<div className="rootWrapper">
							{/* <Navbar /> */}
							{children}
						</div>
					</ThemeProvider>
				</TooltipProvider>
			</body>
		</html>
	)
}
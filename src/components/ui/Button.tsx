import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    // Variants
                    variant === "primary" && "bg-green-org text-white hover:bg-[#5b7a25]",
                    variant === "secondary" && "border-2 border-green-org bg-white text-green-org hover:bg-green-org hover:text-white",
                    // Sizes
                    size === "sm" && "h-9 px-3 text-xs",
                    size === "md" && "h-11 px-8 py-2",
                    size === "lg" && "h-14 px-10 text-base",
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

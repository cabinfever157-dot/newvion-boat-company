import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-forest-light whitespace-nowrap",
        secondary: "bg-ivory text-charcoal border border-subtle hover:bg-sand whitespace-nowrap",
        outline: "border border-forest text-forest bg-transparent hover:bg-forest hover:text-cream whitespace-nowrap",
        ghost: "hover:bg-ivory bg-transparent text-charcoal whitespace-nowrap",
        premium: "bg-gold text-charcoal hover:bg-gold-light whitespace-nowrap",
        link: "text-primary underline-offset-4 hover:underline whitespace-nowrap",
      },
      size: {
        sm: "h-9 rounded-md px-3 text-xs",
        md: "h-11 rounded-md px-6 text-sm",
        lg: "h-13 rounded-lg px-8 text-base",
        xl: "h-15 rounded-lg px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
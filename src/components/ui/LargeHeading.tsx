import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const LargeHeadingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:6xl",
        lg: "text-5xl md:text-6xl lg:text7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// we extends, because whereever we want to import LargeHeading component,
// this extended thing will tell about the HTML props, this component accepts.
interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof LargeHeadingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(LargeHeadingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

// when we use forwardRef, we use displayName.
LargeHeading.displayName = "LargeHeading";

export default LargeHeading;

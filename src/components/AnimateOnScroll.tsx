import { useEffect, useRef, useState } from 'react'

type Variant = 'up' | 'left' | 'right' | 'scale'

interface AnimateOnScrollProps {
  children: React.ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

const variantClasses: Record<Variant, string> = {
  up: 'animate-on-scroll',
  left: 'animate-on-scroll-left',
  right: 'animate-on-scroll-right',
  scale: 'animate-on-scroll-scale',
}

export default function AnimateOnScroll({ children, variant = 'up', delay = 0, className = '' }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setInView(true), delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${variantClasses[variant]} ${inView ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

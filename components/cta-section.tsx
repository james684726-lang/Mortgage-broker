import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryText?: string
  secondaryHref?: string
}

export function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryText,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container-custom text-center">
        <h2 className="section-title mb-4 text-primary">{title}</h2>
        <p className="section-subtitle text-neutral-700 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaHref}
            className="btn-primary group"
          >
            {ctaText}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="btn-outline"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

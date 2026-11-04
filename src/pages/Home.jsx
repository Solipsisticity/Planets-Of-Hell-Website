import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const HERO_IMAGE = '/images/hero.jpg'

export default function Home() {
  const glowRef = useRef(null)

  useEffect(() => {
    let frame = 0
    let x = 50
    let y = 50

    const paint = () => {
      frame = 0
      glowRef.current?.style.setProperty('--gx', `${x}%`)
      glowRef.current?.style.setProperty('--gy', `${y}%`)
    }

    const onMove = (e) => {
      x = (e.clientX / window.innerWidth) * 100
      y = (e.clientY / window.innerHeight) * 100
      if (!frame) frame = requestAnimationFrame(paint)
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main
      className="relative flex min-h-screen w-full select-none overflow-hidden bg-[#0b0b0f] text-white font-sans"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(120,80,200,0.10), transparent 60%)',
        }}
      />

      <section className="relative z-10 flex w-full flex-col justify-between p-8 sm:p-12 md:w-1/2 md:p-14 lg:p-20">
        <header>
          <h1
            aria-label="Planets of Hell"
            className="flex flex-wrap items-baseline text-3xl font-extrabold uppercase leading-none tracking-tight sm:text-4xl md:text-5xl"
          >
            {'Planets'.split('').map((c, i) => (
              <span
                key={`p${i}`}
                aria-hidden="true"
                className="inline-block"
                style={{
                  transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                }}
              >
                {c}
              </span>
            ))}
            <span className="mx-1 inline-block opacity-40" aria-hidden="true">
              of
            </span>
            {'Hell'.split('').map((c, i) => (
              <span
                key={`h${i}`}
                aria-hidden="true"
                className="inline-block"
                style={{
                  transform: `rotate(${i % 2 === 0 ? '2deg' : '-2deg'})`,
                  WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                }}
              >
                {c}
              </span>
            ))}
          </h1>
        </header>

        <div className="my-8 max-w-md space-y-5 md:my-12">
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              <span className="font-semibold text-white">
                We&apos;re building something ambitious.
              </span>{' '}
              Planets of Hell is an upcoming Roblox tower-climbing obby
              developed by Collapse Initiative, featuring massive towers,
              distant planets, and increasingly difficult platforming
              challenges.
            </p>

            <p className="text-sm leading-relaxed text-white/60">
              Climb challenging obstacle courses, master precise jumps,
              and improve your skills across a wide range of difficulties.
              Whether you&apos;re learning the basics or tackling extreme
              towers, every challenge is another step toward mastery.
            </p>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Status
            </p>
            <p className="mt-1 text-lg leading-snug text-white">
              The website is in development.
              <br />
              Please come back another time.
            </p>
          </div>

          <p className="text-sm leading-relaxed text-white/60">
            More information about Planets of Hell, its Roblox tower
            challenges, difficulty system, and gameplay will be shared
            as development continues.
          </p>
        </div>

        <footer className="mt-auto space-y-4 text-sm">
          <p className="text-white/70">
            &quot;Planets of Hell&quot; by{' '}
            <a
              href="https://collapseinitiative.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              Collapse Initiative
            </a>
          </p>

          <p className="text-white/50">
            Created, owned, and developed by Solipsisticity &amp; ApartRipped.
          </p>

          <p className="text-white/50">
            Additional contributions by qYukiiiii, including UI design
            and involvement in the initial game concept.
          </p>

          <p className="text-white/40">
            Collapse Initiative is an independent Roblox game development
            studio owned and operated by Solipsisticity &amp; ApartRipped.
          </p>

          <div className="pt-1">
            <a
              href="https://collapseinitiative.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the official Collapse Initiative website"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-white transition-colors hover:bg-white hover:text-black"
            >
              <span>Collapse Initiative Website</span>
              <ExternalLink
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </footer>
      </section>

      <div
        className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)] md:block"
        aria-hidden="true"
      />

      <aside
        className="relative hidden w-1/2 md:block"
        aria-label="Planets of Hell preview artwork"
      >
        <img
          src={HERO_IMAGE}
          alt="Atmospheric artwork displayed on the Planets of Hell coming-soon website"
          className="h-full w-full object-cover"
          draggable={false}
          width={736}
          height={849}
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-black/20"
          aria-hidden="true"
        />
      </aside>
    </main>
  )
}

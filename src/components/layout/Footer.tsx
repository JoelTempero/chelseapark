export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 py-12 px-8 text-center">
      <a
        href="#"
        className="font-heading text-2xl font-semibold text-white no-underline tracking-[0.02em] inline-block mb-4"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        Chelsea <span className="text-gold">Park</span>
      </a>
      <p className="text-[0.85rem]">&copy; {new Date().getFullYear()} Chelsea Park Motor Lodge. All Rights Reserved.</p>
    </footer>
  )
}

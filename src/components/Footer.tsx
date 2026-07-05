export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 relative overflow-hidden bg-white transition-colors duration-300">
      {/* Vintage Warmth Overlay */}
      <div className="absolute inset-0 z-[0] pointer-events-none bg-[#f3e9d2] mix-blend-multiply opacity-40" />
      
      {/* Crispy Noise Overlay */}
      <div 
        className="absolute inset-0 z-[0] pointer-events-none opacity-[0.3] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10">
        <p className="text-sm text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Dave. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

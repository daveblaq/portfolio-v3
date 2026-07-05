export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 relative overflow-hidden bg-white transition-colors duration-300">

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10">
        <p className="text-sm text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Dave. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

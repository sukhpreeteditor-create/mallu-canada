export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-paper/60">
      <p>© {new Date().getFullYear()} Kerala Canada Connect. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        <a href="#" className="hover:text-accent transition-colors">Media Kit</a>
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
      </div>
    </footer>
  );
}

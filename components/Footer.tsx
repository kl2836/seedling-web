export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border py-12 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[var(--grad-brand)] flex items-center justify-center">
              <span className="text-white font-bold">🌱</span>
            </div>
            <span className="text-lg font-bold text-ink">Seedling</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-brand transition-colors">Terms</a>
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted">
            © 2025 Seedling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


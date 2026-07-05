import heroOscillator from "@/assets/hero-oscillator.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="font-display text-3xl tracking-tighter text-primary">CENVY</span>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-primary transition-colors uppercase tracking-widest">Services</a>
              <a href="#split" className="hover:text-primary transition-colors uppercase tracking-widest">Split Model</a>
              <a href="#features" className="hover:text-primary transition-colors uppercase tracking-widest">Features</a>
              <a href="#contact" className="hover:text-primary transition-colors uppercase tracking-widest">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hidden sm:inline text-xs font-mono tracking-widest hover:text-primary transition-colors">DASHBOARD_LOGIN</a>
            <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-[0.2em] hover:brightness-110 transition-all">
              START_RELEASE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative z-10 animate-slide-up">
            <div className="font-mono text-primary text-xs tracking-[0.4em] mb-6 uppercase flex items-center gap-3">
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              For Artists, Labels & B2B Distributors
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-[0.95] md:leading-[0.9] tracking-tight mb-8 text-balance uppercase">
              <span className="block">Zero Cost.</span>
              <span className="block">Total Reach.</span>
            </h1>
            <p className="max-w-xl text-xl text-muted-foreground leading-relaxed mb-10 text-pretty border-l-2 border-primary pl-6">
              Launch your music on Spotify, Apple Music, YouTube, TikTok and 150+ platforms for $0 upfront. We only succeed when you do. Keep 85% of every stream, forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-foreground text-background px-12 py-6 font-display text-3xl tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                UPLOAD NOW
              </a>
              <a href="#split" className="border border-border px-12 py-6 font-display text-3xl tracking-tight hover:bg-white/5 transition-all">
                HOW WE SPLIT
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none">
          <img src={heroOscillator} alt="Oscillator waveform" width={1280} height={1280} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Split */}
      <section id="split" className="py-24 border-y border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl mb-6 uppercase tracking-tight">
              Built For<br />Artists, Labels & Distributors
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you are an independent artist, a growing label, or a B2B distributor scaling your network — we cover the infrastructure. Zero upfront fees, transparent 15% revenue share, and tools built for every tier.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-primary text-3xl mb-1">85%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Artist Payout</div>
              </div>
              <div>
                <div className="font-mono text-foreground text-3xl mb-1">$0.00</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Upfront Cost</div>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-card border border-border p-8 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/40 animate-pulse">
              DATA_STREAM_ACTIVE
            </div>
            <div className="relative z-10">
              <div className="h-1 bg-white/10 w-full mb-4">
                <div className="h-full bg-primary w-[85%]" />
              </div>
              <div className="flex justify-between font-mono text-[10px] tracking-widest">
                <span>YOU RETAIN 85%</span>
                <span className="text-primary">CENVY 15%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { n: "01 // NO_BARRIERS", title: "Free Forever", body: "Unlimited uploads to all major stores without a single subscription fee. Release when you want, as much as you want." },
            { n: "02 // DATA_ACCESS", title: "Pro Analytics", body: "The same data tools as major labels. Track your 85% share across every territory with granular daily reporting." },
            { n: "03 // OWNERSHIP", title: "Stay Independent", body: "We take a split, not your rights. You keep 100% ownership of your masters and your publishing. Cancel anytime." },
          ].map((f) => (
            <div key={f.n} className="bg-card/50 p-12 border border-border hover:border-primary transition-all duration-500">
              <div className="font-mono text-primary text-xs mb-10 tracking-[0.3em]">{f.n}</div>
              <h3 className="font-display text-4xl mb-6 uppercase">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-y border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="font-mono text-primary text-xs tracking-[0.4em] mb-6 uppercase">// Delivery Network</div>
          <h2 className="font-display text-5xl uppercase tracking-tight mb-16 max-w-3xl">
            Distribution For Artists, Labels & B2B Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border">
            {["Spotify", "Apple Music", "YouTube", "Amazon", "Tidal", "Deezer", "TikTok", "Instagram", "JioSaavn", "Pandora", "SoundCloud", "Napster"].map((p) => (
              <div key={p} className="bg-background p-6 flex items-center justify-center font-display text-lg uppercase tracking-tight text-muted-foreground hover:text-primary hover:bg-card transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-12 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <span key={i} className="font-display text-6xl text-white uppercase px-6 shrink-0">
              Free Distribution / No Fees / Keep 85% / Free Distribution / No Fees / Keep 85% /&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-primary text-xs tracking-[0.4em] mb-6 uppercase">// Ready When You Are</div>
          <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tighter mb-8">
            Release Your Next Track With Cenvy
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Send us your catalogue or start fresh. Onboarding takes minutes and your first release can be live in 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:artists@cenvy.com" className="bg-primary text-primary-foreground px-10 py-5 font-display text-2xl tracking-tight hover:brightness-110 transition-all">
              artists@cenvy.com
            </a>
            <a href="mailto:artists@cenvy.com" className="border border-border px-10 py-5 font-display text-2xl tracking-tight hover:bg-white/5 transition-all">
              REQUEST INVITE
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="font-display text-5xl text-primary tracking-tighter">CENVY</span>
            <p className="mt-8 text-muted-foreground max-w-sm text-sm leading-relaxed font-mono">
              SYSTEM_STATUS: OPERATIONAL<br />
              REVENUE_MODEL: 85/15_SPLIT<br />
              UPFRONT_COST: $0.00
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] text-foreground tracking-[0.3em] mb-8 uppercase">Navigation</h5>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="#split" className="hover:text-primary transition-colors">Our Split</a>
              <a href="#features" className="hover:text-primary transition-colors">Artist Tools</a>
              <a href="#services" className="hover:text-primary transition-colors">Distribution</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] font-mono text-muted-foreground tracking-widest">
          <span>© 2026 CENVY DISTRIBUTION</span>
          <span>BUILT FOR INDEPENDENCE</span>
        </div>
      </footer>
    </div>
  );
}

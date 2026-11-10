import { ArrowUpRight, Menu, ShieldCheck, Box, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { company } from './data/company';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="VERTEX home">
          <img src="/assets/vertex-logo.jpeg" alt="VERTEX Racking and Storage" />
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <span className="menu-close">×</span> : <Menu size={25} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get a quote <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ENGINEERED STORAGE. SMARTER SPACES.</p>
          <h1>Make room for <span>what's next.</span></h1>
          <p className="hero-description">Smarter racking and storage solutions designed to help your business make better use of every square metre.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#solutions">Explore solutions <span>→</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><ShieldCheck size={20} /></div>
            <div><strong>Stronger racks. Smarter storage.</strong><small>Storage planned around your operation.</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85" alt="Modern warehouse with organized industrial storage" />
          <div className="hero-image-label"><span className="label-mark">V</span><div><strong>Better space starts here.</strong><small>VERTEX Racking & Storage</small></div></div>
          <div className="hero-accent" />
        </div>
      </section>

      <section className="value-strip" aria-label="VERTEX strengths">
        <div><ShieldCheck /><span>Stronger racks</span></div>
        <div><Box /><span>Smarter storage</span></div>
        <div><Maximize2 /><span>Better space</span></div>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-kicker">01 / ABOUT VERTEX</div>
        <div className="intro-content">
          <h2>Storage that works as hard as <span>you do.</span></h2>
          <div><p>At VERTEX, we believe an organized warehouse is the foundation of an efficient operation. We bring together practical thinking, dependable storage systems and a focus on making better use of your available space.</p><a className="text-link" href="#contact">Get to know us <span>→</span></a></div>
        </div>
      </section>

      <section className="placeholder-section" id="solutions">
        <div className="section-wrap placeholder-inner"><div className="section-kicker">02 / OUR SOLUTIONS</div><h2>Purpose-built storage for <span>every operation.</span></h2><p>Product categories and technical details will be added here as the catalogue is finalized.</p><div className="placeholder-card-grid"><article><span>01</span><h3>Pallet Racking</h3><p>Flexible storage access for palletized goods.</p></article><article><span>02</span><h3>Heavy Duty Shelving</h3><p>Organized storage for components and materials.</p></article><article><span>03</span><h3>Mezzanine Systems</h3><p>Make better use of available vertical space.</p></article></div></div>
      </section>

      <section className="contact-section section-wrap" id="contact"><div><div className="section-kicker">03 / START A CONVERSATION</div><h2>Let's make your space <span>work better.</span></h2><p>Tell us a little about your storage requirement. Our team will get back to you.</p></div><a className="button button-primary" href={`mailto:${company.email}?subject=Storage%20solution%20enquiry`}>Send an enquiry <ArrowUpRight size={18} /></a></section>

      <footer className="site-footer"><div className="footer-brand"><strong>VERTEX<span>.</span></strong><p>Racking & Storage</p></div><p>Stronger racks. Smarter storage. Better space.</p><small>© {new Date().getFullYear()} VERTEX Racking & Storage. Demo website content.</small></footer>
    </main>
  );
}

export default App;

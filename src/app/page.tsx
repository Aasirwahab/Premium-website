import { RevealText } from "@/components/RevealText";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_30c6yRkxUog0TZ5432rCR7HN4Pe/hf_20260429_034522_e2f81b2d-d670-4124-97eb-6ab3f1b2f379.mp4";

const posterImage =
  "https://playground.bravebrand.com/assets/backgrounds/polaris-cloud-browser-background.webp";

export default function Home() {
  return (
    <main aria-label="Polaris AI research browser">
      <section className="hero" aria-label="Polaris hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
          disableRemotePlayback
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#memory">Memory</a>
          <div className="logo" aria-label="Polaris" role="img" />
          <a href="#spaces">Spaces</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="bottom">
          <div className="hero-copy">
            <p className="brand-line">Polaris / AI Research Browser</p>
            <h1 className="brand">Browse the web like it has a horizon.</h1>
            <p className="tag">
              Search, remember, and map ideas across the internet without losing
              the thread.
            </p>
            <div className="hero-actions" aria-label="Hero actions">
              <a className="cta" href="#open">
                Open Polaris
              </a>
              <a className="ghost-cta" href="#demo">
                Watch demo
              </a>
            </div>
          </div>

          <aside className="right" aria-label="Polaris feature summary">
            <p>
              A calm AI browser for finding signal, tracing sources, and turning
              scattered tabs into clear knowledge spaces.
            </p>
            <div className="feature-strip" aria-label="Core capabilities">
              <span>Context search</span>
              <span>Private memory</span>
              <span>Spatial notes</span>
            </div>
          </aside>
        </div>

        <div className="foot" aria-hidden="true">
          <span>AI RESEARCH BROWSER</span>
          <span>SEARCH / MEMORY / SPACES</span>
        </div>
      </section>

      <section className="problem-section" aria-labelledby="problem-title">
        <div className="section-shell problem-editorial">
          <div className="problem-intro">
            <div>
              <p className="section-kicker">The Research Drift</p>
              <RevealText as="h2" id="problem-title">
                Future-proof your research with memory, source trails, and
                spatial clarity.
              </RevealText>
            </div>

            <div className="problem-preview" aria-hidden="true">
              <div className="preview-card">
                <span>Live context</span>
                <strong>18 sources</strong>
                <p>Mapped across one calm workspace.</p>
              </div>
              <div className="preview-orbit" />
              <div className="preview-node preview-node-a" />
              <div className="preview-node preview-node-b" />
            </div>
          </div>

          <div className="solution-list" aria-label="Polaris research solutions">
            <p className="solution-label">Research systems for</p>
            <a className="solution-row is-featured" href="#product">
              <span className="solution-index">01</span>
              <span className="solution-name">Context Search</span>
              <span className="solution-copy">
                Ask with your current trail in view, not from a blank page.
              </span>
              <span className="solution-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="solution-row" href="#memory">
              <span className="solution-index">02</span>
              <span className="solution-name">Source Memory</span>
              <span className="solution-copy">
                Keep citations, pages, and decisions attached to the work.
              </span>
              <span className="solution-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="solution-row" href="#spaces">
              <span className="solution-index">03</span>
              <span className="solution-name">Spatial Notes</span>
              <span className="solution-copy">
                Turn scattered links and highlights into a navigable map.
              </span>
              <span className="solution-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="solution-row" href="#product">
              <span className="solution-index">04</span>
              <span className="solution-name">Team Workspaces</span>
              <span className="solution-copy">
                Share research paths without flattening the thinking behind them.
              </span>
              <span className="solution-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="product-section"
        id="product"
        aria-labelledby="product-title"
      >
        <div className="section-shell">
          <div className="product-heading">
            <div className="section-kicker">Product System</div>
            <h2 id="product-title">Search, remember, and connect what matters.</h2>
            <p className="section-lede">
              Polaris turns browsing into a guided research space: ask a
              question, follow connected sources, and keep your best ideas
              organized as you move.
            </p>
          </div>

          <div className="product-preview" aria-label="Polaris product preview">
            <div className="browser-frame">
              <div className="browser-top">
                <span />
                <span />
                <span />
                <div>polaris://climate-ai-market-map</div>
              </div>
              <div className="browser-body">
                <aside className="memory-rail" id="memory">
                  <p>Memory Trail</p>
                  <span>Market signals</span>
                  <span>Primary sources</span>
                  <span>Open questions</span>
                </aside>
                <div className="map-canvas" id="spaces">
                  <div className="search-card">
                    <small>Context Search</small>
                    <strong>How are AI agents changing research workflows?</strong>
                    <p>
                      18 sources connected across product, education, and
                      enterprise adoption.
                    </p>
                  </div>
                  <div className="node node-a">Source Map</div>
                  <div className="node node-b">Notes</div>
                  <div className="node node-c">Insight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" aria-labelledby="footer-title">
        <div className="footer-orbit" aria-hidden="true" />
        <div className="section-shell footer-shell">
          <div className="footer-newsletter">
            <p className="section-kicker">Field Notes</p>
            <h2 id="footer-title">Research signals. No drift.</h2>
            <form className="newsletter-form" aria-label="Subscribe to Polaris updates">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-panel">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-mark" aria-hidden="true" />
                <span>Polaris</span>
              </div>
              <p>
                Polaris helps curious teams search the web, trace sources, and
                turn scattered research into calm knowledge spaces.
              </p>
              <div className="footer-signals" aria-label="Polaris research signals">
                <span>Context aware</span>
                <span>Source first</span>
                <span>Private by design</span>
              </div>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <div>
                <h3>Explore</h3>
                <a href="#product">Context Search</a>
                <a href="#memory">Private Memory</a>
                <a href="#spaces">Spatial Notes</a>
                <a href="#demo">Demo Library</a>
              </div>
              <div>
                <h3>Workflow</h3>
                <a href="#product">Source Mapping</a>
                <a href="#product">Team Spaces</a>
                <a href="#pricing">Plans</a>
                <a href="#open">Open Polaris</a>
              </div>
              <div>
                <h3>Company</h3>
                <a href="#story">Our Story</a>
                <a href="#journal">Journal</a>
                <a href="#careers">Careers</a>
                <a href="#press">Press</a>
              </div>
              <div>
                <h3>Support</h3>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy</a>
                <a href="#terms">Terms</a>
                <a href="#status">Status</a>
              </div>
            </nav>

            <div className="footer-bottom">
              <span>Designed for research that keeps its shape.</span>
              <div className="footer-social" aria-label="Footer actions">
                <a href="#journal">Journal</a>
                <a href="#demo">Demo</a>
                <a href="#contact">Contact</a>
              </div>
              <span>© 2026 Polaris Research Browser</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

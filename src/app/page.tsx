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
        <div className="section-shell problem-grid">
          <div className="section-kicker">The Research Drift</div>
          <div>
            <RevealText as="h2" id="problem-title">
              The web is full of answers. Not direction.
            </RevealText>
            <RevealText as="p" className="section-lede reveal-lede">
              Tabs multiply. Sources disappear. Notes scatter across tools.
              Polaris gives your research a memory, a map, and a calmer way to
              move through information.
            </RevealText>
          </div>
          <div className="problem-path" aria-label="Common research problems">
            <svg
              className="problem-curve"
              viewBox="0 0 1200 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="curve-glow"
                d="M 0 126 C 150 38, 290 38, 420 118 S 650 190, 782 128 S 990 30, 1200 100"
              />
              <path
                className="curve-line"
                d="M 0 126 C 150 38, 290 38, 420 118 S 650 190, 782 128 S 990 30, 1200 100"
              />
            </svg>
            <article className="path-point">
              <span className="path-index">01</span>
              <span className="path-node" aria-hidden="true" />
              <h3>Search loses context</h3>
              <p>Every query starts over, even when your thinking has moved on.</p>
            </article>
            <article className="path-point">
              <span className="path-index">02</span>
              <span className="path-node" aria-hidden="true" />
              <h3>Sources go missing</h3>
              <p>Useful pages vanish into history, bookmarks, and old tabs.</p>
            </article>
            <article className="path-point">
              <span className="path-index">03</span>
              <span className="path-node" aria-hidden="true" />
              <h3>Ideas stay scattered</h3>
              <p>Notes, links, and highlights rarely become a clear path.</p>
            </article>
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
    </main>
  );
}

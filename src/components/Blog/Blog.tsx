import { blog } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './Blog.scss';

export default function Blog() {
  const headingRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="blog" aria-labelledby="blog-title">
      <div className="container">
        <div className="blog__head reveal" ref={headingRef}>
          <div>
            <p className="eyebrow">{blog.eyebrow}</p>
            <h2 id="blog-title">From my blog post</h2>
          </div>
          <a className="btn-primary" href={blog.cta.href}>
            {blog.cta.label}
          </a>
        </div>

        <div className="blog__grid reveal-stagger" ref={gridRef}>
          {blog.posts.map((post) => (
            <article className="blog__card" key={post.title}>
              <div className="blog__thumb" style={{ ['--accent' as string]: post.accent }}>
                <a className="blog__thumb-link" href="#" aria-label={`Read ${post.title}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <span className="blog__tag">{post.tag}</span>
              <div className="blog__meta">
                <span>{post.author}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.date}</span>
              </div>
              <h3>{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

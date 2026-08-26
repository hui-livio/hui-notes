const posts = [
  {
    date: "2026.08.18",
    title: "在不确定里，练习做长期主义者",
    excerpt: "关于耐心、选择，以及为什么值得把重要的事做得慢一点。",
    tag: "随笔",
    read: "6 分钟",
  },
  {
    date: "2026.08.03",
    title: "我的数字花园如何保持常青",
    excerpt: "一套足够简单、真的能坚持下去的知识整理方式。",
    tag: "方法",
    read: "8 分钟",
  },
  {
    date: "2026.07.21",
    title: "周末去没有名字的山里",
    excerpt: "路的尽头没有景点，只有风、石头和一整个下午。",
    tag: "在路上",
    read: "4 分钟",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">未完手记<span>。</span></a>
        <nav aria-label="主导航">
          <a href="#writing">文章</a>
          <a href="#about">关于</a>
          <a className="nav-pill" href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">A PERSONAL FIELD NOTE · 个人博客</div>
        <h1>记录思考，<br />也记录<span>生活的纹理。</span></h1>
        <div className="hero-bottom">
          <p>这里收集我关于创造、技术与日常的观察。<br />不追逐热闹，只写值得留下的东西。</p>
          <div className="edition"><span>ISSUE</span><strong>08</strong><small>二〇二六 · 夏</small></div>
        </div>
        <div className="orbit" aria-hidden="true"><span>慢慢写 · 好好生活 · 保持好奇 · </span></div>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-label"><span>01</span> 本期置顶</div>
        <article className="feature-card">
          <div className="feature-visual" aria-hidden="true">
            <div className="sun" />
            <div className="horizon h1" />
            <div className="horizon h2" />
            <div className="visual-caption">SUMMER, 2026<br />31.2304° N</div>
          </div>
          <div className="feature-copy">
            <div className="meta"><span>思考札记</span><span>2026.08.18</span></div>
            <h2 id="featured-title">在不确定里，<br />练习做长期主义者</h2>
            <p>世界不断催促我们得出答案。但有些真正重要的事情，需要先允许自己停留在问题里。</p>
            <a href="#article-long-term">阅读全文 <span>→</span></a>
          </div>
        </article>
      </section>

      <section className="writing" id="writing" aria-labelledby="writing-title">
        <div className="section-head">
          <div><div className="section-label"><span>02</span> 最近写作</div><h2 id="writing-title">新鲜出炉的想法</h2></div>
          <p>共 24 篇 · 持续更新</p>
        </div>
        <div className="post-list">
          {posts.map((post, index) => (
            <article className="post" key={post.title}>
              <div className="post-no">0{index + 1}</div>
              <div className="post-main"><div className="meta"><span>{post.tag}</span><span>{post.date}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p></div>
              <div className="post-end"><span>{post.read}</span><a href={`#post-${index + 1}`} aria-label={`阅读：${post.title}`}>↗</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="topics" aria-labelledby="topics-title">
        <div className="section-label"><span>03</span> 沿途主题</div>
        <h2 id="topics-title">我在关心什么</h2>
        <div className="topic-grid">
          <a href="#thinking"><span>12 篇</span><strong>思考札记</strong><small>关于选择、成长与认知</small></a>
          <a href="#making"><span>08 篇</span><strong>创造与技术</strong><small>工具、产品和数字世界</small></a>
          <a href="#travel"><span>04 篇</span><strong>在路上</strong><small>散步、远方与偶然遇见</small></a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-mark">你<br />好</div>
        <div className="about-copy"><div className="section-label"><span>04</span> 关于这里</div><h2>我是一个相信<br />“慢慢来” 的人。</h2><p>白天做产品，晚上写字。喜欢旧书、长途散步和一切带着手工痕迹的东西。这个博客是我的公开笔记本，也是一封写给未来的长信。</p><a href="mailto:yuanfeng1897@outlook.com">和我聊聊 <span>↗</span></a></div>
      </section>

      <footer><a className="wordmark" href="#top">未完手记<span>。</span></a><p>持续写作，持续生活。<br />© 2026 · Built with curiosity.</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}

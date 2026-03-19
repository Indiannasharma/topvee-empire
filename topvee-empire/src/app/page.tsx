'use client';
import Image from 'next/image';

export default function Home() {
  const courses = [
    {
      title: "Crypto Futures Mastery",
      price: "$97 • One-time",
      description: "12 modules + lifetime signals + bonus templates",
      image: "https://altfins.com/wp-content/uploads/2023/11/three-black-crows-pattern-7-1024x576.png"
    },
    {
      title: "Live Signals Bootcamp",
      price: "$149/month",
      description: "VIP group + daily alerts + weekly live breakdowns",
      image: "https://preview.redd.it/pure-black-theme-as-advertised-on-the-website-v0-pr02b18rkszd1.jpeg?auto=webp&s=09d40e440af41e3e76d95f1fc521dcdd26a2da64"
    },
    {
      title: "1-on-1 Mentorship",
      price: "$499/month",
      description: "Personal Zoom calls + custom strategy + priority support",
      image: "https://thumbs.dreamstime.com/b/abstract-financial-chart-candlesticks-dynamic-abstract-representation-financial-market-chart-image-features-412203353.jpg"
    }
  ];

  const videos = [
    {
      title: "Weekend Asian Crypto Market Opening",
      embedId: "oBS8E-pzLyQ"
    },
    {
      title: "Weekend Crypto Market Analysis", 
      embedId: "wfyy6rs4BbA"
    },
    {
      title: "Crypto Market Analysis Live",
      embedId: "pI3eCnFRkwM"
    },
    {
      title: "Understanding The Market Movements",
      embedId: "pqwcY9Sam1I"
    }
  ];

  return (
    <div className="scroll-smooth bg-black text-white">
      <style jsx global>{`
        .neon { text-shadow: 0 0 20px #22ff88, 0 0 40px #22ff88; }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 0 30px rgba(34, 255, 136, 0.4); }
        .glitch {
          animation: glitch 1s linear infinite;
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          2% { transform: translate(-2px, 2px); }
          4% { transform: translate(-2px, -2px); }
          6% { transform: translate(2px, 2px); }
          8% { transform: translate(2px, -2px); }
          10% { transform: translate(0); }
        }
        .ticker-tape {
          background: linear-gradient(90deg, #000, #111, #000);
          border-top: 1px solid #22ff88;
          border-bottom: 1px solid #22ff88;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .ticker-content {
          display: inline-block;
          padding-left: 100%;
          animation: ticker 20s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .crypto-price {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          margin: 0 1rem;
          border: 1px solid #22ff88;
          border-radius: 999px;
          background: rgba(34, 255, 136, 0.1);
        }
        .price-up { color: #00ff88; }
        .price-down { color: #ff4444; }
      `}</style>

      {/* X LIVE STREAM BANNER */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-transparent border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="neon font-bold text-lg">🔴 X LIVE NOW</span>
              </div>
              <span className="text-emerald-400">Valentine is live on X discussing market analysis</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Join the conversation</span>
              <a href="https://x.com/Angelbeauties77" target="_blank" 
                 className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-all flex items-center space-x-2">
                <span>📱</span>
                <span>Watch Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#" className="neon text-xl font-bold">TOPVEE MEDIA</a>
              <div className="hidden md:flex space-x-6">
                <a href="#shop" className="hover:text-emerald-400 transition-colors">Courses</a>
                <a href="#videos" className="hover:text-emerald-400 transition-colors">Videos</a>
                <a href="#live" className="hover:text-emerald-400 transition-colors">Live</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/Angelbeauties77" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
                <span>📱</span>
              </a>
              <a href="https://youtube.com/@topveemedia" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
                <span>📺</span>
              </a>
              <a href="https://instagram.com/angelbeauties78" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
                <span>📸</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#22ff88_1px,transparent_1px)] bg-[length:30px_30px] opacity-10"></div>
        <div className="z-10 max-w-4xl px-6 text-center">
          <h1 className="neon mb-4 text-6xl font-bold md:text-8xl glitch">TOPVEE MEDIA</h1>
          <p className="mb-8 text-2xl text-emerald-400 md:text-4xl">Master Crypto • Trade Live • Build Wealth</p>
          <a href="#shop" className="inline-block rounded-2xl bg-emerald-500 px-12 py-5 text-xl font-bold text-black transition-all hover:bg-emerald-600 hover:scale-105">
            BROWSE COURSES →
          </a>
          <div className="mt-12 flex justify-center gap-8 text-4xl">
            <a href="https://x.com/Angelbeauties77" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
              <span>📱</span>
            </a>
            <a href="https://youtube.com/@topveemedia" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
              <span>📺</span>
            </a>
            <a href="https://instagram.com/angelbeauties78" target="_blank" className="hover:text-emerald-400 transition-colors" rel="noreferrer">
              <span>📸</span>
            </a>
          </div>
        </div>
      </header>

      {/* COURSES SHOP */}
      <section id="shop" className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 neon">Premium Trading Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card-hover rounded-3xl bg-zinc-900 p-8 border border-emerald-900">
                <Image src={course.image} alt={course.title} width={400} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="text-3xl font-bold mb-2">{course.title}</h3>
                <p className="text-emerald-400 mb-4">{course.price}</p>
                <p className="mb-6">{course.description}</p>
                <button className="w-full bg-emerald-500 text-black py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO LIBRARY */}
      <section id="videos" className="py-20 bg-black border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 neon">Trading Video Library</h2>
          <p className="text-center text-emerald-400 mb-10 text-xl">Latest live sessions & market analysis from @topveemedia</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="card-hover rounded-3xl overflow-hidden bg-zinc-900">
                <iframe 
                  className="w-full aspect-video" 
                  src={`https://www.youtube.com/embed/${video.embedId}`} 
                  title={video.title} 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
                <div className="p-4 text-center font-medium">{video.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/@topveemedia/videos" target="_blank" 
               className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-10 py-4 rounded-2xl text-lg transition-all">
              View Full Library on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* LIVE HUB */}
      <section id="live" className="py-20 bg-zinc-950 border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 neon">Live Trading & Analysis</h2>
          <p className="text-xl mb-6">Next session: Sunday Chart Breakdown – 8PM WAT</p>
          <div className="aspect-video bg-zinc-900 rounded-3xl mx-auto max-w-4xl flex items-center justify-center text-2xl border border-emerald-500">
            <div className="text-center">
              <div className="neon mb-4 text-3xl">🔴 LIVE NOW</div>
              <p>YouTube Live Embed Coming Soon</p>
              <p className="text-sm text-gray-400 mt-2">Will auto-play when you go live</p>
            </div>
          </div>
        </div>
      </section>

      {/* X TWEETS SECTION */}
      <section className="py-20 bg-black border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 neon">Latest from @Angelbeauties77</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tweet 1 */}
            <div className="bg-zinc-900 rounded-3xl p-6 border border-emerald-900">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">📱</span>
                </div>
                <div>
                  <div className="font-bold">@Angelbeauties77</div>
                  <div className="text-sm text-gray-400">2 hours ago</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Bitcoin is showing strong support at $60k. The next breakout could push us towards $70k. 
                Always manage your risk and never invest more than you can afford to lose. #Crypto #Bitcoin
              </p>
              <div className="flex gap-4 text-emerald-400">
                <span><i className="far fa-heart"></i> 1.2K</span>
                <span><i className="far fa-comment"></i> 89</span>
                <span><i className="far fa-retweet"></i> 234</span>
              </div>
            </div>

            {/* Tweet 2 */}
            <div className="bg-zinc-900 rounded-3xl p-6 border border-emerald-900">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">📱</span>
                </div>
                <div>
                  <div className="font-bold">@Angelbeauties77</div>
                  <div className="text-sm text-gray-400">Yesterday</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Just finished another successful trading session with our VIP members. 
                The strategies we are using are consistently profitable. Join us and learn the secrets! #Trading #Crypto
              </p>
              <div className="flex gap-4 text-emerald-400">
                <span><i className="far fa-heart"></i> 856</span>
                <span><i className="far fa-comment"></i> 45</span>
                <span><i className="far fa-retweet"></i> 156</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="https://x.com/Angelbeauties77" target="_blank" 
               className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-3 rounded-2xl transition-all">
              Follow on X →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="neon mb-8 text-4xl font-bold">Why Choose TOPVEE MEDIA?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6">
              <div className="neon mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 text-xl font-bold">Expert Guidance</h3>
              <p className="text-gray-400">Learn from industry professionals with years of trading experience.</p>
            </div>
            <div className="p-6">
              <div className="neon mb-4 text-4xl">📈</div>
              <h3 className="mb-2 text-xl font-bold">Proven Strategies</h3>
              <p className="text-gray-400">Access tested and proven trading strategies that work in any market.</p>
            </div>
            <div className="p-6">
              <div className="neon mb-4 text-4xl">🛡️</div>
              <h3 className="mb-2 text-xl font-bold">Risk Management</h3>
              <p className="text-gray-400">Learn how to protect your capital and minimize losses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CRYPTO PRICE TICKER */}
      <div className="ticker-tape">
        <div className="ticker-content">
          <div className="crypto-price">
            <span className="neon">BTC</span>
            <span className="price-up">$67,842</span>
            <span className="text-green-400">▲ 2.3%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">ETH</span>
            <span className="price-up">$4,231</span>
            <span className="text-green-400">▲ 1.8%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">SOL</span>
            <span className="price-down">$189</span>
            <span className="text-red-400">▼ 0.5%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">BNB</span>
            <span className="price-up">$612</span>
            <span className="text-green-400">▲ 1.2%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">XRP</span>
            <span className="price-down">$0.82</span>
            <span className="text-red-400">▼ 0.8%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">ADA</span>
            <span className="price-up">$0.45</span>
            <span className="text-green-400">▲ 3.1%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">DOT</span>
            <span className="price-down">$7.23</span>
            <span className="text-red-400">▼ 1.4%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">AVAX</span>
            <span className="price-up">$38.76</span>
            <span className="text-green-400">▲ 2.7%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">LINK</span>
            <span className="price-up">$18.45</span>
            <span className="text-green-400">▲ 0.9%</span>
          </div>
          <div className="crypto-price">
            <span className="neon">MATIC</span>
            <span className="price-down">$0.98</span>
            <span className="text-red-400">▼ 1.1%</span>
          </div>
        </div>
      </div>

      <footer className="bg-zinc-950 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="neon mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-gray-400">Join thousands of successful traders who have transformed their financial future with TOPVEE MEDIA.</p>
          <button className="rounded-2xl bg-emerald-500 px-8 py-4 text-xl font-bold text-black transition-all hover:bg-emerald-600 hover:scale-105">
            GET STARTED TODAY
          </button>
          <div className="mt-8 flex justify-center gap-6 text-gray-500">
            <span>© 2024 TOPVEE MEDIA. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

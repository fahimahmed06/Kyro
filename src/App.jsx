export default function KyroWebsite() {
  const services = [
    'V-Bucks', 'Crew Pack', 'X-Box Game Pass', 'Netflix', 'Disney+', 'Prime Video', 'Valorant VP', 'Canva Pro', 'Freepik Premium', 'YouTube Premium', 'Crunchyroll', 'NordVPN'
  ];

  const games = ['Fortnite', 'Valorant', 'PUBG', 'Minecraft', 'Call of Duty', 'EA FC', 'GTA V', 'Rocket League'];

  const prices = [
    {
      category: '🎬 STREAMING SERVICES',
      items: [
        ['Netflix', '450 PKR'],
        ['Disney+', '499 PKR'],
        ['Prime Video', '299 PKR'],
        ['Hulu', '399 PKR'],
        ['HBO Max', '399 PKR'],
        ['Hotstar+', '450 PKR'],
        ['Zee5', '399 PKR'],
        ['Voot', '450 PKR'],
        ['Sony Liv', '399 PKR'],
        ['Ullu', '399 PKR'],
        ['ALT Balaji', '399 PKR'],
        ['ESPN+', '399 PKR'],
        ['Crunchyroll', '399 PKR']
      ]
    },
    {
      category: '📱 PREMIUM APPS & TOOLS',
      items: [
        ['YouTube Premium', '399 PKR'],
        ['Canva Pro', '399 PKR'],
        ['Freepik Premium', '899 PKR'],
        ['Udemy', '399 PKR'],
        ['Skillshare', '350 PKR'],
        ['NordVPN', '399 PKR'],
        ['Windscribe', '299 PKR'],
        ['Course Hero', '899 PKR']
      ]
    },
    {
      category: '🎮 GAMING SERVICES',
      items: [
        ['Fortnite Crew Pack', '899 PKR']
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#06070a] text-white overflow-hidden scroll-smooth relative">
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .gradient-text {
          background: linear-gradient(to right, #d4af37, #f5d06f, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hover-card {
          transition: all 0.35s ease;
        }

        .hover-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 20px 40px rgba(168,85,247,0.15);
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,#050505,#0a0a0f,#050505)]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/mnt/data/logo.jpeg" 
              alt="KYRO Logo" 
              className="w-14 h-14 object-contain rounded-xl bg-white p-1 shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-black gradient-text">KYRO</h1>
            <p className="text-xs text-gray-400 tracking-[4px]">PREMIUM DIGITAL SERVICES</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#games" className="hover:text-white transition">Games</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Trusted Digital Marketplace
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Level Up Your <span className="gradient-text">Digital World</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Kyro delivers premium gaming top-ups, streaming subscriptions, VPNs, and digital tools at affordable prices with fast delivery and trusted support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/+971566557046"
                target="_blank"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-700 font-semibold hover:scale-105 transition duration-300 shadow-2xl"
              >
                Order Now
              </a>

              <a
                href="#pricing"
                className="px-7 py-4 rounded-2xl glass font-semibold hover:bg-white/10 transition duration-300"
              >
                View Prices
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="glass rounded-[40px] p-8 w-full max-w-lg border border-purple-500/20 shadow-2xl" style={{ animation: 'float 5s ease-in-out infinite' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Popular Services</h3>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">Online</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {services.map((item, index) => (
                  <div key={index} className="glass rounded-2xl p-4 text-center hover-card">
                    <p className="font-semibold text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4">Games We Support</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Instant access to your favorite gaming services and top-ups.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div key={index} className="hover-card glass rounded-3xl p-8 text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700 mb-5 flex items-center justify-center text-2xl font-black group-hover:rotate-6 transition duration-300">
                  {game.charAt(0)}
                </div>
                <h3 className="font-bold text-lg">{game}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4 gradient-text">Our Services</h2>
            <p className="text-gray-400">Premium subscriptions, gaming packs, tools & more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="hover-card glass rounded-3xl p-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl font-black mb-5">
                  ✦
                </div>
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fast delivery, premium quality, secure purchase and reliable support for all your digital needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="glass rounded-[32px] p-10 hover-card">
            <h2 className="text-4xl font-black mb-6">Why Choose Us?</h2>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center text-blue-400 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Instant Delivery</h4>
                  <p>Most orders are completed quickly with smooth and secure processing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-purple-400 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Affordable Pricing</h4>
                  <p>Competitive prices for premium gaming and streaming services.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">03</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Trusted Support</h4>
                  <p>Friendly support available through WhatsApp, Instagram, and Discord.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="glass rounded-[32px] p-10 hover-card">
            <h2 className="text-4xl font-black mb-6">About Us</h2>
            <p className="text-gray-300 leading-relaxed mb-5">
              Kyro is a premium digital marketplace built for gamers, creators, and entertainment lovers. We provide affordable access to gaming top-ups, streaming subscriptions, premium tools, and online services.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Our mission is simple — deliver trusted digital products with fast service, clean support, and secure transactions. Whether you need V-Bucks, Valorant VP, Netflix, Canva Pro, or VPN subscriptions, Kyro has you covered.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black gradient-text">24/7</h3>
                <p className="text-sm text-gray-400">Customer Support</p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black gradient-text">100%</h3>
                <p className="text-sm text-gray-400">Trusted Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4">Payment Methods</h2>
            <p className="text-gray-400">Payment details will be added here later.</p>
          </div>

          <div className="glass rounded-[32px] border border-dashed border-white/20 min-h-[220px] flex items-center justify-center text-gray-500 text-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-6">
              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-2xl font-black mb-4">S</div>
                <h3 className="font-bold text-lg text-yellow-300">Sadapay</h3>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-2xl font-black mb-4">E</div>
                <h3 className="font-bold text-lg text-yellow-300">Easypaisa</h3>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-2xl font-black mb-4">B</div>
                <h3 className="font-bold text-lg text-yellow-300">Binance</h3>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-2xl font-black mb-4">e&</div>
                <h3 className="font-bold text-lg text-yellow-300">e& money</h3>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-2xl font-black mb-4">D</div>
                <h3 className="font-bold text-lg text-yellow-300">Dupay</h3>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center hover-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-700 flex items-center justify-center text-2xl font-black mb-4">bK</div>
                <h3 className="font-bold text-lg text-yellow-300">bKash</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 gradient-text">Price List</h2>
            <p className="text-gray-400">Affordable prices for all premium digital products.</p>
          </div>

          <div className="space-y-10">
            {prices.map((group, index) => (
              <div key={index} className="glass rounded-[32px] p-8 hover-card">
                <h3 className="text-3xl font-black mb-8">{group.category}</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between glass rounded-2xl p-5">
                      <span className="font-semibold">{item[0]}</span>
                      <span className="text-yellow-300 font-bold">{item[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 glass rounded-3xl p-6 text-center text-gray-300 border border-purple-500/20">
            <span className="font-semibold text-white">Note:</span> For orders contact us on WhatsApp / Instagram or join our Discord Server.
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center glass rounded-[40px] p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-5">Contact Us</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to order? Reach out through your favorite platform and get your premium services instantly.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://www.instagram.com/kyro_pk9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition duration-300 shadow-xl"
              >
                Instagram
              </a>

              <a
                href="https://discord.gg/H5hdVzWtAn"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-indigo-600 font-bold hover:scale-105 transition duration-300 shadow-xl"
              >
                Discord
              </a>

              <a
                href="https://wa.me/+971566557046"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-green-600 font-bold hover:scale-105 transition duration-300 shadow-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 KYRO — Premium Digital Services. All Rights Reserved.
      </footer>
    </div>
  );
}

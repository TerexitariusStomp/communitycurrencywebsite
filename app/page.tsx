import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          {/* Left side - Tropical foliage background */}
          <div
            className="w-1/2"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-10-11_13-54-53-cqyA2jP4UdDiAQhplSgnw2aHoxZKmM.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Right side - Central Bank building */}
          <div
            className="w-1/2"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/centralbank-IrIfUqwBByBhFJqxmLnb9Y7LkxQ7W4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              TRANSFORMING BRAZIL'S FINANCIAL INCLUSION
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              Web3-enabled community currencies creating transparent, scalable infrastructure for 27+ million unbanked
              Brazilians through proven systems enhanced by blockchain technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Get Involved
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Storm Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">THE PERFECT STORM</h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
            Brazil has a unique convergence creating a once-in-a-generation opportunity for financial transformation:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">180+ COMMUNITY CURRENCIES</h3>
                <p className="text-neutral-600">30 years of proven operation serving millions across Brazil</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">PIX SUCCESS</h3>
                <p className="text-neutral-600">93% adult adoption, 63.4B transactions in 2024</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">GOVERNMENT BLOCKCHAIN</h3>
                <p className="text-neutral-600">Rede Blockchain Brasil entering production</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">REGULATORY CLARITY</h3>
                <p className="text-neutral-600">Crypto law framework and Central Bank support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Exclusion Gap Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">THE FINANCIAL EXCLUSION GAP</h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl leading-relaxed">
            Despite Pix's remarkable success, significant gaps remain in Brazil's financial system. Traditional fintech
            focuses on profitable urban markets, leaving rural and low-income populations underserved.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-6xl md:text-7xl font-bold text-black mb-2">34M</div>
                <h3 className="text-xl font-bold mb-2 text-black">COMPLETELY UNBANKED</h3>
                <p className="text-neutral-600">Adults without any banking access</p>
              </div>

              <div>
                <div className="text-6xl md:text-7xl font-bold text-black mb-2">79%</div>
                <h3 className="text-xl font-bold mb-2 text-black">UNDERBANKED</h3>
                <p className="text-neutral-600">Of banked Brazilians lack full services</p>
              </div>

              <div>
                <div className="text-6xl md:text-7xl font-bold text-black mb-2">17M</div>
                <h3 className="text-xl font-bold mb-2 text-black">NO BRANCH ACCESS</h3>
                <p className="text-neutral-600">In municipalities without bank branches</p>
              </div>

              <div>
                <div className="text-6xl md:text-7xl font-bold text-black mb-2">80%</div>
                <h3 className="text-xl font-bold mb-2 text-black">FINANCIAL STRESS</h3>
                <p className="text-neutral-600">Face challenges with low health scores</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/community-currency-notes.jpg"
                alt="Community currency banknotes in Brazil"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Embed Above Community Currencies */}
      <section className="py-10 bg-white">
        <div className="container px-4">
          <div className="relative w-full max-w-5xl mx-auto aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/DyGlPWfmDjA?si=Qi3aQlVo6br_RH35"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Community Currencies Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Community Currencies: Brazil's Hidden Infrastructure
          </h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
            A proven ecosystem operating for three decades with remarkable results in local economic development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">180+ Active Currencies</h3>
                <p className="text-neutral-600">Managed by community banks across Brazil</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">30 Years Operating</h3>
                <p className="text-neutral-600">Proven track record with legal frameworks</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">93% Local Spending</h3>
                <p className="text-neutral-600">Banco Palmas increased from 20% to 93%</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">120+ Digital Platform</h3>
                <p className="text-neutral-600">EDinheiro supports currencies with mobile apps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Web3 Adds Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Web3 Adds</h2>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Blockchain enhances proven systems without disrupting them, bringing modern infrastructure to established
            community currencies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-800 rounded-lg">
              <Shield className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-neutral-300">Immutable audit trails prevent corruption while preserving privacy</p>
            </div>

            <div className="p-6 bg-neutral-800 rounded-lg">
              <Zap className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-3">Programmability</h3>
              <p className="text-neutral-300">Smart contracts automate compliance and enable microcredit pools</p>
            </div>

            <div className="p-6 bg-neutral-800 rounded-lg">
              <TrendingUp className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3">Scalability</h3>
              <p className="text-neutral-300">
                Deployment time reduced from years to months across 5,570 municipalities
              </p>
            </div>

            <div className="p-6 bg-neutral-800 rounded-lg">
              <Users className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">Interoperability</h3>
              <p className="text-neutral-300">
                Multiple currencies interact on shared infrastructure, creating regional networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aratu Pilot Section */}
      <section className="py-20 bg-blue-50">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Aratu Pilot: Proof of Concept</h2>
          <p className="text-xl text-neutral-700 mb-12 font-semibold">First Blockchain Community Currency</p>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
            Launched in Indiaroba (18,000 residents) on Brazil's government RBB network, demonstrating technical
            feasibility and real-world impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <p className="text-neutral-700">306+ merchants accepting digital payments</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <p className="text-neutral-700">Transparent reserve backing with automated compliance</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <p className="text-neutral-700">Zero-downtime operation matching traditional payment speed</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <p className="text-neutral-700">Targeting 20% to 60%+ local circulation increase</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <p className="text-neutral-700">2-3% fees reinvested locally vs. Visa/Mastercard extraction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leader Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">The Leader: Camila Rioja</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Legal Mastery</h3>
                <p className="text-neutral-600">
                  Decade handling $135B+ mergers, Lava Jato anti-corruption case, King's College London postgraduate
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Web3 Leadership</h3>
                <p className="text-neutral-600">
                  Former Celo Foundation Partner, deployed regenerative finance across Latin America, 25+ major
                  conference talks
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">Community Currency Expertise</h3>
                <p className="text-neutral-600">
                  30 years of relationships with Brazil's community banking network, government partnerships through RBB
                  validator status
                </p>
              </CardContent>
            </Card>
          </div>

          <blockquote className="border-l-4 border-neutral-900 pl-6 py-4 bg-neutral-50 rounded-r-lg">
            <p className="text-xl text-neutral-700 italic mb-4 leading-relaxed">
              "This isn't a new startup idea. It's an existing, functioning ecosystem that's been working for over 30
              years. Our job is not to reinvent the wheel. It's to bring transparency and modern governance to a proven
              model."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-20 bg-green-50">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Multi-Billion Real Revenue Potential</h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
            Community currencies backed by transparent reserves function as localized stablecoins with multiple revenue
            streams.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Primary Revenue</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Reserve interest income: R$2-10B in reserves earning 11-12% annually from Brazilian Treasury
                  securities. 30-40% to implementation, remainder to communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Secondary Streams</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Transaction fees, blockchain-as-a-service (R$5k-25k monthly per municipality), validator rewards,
                  consulting, data analytics, grant funding ($500k-5M).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scaling Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">Scaling to National Infrastructure</h2>

          <div className="space-y-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black">Phase 1: Proven Adopters</h3>
                <p className="text-neutral-700">
                  6-18 months: Recife (1.5M), São Cristóvão (95k), Aracaju (665k), Maricá (165k) with existing EDinheiro
                  currencies
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black">Phase 2: Network Effects</h3>
                <p className="text-neutral-700">
                  18-36 months: Cross-municipal integration, government service connection, shared credit pools
                  diversifying risk
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black">Phase 3: National Infrastructure</h3>
                <p className="text-neutral-700">
                  3-5 years: CBDC integration, community currencies as retail distribution for Brazil's Drex, Latin
                  American expansion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Window Is Open</h2>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl leading-relaxed">
            Brazil's unique convergence creates a once-in-a-generation opportunity that is time-limited. Transform
            30-year ecosystem using blockchain, impacting 27+ million unbanked Brazilians while generating hundreds of
            millions in sustainable revenue.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-white">01</div>
                <p className="text-neutral-300">Secure funding for expansion to 5-10 municipalities</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-white">02</div>
                <p className="text-neutral-300">Formalize partnerships with target municipalities</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-white">03</div>
                <p className="text-neutral-300">Develop standardized deployment toolkit</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-white">04</div>
                <p className="text-neutral-300">Build core technical team for nationwide implementation</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-white">05</div>
                <p className="text-neutral-300">Establish advisory board with government and international partners</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl mb-6">
              <strong>Contact:</strong> Camila Rioja, President, Plexos Institute @mila_rioja
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Connect Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
                <a href="https://www.forbes.com/sites/astanley/2025/07/31/social-currencies-in-brazil-blockchains-newest-frontier/" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container px-4 text-center"></div>
      </footer>
    </div>
  )
}

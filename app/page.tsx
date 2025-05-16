import Link from "next/link"
import {
  Mic,
  Heart,
  Database,
  BarChart3,
  Zap,
  Clock,
  DollarSign,
  Globe,
  ArrowUpRight,
  MessageSquare,
  Brain,
  Shield,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FAQAccordion } from "@/components/faq-accordion"

export default function Home() {
  const faqs = [
    {
      question: "How does V.A.R.I.A compare to human agents?",
      answer:
        "V.A.R.I.A offers 24/7 availability, consistent service quality, and can handle thousands of interactions simultaneously. While human agents excel at complex problem-solving and empathy, V.A.R.I.A provides faster response times, multilingual support, and significant cost savings while maintaining a natural, conversational experience.",
    },
    {
      question: "Can I customize the voice and personality of my AI assistant?",
      answer:
        "Yes, V.A.R.I.A's Persona System allows you to fully customize the voice, tone, personality, and communication style of your AI assistant to align with your brand identity. You can select from various pre-built personas or create a custom one tailored to your specific business needs and customer expectations.",
    },
    {
      question: "What systems can V.A.R.I.A integrate with?",
      answer:
        "V.A.R.I.A integrates seamlessly with most major CRM platforms (Salesforce, HubSpot, Zoho), helpdesk systems (Zendesk, Freshdesk), e-commerce platforms (Shopify, WooCommerce), communication tools (Slack, Microsoft Teams), and custom APIs. Our flexible integration framework allows connection to virtually any system with an API.",
    },
    {
      question: "How secure is the platform?",
      answer:
        "V.A.R.I.A employs bank-grade encryption for all data, is fully compliant with GDPR, HIPAA, and other regulatory standards, and undergoes regular security audits. We implement role-based access controls, secure data storage, and maintain SOC 2 compliance to ensure your data remains protected.",
    },
    {
      question: "What languages does V.A.R.I.A support?",
      answer:
        "V.A.R.I.A supports over 30 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Mandarin, Korean, Arabic, and many more. Each language includes support for regional accents and dialects, providing natural-sounding interactions for global customers.",
    },
    {
      question: "How long does it take to set up V.A.R.I.A?",
      answer:
        "Most clients can deploy V.A.R.I.A within 2-4 weeks. Our standard implementation includes system integration, voice personality customization, and training. Enterprise deployments with custom integrations may take 4-8 weeks depending on complexity.",
    },
    {
      question: "What happens when the AI can't resolve an issue?",
      answer:
        "When V.A.R.I.A encounters a complex issue it can't resolve, it seamlessly transfers the conversation to a human agent along with the full context of the interaction. The system is designed to recognize its limitations and escalate appropriately, ensuring customers always receive the help they need.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 w-6 h-6 rounded"></div>
            <span className="font-bold">V.A.R.I.A</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm hover:text-gray-300">
              Features
            </Link>
            <Link href="#discover" className="text-sm hover:text-gray-300">
              Discover
            </Link>
            <Link href="#gallery" className="text-sm hover:text-gray-300">
              Gallery
            </Link>
            <Link href="#templates" className="text-sm hover:text-gray-300">
              Templates
            </Link>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Get Started</Button>
        </div>
      </header>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl h-[600px] flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Voice-Activated Assistant for Real-Time Interaction</h1>
          <p className="text-gray-400 mb-8 text-lg">
            Transform your business with AI-powered voice assistants that handle sales, customer care, and order-taking
            with human-like precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gray-700 hover:bg-gray-600 text-white">Get Started</Button>
            <Button variant="outline" className="text-black border-gray-700 hover:bg-gray-800 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-4xl font-bold">500ms</span>
              <span className="text-gray-400 text-sm">Response Latency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-4xl font-bold">99%</span>
              <span className="text-gray-400 text-sm">Goal Completion Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-4xl font-bold">99.9%</span>
              <span className="text-gray-400 text-sm">System Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-4xl font-bold">&lt;0.1%</span>
              <span className="text-gray-400 text-sm">Error Rate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Benefits</h2>
          <p className="text-center text-gray-500 mb-12">
            V.A.R.I.A delivers tangible advantages that transform how businesses interact with customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black p-2 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold">Cost Reduction</h3>
              </div>
              <p className="text-sm text-gray-400">
                Reduce operational costs by up to 65% compared to traditional call centers, while maintaining high
                quality customer interactions.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black p-2 rounded-full">
                  <Globe className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Multilingual Support</h3>
              </div>
              <p className="text-sm text-gray-400">
                Communicate with customers in over 9 languages with seamless voice and text translation for global
                reach.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black p-2 rounded-full">
                  <ArrowUpRight className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-bold">Scalability</h3>
              </div>
              <p className="text-sm text-gray-400">
                Handle thousands of interactions simultaneously without quality degradation or increased wait times.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black p-2 rounded-full">
                  <MessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-bold">Sentiment-Aware</h3>
              </div>
              <p className="text-sm text-gray-400">
                Detect and respond to emotional cues in the customer's voice for satisfaction and resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Core Features</h2>
          <p className="text-center text-gray-500 mb-12">
            V.A.R.I.A delivers tangible advantages that transform how businesses interact with customers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Mic className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Multilingual Voice</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Natural-sounding voices in over 30 languages with regional accents and dialects.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Heart className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Emotion-aware TTS</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Voice synthesis that adapts tone and cadence based on conversation context.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Brain className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Persona System</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Create custom AI personalities tailored to your brand and customer expectations.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Database className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Long-Term Memory</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Assistants remember past interactions for more personalized customer experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Advanced Analytics</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Gain insights from every interaction with detailed sentiment analysis and conversion metrics.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Real-Time Processing</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Ultra-fast response times with edge computing technology for seamless conversations.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Globe className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Multilingual Support</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Connect with customers globally with support for over 30 languages and regional dialects.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Enterprise Security</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Bank-grade encryption and compliance with GDPR, HIPAA, and other regulatory standards.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Headphones className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">Seamless Handoff</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Intelligent escalation to human agents when needed, with complete conversation context.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 group relative">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-black p-4 rounded-full">
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">24/7 Availability</h3>
              <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-300">
                  Always-on service without breaks, holidays, or staffing concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="border rounded-lg p-6 flex flex-col">
              <div className="mb-6">
                <h3 className="text-sm text-gray-500">Personal</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">$5</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">100 Calls Per/Day</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Insights Panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Share Features</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            <div className="border rounded-lg p-6 flex flex-col">
              <div className="mb-6">
                <h3 className="text-sm text-gray-500">Professional</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">$10</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">1000 Calls Per/Day</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Insights Panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Share Features</span>
                </li>
              </ul>

              <Button className="w-full bg-black text-white hover:bg-gray-800">Get Started</Button>
            </div>

            {/* Business Plan */}
            <div className="border rounded-lg p-6 flex flex-col">
              <div className="mb-6">
                <h3 className="text-sm text-gray-500">Business</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">$50</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">10000 Calls Per/Day</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Insights Panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Share Features</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about V.A.R.I.A and how it can transform your business.
          </p>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-purple-600 w-6 h-6 rounded"></div>
                <span className="font-bold text-xl">V.A.R.I.A</span>
              </div>
              <p className="text-gray-400 text-sm">Voice-Activated Assistant for Real-Time Interaction & Assistance</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-gray-400 hover:text-white text-sm">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-gray-400 hover:text-white text-sm">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#documentation" className="text-gray-400 hover:text-white text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#api" className="text-gray-400 hover:text-white text-sm">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="text-gray-400 hover:text-white text-sm">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-gray-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-gray-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 V.A.R.I.A. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

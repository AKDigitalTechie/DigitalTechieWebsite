import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Palette,
  Globe,
  Smartphone,
  Zap,
  Users,
  ChevronRight,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  Sparkles,
  Target,
  Layers,
  PenTool,
  Layout,
  Monitor,
  Briefcase,
  FileText,
  TrendingUp,
  Phone,
  Copy,
  Check,
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      <HeroSection scrollTo={scrollTo} />
      <AboutSection visibleElements={visibleElements} />
      <ServicesSection visibleElements={visibleElements} />
      <WhyChooseSection visibleElements={visibleElements} />
      <PortfolioSection visibleElements={visibleElements} />
      <TestimonialsSection visibleElements={visibleElements} />
      <ContactSection visibleElements={visibleElements} />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  isScrolled,
  activeSection,
  scrollTo,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  activeSection: string;
  scrollTo: (id: string) => void;
}) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-brown-800">
              Digital Techie
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-gold-600'
                    : 'text-brown-600 hover:text-brown-800'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-orange-500" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brown-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-3 bg-white rounded-2xl p-4 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-gold-400 to-orange-500 text-white'
                      : 'text-brown-600 hover:bg-beige-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gold-200/50 to-orange-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-beige-200/50 to-beige-300/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-gold-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-brown-600">
                Available for new projects
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brown-800 leading-tight animate-fade-in-up">
                Design.{' '}
                <span className="text-gradient">Develop.</span>
                <br />
                Grow.
              </h1>

              <p className="text-lg sm:text-xl text-brown-600 max-w-lg animate-fade-in-up delay-200">
                Helping businesses build a strong digital presence through design,
                development, and digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollTo('services')}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-200 transition-all"
              >
                View Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-brown-700 rounded-full font-medium border-2 border-brown-200 hover:border-gold-400 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-800">100+</div>
                <div className="text-sm text-brown-500">Projects</div>
              </div>
              <div className="w-px h-12 bg-brown-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-800">50+</div>
                <div className="text-sm text-brown-500">Clients</div>
              </div>
              <div className="w-px h-12 bg-brown-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-800">3+</div>
                <div className="text-sm text-brown-500">Years</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300/40 to-orange-300/40 rounded-3xl transform rotate-3" />
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital design workspace"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-slide-in-left delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brown-800">Goal-Oriented</div>
                    <div className="text-xs text-brown-500">Results-driven design</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-slide-in-right delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-beige-300 to-gold-400 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brown-800">Creative</div>
                    <div className="text-xs text-brown-500">Unique solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ visibleElements }: { visibleElements: Set<string> }) {
  const isVisible = visibleElements.has('about');

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="about"
          data-animate
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 to-orange-200/30 rounded-3xl transform -rotate-2" />
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="relative rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-gold-600">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800">
              About Digital Techie
            </h2>

            <p className="text-lg text-brown-600 leading-relaxed">
              I help startups, businesses, and creators transform their ideas into
              impactful digital experiences through design and technology.
            </p>

            <p className="text-brown-600 leading-relaxed">
              With a passion for creativity and attention to detail, I specialize in
              crafting stunning visual identities and high-performance websites that
              not only look beautiful but also deliver results. Every project is
              approached with dedication, ensuring your vision is brought to life in
              the most impactful way possible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-gradient mb-1">100+</div>
                <div className="text-sm text-brown-500">Projects Completed</div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-brown-500">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ visibleElements }: { visibleElements: Set<string> }) {
  const services = [
    { icon: Palette, title: 'Logo Design', desc: 'Unique & memorable brand marks' },
    { icon: Layers, title: 'Brand Identity Design', desc: 'Complete visual identity systems' },
    { icon: Smartphone, title: 'Social Media Creatives', desc: 'Engaging social content' },
    { icon: FileText, title: 'Poster & Flyer Design', desc: 'Eye-catching print materials' },
    { icon: Monitor, title: 'Thumbnail Design', desc: 'Click-worthy video thumbnails' },
    { icon: Layout, title: 'UI/UX Design', desc: 'User-centered interfaces' },
    { icon: Globe, title: 'Landing Pages', desc: 'High-converting single pages' },
    { icon: Briefcase, title: 'Portfolio Websites', desc: 'Showcase your best work' },
    { icon: PenTool, title: 'One Page Business Websites', desc: 'Professional online presence' },
    { icon: Target, title: 'Website Development', desc: 'Custom web solutions' },
    { icon: FileText, title: 'Resume Design', desc: 'Stand out to employers' },
    { icon: Layers, title: 'Presentation Design', desc: 'Impressive slide decks' },
    { icon: TrendingUp, title: 'Social Media Management', desc: 'Strategic content planning' },
    { icon: Target, title: 'Digital Marketing Support', desc: 'Growth-focused strategies' },
  ];

  const isVisible = visibleElements.has('services');

  return (
    <section id="services" className="py-20 lg:py-32 relative bg-gradient-to-b from-beige-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="services"
          data-animate
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
            <span className="text-sm font-medium text-gold-600">What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-6">
            Services
          </h2>
          <p className="text-lg text-brown-600">
            From branding to development, I offer comprehensive digital solutions
            tailored to elevate your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 card-shadow cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:from-gold-200 group-hover:to-orange-200">
                <service.icon className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-800 mb-2 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-brown-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ visibleElements }: { visibleElements: Set<string> }) {
  const features = [
    { icon: Sparkles, title: 'Creative Design', desc: 'Unique and innovative solutions' },
    { icon: Layers, title: 'Modern Development', desc: 'Latest technologies & practices' },
    { icon: Target, title: 'Affordable Solutions', desc: 'Quality within your budget' },
    { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times' },
    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Responsive on all devices' },
    { icon: Users, title: 'Client Focused', desc: 'Your satisfaction is my priority' },
  ];

  const isVisible = visibleElements.has('why-choose');

  return (
    <section id="why-choose" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="why-choose"
          data-animate
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
            <span className="text-sm font-medium text-gold-600">Why Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-6">
            Why Choose Me
          </h2>
          <p className="text-lg text-brown-600">
            I combine creativity with strategy to deliver exceptional results that
            help your business grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 card-shadow ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-gold-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-brown-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection({ visibleElements }: { visibleElements: Set<string> }) {
  const projects = [
    {
      title: 'Modern Coffee Brand Logo',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Restaurant Landing Page',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1517248135467?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Fitness Flyer Design',
      category: 'Print Design',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Personal Portfolio Website',
      category: 'Development',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Brand Identity Project',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/6354980/pexels-photo-6354980.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const isVisible = visibleElements.has('portfolio');

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-beige-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="portfolio"
          data-animate
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
            <span className="text-sm font-medium text-gold-600">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-brown-600">
            A showcase of my recent projects across various industries and design
            disciplines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white card-shadow ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 lg:hidden">
                <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-brown-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ visibleElements }: { visibleElements: Set<string> }) {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Startup Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Digital Techie transformed our brand completely. The attention to detail and creative approach exceeded our expectations. Highly recommended!',
    },
    {
      name: 'James Anderson',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The website Digital Techie created for us has significantly increased our online orders. Professional work with quick turnaround time.',
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Working with Digital Techie was a game-changer. The social media designs and brand identity work helped us stand out in a crowded market.',
    },
  ];

  const isVisible = visibleElements.has('testimonials');

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="testimonials"
          data-animate
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
            <span className="text-sm font-medium text-gold-600">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-brown-600">
            Don't just take my word for it - hear from some of my satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 card-shadow ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-brown-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-brown-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-brown-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ visibleElements }: { visibleElements: Set<string> }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hi Digital Techie,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\nI found your website and would like to know more about your services.`;

    const whatsappUrl = `https://wa.me/919739708657?text=${encodeURIComponent(message)}`;

    showToast('Opening WhatsApp...');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  const isVisible = visibleElements.has('contact');

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-beige-50/30 to-transparent relative">
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 animate-fade-in">
          <div className="bg-brown-800 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contact"
          data-animate
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="text-sm font-medium text-gold-600">Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-brown-600 mb-8">
              Ready to start your project? I'd love to hear about your ideas and help
              bring them to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-brown-500">WhatsApp</div>
                  <div className="font-medium text-brown-800">+91 9739708657</div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919739708657', 'phone')}
                  className="p-2 rounded-lg hover:bg-beige-100 transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-brown-400" />
                  )}
                </button>
              </div>

              <a
                href="mailto:akdigitaltechie@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-beige-300 to-gold-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-brown-500">Email</div>
                  <div className="font-medium text-brown-800">akdigitaltechie@gmail.com</div>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard('akdigitaltechie@gmail.com', 'email');
                  }}
                  className="p-2 rounded-lg hover:bg-beige-100 transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-brown-400" />
                  )}
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-brown-200">
              <div className="text-sm text-brown-500 mb-4">Connect with me</div>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/digital._.techie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-brown-500">Instagram</div>
                    <div className="text-sm font-medium text-brown-800">@digital._.techie</div>
                  </div>
                </a>

                <a
                  href="https://facebook.com/digital._.techie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-brown-500">Facebook</div>
                    <div className="text-sm font-medium text-brown-800">Digital Techie</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-beige-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-beige-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-beige-50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-200 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <a
                  href="https://wa.me/919739708657?text=Hi%20Digital%20Techie%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-brown-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">Digital Techie</span>
            </div>
            <p className="text-brown-300 mb-4">
              Design • Develop • Grow
            </p>
            <p className="text-sm text-brown-400">
              Helping businesses build a strong digital presence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-brown-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/digitaltechie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/digitaltechie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/digitaltechie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-8 text-center text-sm text-brown-400">
          © {new Date().getFullYear()} Digital Techie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

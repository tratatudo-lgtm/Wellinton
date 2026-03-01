import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Heart, 
  ShieldCheck, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  Menu,
  X,
  Instagram,
  Linkedin,
  Clock,
  User,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-cream/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-2xl font-serif font-medium tracking-tight text-brand-sage">Cícera Alves</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe -mt-1">Psicologia Clínica</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-ink/70 hover:text-brand-sage transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#agendar" 
            className="bg-brand-sage text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-sage/90 transition-all shadow-md hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-sage" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-sage/10 p-6 flex flex-col space-y-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif text-brand-ink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#agendar" 
            className="bg-brand-sage text-white px-6 py-3 rounded-full text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Agendar Consulta
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white border border-brand-sage/5 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-warm-gray flex items-center justify-center text-brand-sage mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-serif font-medium mb-3 text-brand-ink">{title}</h3>
    <p className="text-brand-ink/70 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-brand-sage/10 py-6">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-serif font-medium text-brand-ink">{question}</span>
        <ChevronDown className={`text-brand-sage transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-4 text-brand-ink/70 text-sm leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/95 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Ambiente acolhedor" 
            className="w-full h-full object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sage/10 text-brand-sage text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Psicologia Clínica Especializada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-brand-ink">
              Você não precisa enfrentar <span className="italic text-brand-sage">tudo sozinho.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ink/70 mb-10 max-w-lg leading-relaxed">
              Um espaço seguro, ético e acolhedor para cuidar da sua saúde emocional através da Terapia Cognitivo-Comportamental, de onde você estiver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#agendar" className="bg-brand-sage text-white px-8 py-4 rounded-full text-center font-medium hover:bg-brand-sage/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                Agendar Consulta
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" className="bg-white text-brand-sage border border-brand-sage/20 px-8 py-4 rounded-full text-center font-medium hover:bg-brand-warm-gray transition-all flex items-center justify-center">
                <MessageCircle className="mr-2" size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                alt="Psicóloga Cícera Alves" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-sage/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-taupe/10 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-brand-warm-gray py-12 border-y border-brand-sage/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-around gap-8">
          {[
            { label: 'Registro Profissional', value: 'CRP 03/29510' },
            { label: 'Especialidade', value: 'Terapia TCC' },
            { label: 'Modalidade', value: '100% Online' },
            { label: 'Atendimento', value: 'Individual' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-brand-taupe mb-1">{stat.label}</p>
              <p className="text-lg font-serif font-medium text-brand-ink">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Áreas de Apoio Emocional</h2>
            <p className="text-brand-ink/70 max-w-2xl mx-auto">
              Abordagem terapêutica humanizada e baseada em evidências científicas para diversos desafios da vida contemporânea.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Brain} 
              title="Ansiedade e Crises" 
              description="Aprenda a lidar com pensamentos intrusivos, crises de pânico e a sensação constante de preocupação."
            />
            <ServiceCard 
              icon={Heart} 
              title="Depressão e Desânimo" 
              description="Resgate o sentido, a motivação e encontre ferramentas para superar a apatia e a tristeza profunda."
            />
            <ServiceCard 
              icon={Clock} 
              title="Stress e Burnout" 
              description="Equilíbrio entre vida pessoal e profissional, tratando o esgotamento emocional e físico."
            />
            <ServiceCard 
              icon={User} 
              title="Autoestima" 
              description="Fortaleça sua autoconfiança e mude a forma como você se enxerga e se relaciona consigo mesmo."
            />
            <ServiceCard 
              icon={MessageCircle} 
              title="Relacionamentos" 
              description="Trabalhe dependência emocional, conflitos e melhore sua comunicação interpessoal."
            />
            <ServiceCard 
              icon={Sparkles} 
              title="Autoconhecimento" 
              description="Um mergulho profundo para entender seus padrões e promover um crescimento pessoal contínuo."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=1000" 
                alt="Consultório Online" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl max-w-xs hidden md:block">
              <p className="italic text-brand-sage font-serif text-lg mb-2">"Minha missão é oferecer um porto seguro para sua mente."</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-brand-taupe">— Cícera Alves</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Sobre a Psicóloga</h2>
            <div className="space-y-6 text-brand-ink/80 leading-relaxed">
              <p>
                Olá, eu sou <strong>Cícera Alves da Silva</strong>, psicóloga clínica com registro CRP 03/29510. Minha trajetória é marcada pelo compromisso com a saúde mental e o bem-estar emocional de cada pessoa que atendo.
              </p>
              <p>
                Especializada em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, utilizo uma abordagem prática e focada em resultados, sempre pautada pela ética e pelo acolhimento humano. Acredito que a terapia é um processo de parceria, onde juntos exploramos caminhos para uma vida mais leve e significativa.
              </p>
              <p>
                No atendimento online, prezo pela mesma proximidade e sigilo de uma clínica física, garantindo que você se sinta confortável e seguro no seu próprio espaço.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-brand-sage" size={20} />
                <span className="text-sm font-medium">Ética Profissional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-brand-sage" size={20} />
                <span className="text-sm font-medium">Sigilo Absoluto</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-brand-sage" size={20} />
                <span className="text-sm font-medium">Base Científica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Como Funciona a Terapia Online</h2>
            <p className="text-brand-ink/70 max-w-2xl mx-auto">
              Praticidade e eficácia comprovada, com todo o suporte que você precisa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: '01', 
                title: 'Primeiro Contato', 
                desc: 'Você entra em contato via WhatsApp ou formulário para tirar dúvidas e agendar seu horário.' 
              },
              { 
                step: '02', 
                title: 'Ambiente Seguro', 
                desc: 'As sessões ocorrem por videochamada em plataforma segura, garantindo total privacidade.' 
              },
              { 
                step: '03', 
                title: 'Sua Jornada', 
                desc: 'Iniciamos o processo terapêutico focado nas suas necessidades e objetivos de vida.' 
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-8xl font-serif font-bold text-brand-sage/5 absolute -top-10 -left-4 z-0">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-4 text-brand-ink">{item.title}</h3>
                  <p className="text-brand-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 p-10 rounded-[40px] bg-brand-sage text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-serif mb-4">Privacidade e Conforto</h3>
              <p className="opacity-90">A terapia online é reconhecida pelo Conselho Federal de Psicologia e oferece a mesma eficácia do atendimento presencial, com a vantagem de ser realizada no conforto do seu lar.</p>
            </div>
            <ShieldCheck size={80} className="opacity-20" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-warm-gray">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Benefícios da Jornada Terapêutica</h2>
            <ul className="space-y-6">
              {[
                'Maior equilíbrio emocional e resiliência',
                'Clareza mental para tomada de decisões',
                'Melhoria significativa nos relacionamentos',
                'Aumento da autoestima e autoaceitação',
                'Redução de sintomas de ansiedade e stress',
                'Desenvolvimento de novas habilidades sociais'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-lg text-brand-ink/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-[3/4] object-cover mt-8" alt="Bem-estar" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-[3/4] object-cover" alt="Meditação" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Relatos de Transformação</h2>
            <p className="text-brand-ink/70">Depoimentos reais preservando o sigilo e a ética profissional.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "A terapia com a Cícera mudou minha forma de ver o mundo. Hoje me sinto muito mais segura para tomar decisões.", author: "M.S., 34 anos" },
              { text: "O atendimento online foi a solução perfeita para minha rotina corrida. O acolhimento é incrível mesmo através da tela.", author: "R.F., 29 anos" },
              { text: "Consegui superar crises de ansiedade que me travavam há anos. Sou muito grata por todo o suporte e paciência.", author: "A.L., 42 anos" },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-warm-gray border border-brand-sage/5 italic relative">
                <p className="text-brand-ink/80 mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-sm font-semibold text-brand-sage not-italic">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Dúvidas Frequentes</h2>
            <p className="text-brand-ink/70">Respostas claras para ajudar você a dar o primeiro passo.</p>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="A terapia online é realmente eficaz?" 
              answer="Sim, diversos estudos científicos comprovam que a terapia online possui a mesma eficácia do atendimento presencial, especialmente na abordagem TCC. Ela oferece flexibilidade e conforto sem perder a qualidade técnica." 
            />
            <FAQItem 
              question="Como sei se preciso de terapia?" 
              answer="Se você sente que suas emoções estão interferindo na sua rotina, se enfrenta conflitos constantes ou simplesmente deseja se conhecer melhor, a terapia é indicada. Não é preciso estar em crise para buscar ajuda." 
            />
            <FAQItem 
              question="Qual a duração das sessões?" 
              answer="As sessões individuais têm duração média de 50 minutos, ocorrendo geralmente uma vez por semana, dependendo da necessidade de cada caso." 
            />
            <FAQItem 
              question="Como é feito o pagamento?" 
              answer="Os pagamentos podem ser realizados via PIX ou transferência bancária. Valores e pacotes mensais são discutidos no primeiro contato." 
            />
            <FAQItem 
              question="As sessões são sigilosas?" 
              answer="Sim, o sigilo é um dever ético do psicólogo garantido pelo Código de Ética Profissional. Todas as informações compartilhadas são estritamente confidenciais." 
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="agendar" className="section-padding bg-brand-sage text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl mb-8">Vamos iniciar sua jornada de cuidado?</h2>
          <p className="text-xl opacity-90 mb-12">Agende sua primeira conversa e descubra como a terapia pode transformar sua vida.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/5500000000000" target="_blank" className="bg-white text-brand-sage px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-warm-gray transition-all shadow-xl flex items-center justify-center">
              <MessageCircle className="mr-2" />
              Agendar via WhatsApp
            </a>
            <a href="mailto:contato@ciceraalves.com" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Enviar E-mail
            </a>
          </div>
          <p className="mt-12 text-sm opacity-60">Resposta garantida em até 24 horas úteis.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white/60 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-medium tracking-tight text-white">Cícera Alves</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe -mt-1">Psicologia Clínica</span>
            </div>
            <p className="max-w-sm mb-8">Oferecendo suporte emocional especializado através da Terapia Cognitivo-Comportamental para pessoas em todo o mundo.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Informações</h4>
            <ul className="space-y-4 text-sm">
              <li>CRP 03/29510</li>
              <li>Terapia Online</li>
              <li>Atendimento Individual</li>
              <li>Adultos e Adolescentes</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Cícera Alves da Silva. Todos os direitos reservados.</p>
          <p>Desenvolvido com ética e cuidado.</p>
        </div>
      </footer>
    </div>
  );
}

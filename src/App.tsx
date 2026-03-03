/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  Code2, 
  Smartphone, 
  Cpu, 
  Moon, 
  Sun, 
  ChevronRight,
  ArrowUpRight,
  MessageSquare,
  ClipboardList,
  FileText,
  PenTool,
  Layers,
  Rocket
} from 'lucide-react';

// --- Types ---
type Theme = 'light' | 'dark';

// --- Components ---

const Navbar = ({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'サービス', href: '#services' },
    { name: '企業理念', href: '#philosophy' },
    { name: '制作の流れ', href: '#process' },
    { name: '会社概要', href: '#company' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark' ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-white/80 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <span className="font-serif italic">O</span>
          </div>
          <span>Orinova</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 text-black'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={theme === 'dark' ? 'text-white' : 'text-black'}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 left-0 right-0 p-6 shadow-xl md:hidden ${
              theme === 'dark' ? 'bg-black border-b border-white/10' : 'bg-white border-b border-black/5'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ theme }: { theme: Theme }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-700`}>
        <div className={`absolute inset-0 opacity-30 ${
          theme === 'dark' 
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]' 
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.span 
            className={`mb-6 inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase ${
              theme === 'dark' ? 'bg-white/10 text-white border border-white/20' : 'bg-black/5 text-black border border-black/10'
            }`}
          >
            Orinova Inc.
          </motion.span>
          
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Digital <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Origin</span>.
          </h1>

          <p className={`text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            未来を定義する、<br className="hidden md:inline" />
            デジタル体験を創造します。
            <br />
            <span className="text-sm md:text-base opacity-80 mt-4 block font-normal">
              We craft digital experiences that define the future.
            </span>
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact" 
              className={`group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium transition-all ${
                theme === 'dark' 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              プロジェクトを開始
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Abstract Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 md:left-20 w-64 h-64 rounded-full blur-3xl opacity-20 bg-blue-500 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-10 md:right-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-500 pointer-events-none" />
      
      <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className={`text-xs uppercase tracking-widest ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>Scroll</span>
        <div className={`w-[1px] h-12 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}>
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-full h-1/2 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
          />
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ title, titleJp, description, icon: Icon, theme, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl overflow-hidden transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
          : 'bg-black/5 hover:bg-black/10 border border-black/5'
      }`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
        <div>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
            theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
          }`}>
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {title}
          </h3>
          <p className={`text-sm font-medium mb-4 opacity-60 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {titleJp}
          </p>
          <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>Learn more</span>
          <ArrowRight size={16} className={theme === 'dark' ? 'text-white' : 'text-black'} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = ({ theme }: { theme: Theme }) => {
  const services = [
    {
      title: "Web Development",
      titleJp: "Webシステム開発",
      description: "最新技術を駆使し、堅牢でスケーラブルなWebアプリケーションを構築します。",
      icon: Code2
    },
    {
      title: "UI/UX Design",
      titleJp: "UI/UXデザイン",
      description: "ユーザーの心を動かす、直感的で美しいインターフェースをデザインします。",
      icon: Smartphone
    },
    {
      title: "Digital Transformation",
      titleJp: "DX支援",
      description: "デジタル技術を活用し、ビジネスプロセスの革新と競争力強化を支援します。",
      icon: Globe
    },
    {
      title: "System Architecture",
      titleJp: "システム設計",
      description: "ビジネスの成長を見据えた、柔軟で持続可能なシステムアーキテクチャを設計します。",
      icon: Cpu
    }
  ];

  return (
    <section id="services" className={`py-32 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Our Expertise.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            技術力と創造性を融合させ、世界基準のデジタルソリューションを提供します。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = ({ theme }: { theme: Theme }) => {
  return (
    <section id="philosophy" className={`py-32 overflow-hidden ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#f5f5f7]'} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-sm font-bold tracking-widest uppercase mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Philosophy
            </h2>
            <h3 className={`text-4xl md:text-5xl font-bold leading-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              職人魂と<br />
              <span className="opacity-50">最新技術の融合。</span>
            </h3>
            <div className={`space-y-6 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                Orinovaは、日本の「モノづくり」の精神を大切にしています。単にコードを書くのではなく、デジタル資産を「創り上げる」ことに情熱を注いでいます。
              </p>
              <p>
                1ピクセルへのこだわり、1行のコードへの責任。私たちはシンプルさの中にこそ、究極の洗練が宿ると信じています。
              </p>
              <p className="font-serif italic text-xl mt-8 opacity-80">
                "Simplicity is the ultimate sophistication."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
              alt="Office Architecture" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-black/5'}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const Process = ({ theme }: { theme: Theme }) => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "お問い合わせ",
      titleEn: "Contact",
      description: "まずはWebフォームまたはメールにてお気軽にご相談ください。現状の課題や実現したいことなど、ざっくりとした内容でも構いません。"
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "ヒアリング・要件定義",
      titleEn: "Hearing",
      description: "担当者が詳しくお話を伺い、プロジェクトの目的、ターゲット、機能要件などを明確にします。オンラインミーティングも可能です。"
    },
    {
      icon: FileText,
      step: "03",
      title: "ご提案・お見積り",
      titleEn: "Proposal",
      description: "ヒアリング内容に基づき、最適なプラン、スケジュール、概算費用をご提案します。ご納得いただけるまで調整いたします。"
    },
    {
      icon: PenTool,
      step: "04",
      title: "ご契約・着手",
      titleEn: "Contract",
      description: "提案内容にご合意いただけましたら、契約を締結します。着手金のご入金確認後、正式にプロジェクトを開始いたします。"
    },
    {
      icon: Layers,
      step: "05",
      title: "設計・開発・デザイン",
      titleEn: "Development",
      description: "ワイヤーフレーム作成、デザイン制作、コーディング、システム開発を進めます。各フェーズで進捗をご報告し、認識のズレを防ぎます。"
    },
    {
      icon: Rocket,
      step: "06",
      title: "最終確認・納品",
      titleEn: "Delivery",
      description: "テスト環境での動作確認を経て、本番環境へ公開（または納品）いたします。公開後の保守運用サポートも承ります。"
    }
  ];

  return (
    <section id="process" className={`py-32 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Process.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            お問い合わせから納品まで、透明性の高いプロセスでプロジェクトを進行します。
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className={`hidden md:block absolute left-[27px] top-8 bottom-8 w-[2px] ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`} />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16"
              >
                {/* Icon & Step Number */}
                <div className="flex-shrink-0 flex items-start">
                  <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 ${
                    theme === 'dark' 
                      ? 'bg-black border-black text-white ring-1 ring-white/20' 
                      : 'bg-white border-white text-black ring-1 ring-black/10'
                  }`}>
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pt-2 pb-8 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/5'} last:border-0`}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className={`text-sm font-mono font-bold tracking-wider opacity-50 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                      STEP {step.step}
                    </span>
                    <span className={`text-xs font-medium uppercase tracking-widest opacity-40 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {step.titleEn}
                    </span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-lg leading-relaxed max-w-3xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Company = ({ theme }: { theme: Theme }) => {
  return (
    <section id="company" className={`py-32 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#f5f5f7]'} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Company.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
             <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>会社名</h3>
                <p className={`text-2xl font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Orinova株式会社</p>
             </div>
             <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>所在地</h3>
                <p className={`text-xl leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  〒176-0012<br/>
                  東京都練馬区豊玉北3丁目1番3号<br/>
                  パレ･ドール豊玉北103
                </p>
             </div>
             <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>お問い合わせ</h3>
                <a href="mailto:support@orinova.jp" className={`text-xl hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  support@orinova.jp
                </a>
             </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=東京都練馬区豊玉北3丁目1番3号パレ･ドール豊玉北103&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ theme }: { theme: Theme }) => {
  return (
    <footer id="contact" className={`py-20 border-t ${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-black/5'} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              共に、特別なものを<br />
              <span className="text-gray-500">創りましょう。</span>
            </h2>
            <a 
              href="mailto:support@orinova.jp" 
              className={`inline-flex items-center gap-3 text-2xl font-medium border-b-2 pb-1 transition-colors ${
                theme === 'dark' 
                  ? 'text-white border-white/30 hover:border-white' 
                  : 'text-black border-black/30 hover:border-black'
              }`}
            >
              support@orinova.jp
            </a>
          </div>
          
          <div className="flex flex-col gap-8">
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>サイトマップ</h4>
              <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">ホーム</a></li>
                <li><a href="#services" className="hover:underline">サービス</a></li>
                <li><a href="#process" className="hover:underline">制作の流れ</a></li>
                <li><a href="#company" className="hover:underline">会社概要</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${theme === 'dark' ? 'border-white/10 text-gray-500' : 'border-black/5 text-gray-400'}`}>
          <p className="text-sm">© 2024 Orinova Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:underline">プライバシーポリシー</a>
            <a href="#" className="hover:underline">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <Services theme={theme} />
        <Philosophy theme={theme} />
        <Process theme={theme} />
        <Company theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

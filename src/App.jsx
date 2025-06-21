import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Star, CheckCircle, FileText, Scale, Shield, Users, Book, Phone, Mail, MapPin, Clock, Instagram, Calculator, Newspaper, UserCheck, Building } from 'lucide-react';
import './App.css';

// Import images
import logoImage from './assets/images/logo-amlv-nova.png';
import adeliaImage from './assets/images/adelia-araujo.jpeg';
import danielyImage from './assets/images/daniely-mesquita.jpeg';
import savioImage from './assets/images/savio-lima-verde.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'areas', 'equipe', 'contato', 'calculadoras', 'blog', 'portal', 'institucional'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'sobre', label: 'Sobre', icon: null },
    { id: 'areas', label: 'Áreas', icon: null },
    { id: 'equipe', label: 'Equipe', icon: null },
    { id: 'contato', label: 'Contato', icon: null },
    { id: 'calculadoras', label: 'Calculadoras Jurídicas', icon: Calculator },
    { id: 'blog', label: 'Blog Jurídico', icon: Newspaper },
    { id: 'portal', label: 'Portal do Cliente', icon: UserCheck },
    { id: 'institucional', label: 'Institucional', icon: Building }
  ];

  return (
    <div className="min-h-screen bg-navy text-white smooth-scroll">
      {/* Sidebar Navigation */}
      <nav className={`fixed left-0 top-0 h-full w-64 bg-navy/95 backdrop-blur-sm border-r border-gold/20 z-50 transform transition-transform duration-300 lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <img src={logoImage} alt="AMLV Advocacia" className="h-12 w-auto" />
            <div>
              <h1 className="text-sm font-bold text-white">AMLV Advocacia</h1>
              <a href="https://instagram.com/araujomesquitalimaverdeadv" target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:text-gold transition-colors">
                @araujomesquitalimaverdeadv
              </a>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center space-x-3 rounded-lg transition-colors ${
                  activeSection === item.id ? 'bg-gold/20 text-gold' : 'text-white hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-navy/90 rounded-lg text-white hover:text-gold transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-navy relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <img src={logoImage} alt="AMLV Advocacia" className="h-72 w-auto mx-auto mb-8" />
              
              <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
                Excelência em <span className="text-gold">Advocacia</span>
              </h1>
              
              <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Soluções jurídicas especializadas. Piauí - Maranhão – Ceará
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="btn-primary px-8 py-4 rounded-lg text-navy font-semibold text-lg hover-scale"
                >
                  Fale Conosco
                </button>
                <button
                  onClick={() => scrollToSection('areas')}
                  className="btn-secondary px-8 py-4 rounded-lg text-navy font-semibold text-lg hover-scale"
                >
                  Nossas Áreas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tradição, inovação e excelência em serviços jurídicos especializados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="team-card p-8 rounded-xl card-hover text-center">
                <Award className="icon-gold w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gold">Missão</h3>
                <p className="text-gray-300 leading-relaxed">
                  Oferecer soluções jurídicas inovadoras e eficazes, com excelência técnica e atendimento personalizado, contribuindo para o sucesso dos nossos clientes.
                </p>
              </div>

              {/* Visão */}
              <div className="team-card p-8 rounded-xl card-hover text-center">
                <Star className="icon-gold w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gold">Visão</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser reconhecido como o escritório de advocacia de referência no Piauí, Ceará e Maranhão, pela qualidade técnica e compromisso com resultados.
                </p>
              </div>

              {/* Valores */}
              <div className="team-card p-8 rounded-xl card-hover text-center">
                <CheckCircle className="icon-gold w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gold">Valores</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Ética e transparência</li>
                  <li>• Excelência técnica</li>
                  <li>• Compromisso com resultados</li>
                  <li>• Atendimento humanizado</li>
                </ul>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-gold mb-2">1000+</h3>
                <p className="text-xl text-gray-300">Clientes Atendidos</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gold mb-2">7</h3>
                <p className="text-xl text-gray-300">Áreas de Atuação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section id="areas" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Áreas de Atuação</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Expertise especializada em diversas áreas do direito para atender todas as necessidades dos nossos clientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Direito Empresarial */}
              <div className="team-card p-6 rounded-xl card-hover">
                <FileText className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Empresarial</h3>
                <p className="text-gray-300 mb-4">Contratos societários, Holdings e estruturação empresarial</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Contratos Societários</li>
                  <li>› Holdings</li>
                  <li>› Estruturação Empresarial</li>
                  <li>› Fusões e Aquisições</li>
                </ul>
              </div>

              {/* Direito Tributário */}
              <div className="team-card p-6 rounded-xl card-hover">
                <FileText className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Tributário</h3>
                <p className="text-gray-300 mb-4">Consultoria tributária especializada para empresas</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Planejamento Tributário</li>
                  <li>› Consultoria Fiscal</li>
                  <li>› Defesa em Autuações</li>
                  <li>› Recuperação de Créditos</li>
                </ul>
              </div>

              {/* Direito Administrativo */}
              <div className="team-card p-6 rounded-xl card-hover">
                <Scale className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Administrativo</h3>
                <p className="text-gray-300 mb-4">Licitações e contratos administrativos</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Licitações Públicas</li>
                  <li>› Contratos Administrativos</li>
                  <li>› Defesa em Processos</li>
                  <li>› Recursos Administrativos</li>
                </ul>
              </div>

              {/* Direito Civil */}
              <div className="team-card p-6 rounded-xl card-hover">
                <Shield className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Civil</h3>
                <p className="text-gray-300 mb-4">Obrigações, Contratos e Sucessões</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Contratos em Geral</li>
                  <li>› Responsabilidade Civil</li>
                  <li>› Direito das Sucessões</li>
                  <li>› Direito de Família</li>
                </ul>
              </div>

              {/* Direito Penal */}
              <div className="team-card p-6 rounded-xl card-hover">
                <Scale className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Penal</h3>
                <p className="text-gray-300 mb-4">Crimes tributários e financeiros</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Crimes Tributários</li>
                  <li>› Crimes Financeiros</li>
                  <li>› Defesa Criminal</li>
                  <li>› Compliance Penal</li>
                </ul>
              </div>

              {/* Direito Trabalhista */}
              <div className="team-card p-6 rounded-xl card-hover">
                <Users className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Trabalhista</h3>
                <p className="text-gray-300 mb-4">Consultoria trabalhista empresarial</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Consultoria Preventiva</li>
                  <li>› Defesa em Reclamatórias</li>
                  <li>› Compliance Trabalhista</li>
                  <li>› Terceirização</li>
                </ul>
              </div>

              {/* Direito Previdenciário */}
              <div className="team-card p-6 rounded-xl card-hover">
                <Book className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direito Previdenciário</h3>
                <p className="text-gray-300 mb-4">Atuação administrativa e judicial</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>› Benefícios Previdenciários</li>
                  <li>› Revisão de Aposentadorias</li>
                  <li>› INSS</li>
                  <li>› Previdência Privada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-xl text-gray-300 mb-4">
                Profissionais experientes e especializados, comprometidos com a excelência
              </p>
              <p className="text-lg text-gold font-semibold">
                Contamos com mais de 20 advogados colaboradores especializados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Adélia Araújo */}
              <div className="team-card p-6 rounded-xl card-hover text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold">
                  <img src={adeliaImage} alt="Adélia Araújo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adélia Araújo</h3>
                <p className="text-gold font-semibold mb-4">Sócia</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Empresarial</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Tributário</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Penal</span>
                </div>
              </div>

              {/* Daniely Mesquita */}
              <div className="team-card p-6 rounded-xl card-hover text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold">
                  <img src={danielyImage} alt="Daniely Mesquita" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Daniely Mesquita</h3>
                <p className="text-gold font-semibold mb-4">Sócia</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Civil</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito de Família</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Previdenciário</span>
                </div>
              </div>

              {/* Sávio Lima Verde */}
              <div className="team-card p-6 rounded-xl card-hover text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold">
                  <img src={savioImage} alt="Sávio Lima Verde" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sávio Lima Verde</h3>
                <p className="text-gold font-semibold mb-4">Sócio</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Empresarial</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Tributário</span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">Direito Administrativo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos prontos para ajudar você. Entre em contato conosco e agende uma consulta
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="icon-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gold">Endereço</h3>
                    <p className="text-gray-300">
                      Rua Mato Grosso, nº 720, Sala 1211, Torre 1<br />
                      Centro Empresarial Rio Poty, Cabral<br />
                      Teresina - PI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="icon-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gold">Telefone</h3>
                    <p className="text-gray-300">(86) 98847-4727</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="icon-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gold">E-mail</h3>
                    <p className="text-gray-300">araujomesquitalimaverdeadv@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="icon-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gold">Horário de Atendimento</h3>
                    <p className="text-gray-300">
                      Segunda a Sexta: 8h às 18h
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="team-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-2 text-gold">Envie uma Mensagem</h3>
                <p className="text-gray-300 mb-6">Preencha o formulário e entraremos em contato em breve</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Área de interesse</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="tributario">Direito Tributário</option>
                    <option value="administrativo">Direito Administrativo</option>
                    <option value="civil">Direito Civil</option>
                    <option value="penal">Direito Penal</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="previdenciario">Direito Previdenciário</option>
                  </select>
                  
                  <textarea
                    placeholder="Sua mensagem"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 rounded-lg text-navy font-semibold hover-scale"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Calculadoras Jurídicas Section */}
        <section id="calculadoras" className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Calculadoras Jurídicas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ferramentas práticas para cálculos jurídicos essenciais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="team-card p-6 rounded-xl card-hover">
                <Calculator className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Cálculo de Juros</h3>
                <p className="text-gray-300 mb-4">Calcule juros moratórios e correção monetária</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Acessar Calculadora
                </button>
              </div>

              <div className="team-card p-6 rounded-xl card-hover">
                <Users className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Cálculo Trabalhista</h3>
                <p className="text-gray-300 mb-4">Calcule verbas rescisórias e trabalhistas</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Acessar Calculadora
                </button>
              </div>

              <div className="team-card p-6 rounded-xl card-hover">
                <Book className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Cálculo Previdenciário</h3>
                <p className="text-gray-300 mb-4">Calcule tempo de contribuição e benefícios</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Acessar Calculadora
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Jurídico Section */}
        <section id="blog" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog Jurídico</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Artigos e insights sobre as principais mudanças no cenário jurídico
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="team-card p-6 rounded-xl card-hover">
                <Newspaper className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Mudanças na Legislação Tributária 2024</h3>
                <p className="text-gray-300 mb-4">Principais alterações que impactam empresas e pessoas físicas</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Ler Artigo
                </button>
              </div>

              <div className="team-card p-6 rounded-xl card-hover">
                <Users className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Direitos do Trabalhador em 2024</h3>
                <p className="text-gray-300 mb-4">Novidades e atualizações na legislação trabalhista</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Ler Artigo
                </button>
              </div>

              <div className="team-card p-6 rounded-xl card-hover">
                <Building className="icon-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gold">Marco Legal das Startups</h3>
                <p className="text-gray-300 mb-4">Como a nova legislação impacta o ecossistema de inovação</p>
                <button className="btn-primary px-4 py-2 rounded-lg text-navy font-semibold">
                  Ler Artigo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portal do Cliente Section */}
        <section id="portal" className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Portal do Cliente</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Acesso exclusivo para clientes e colaboradores
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="team-card p-8 rounded-xl card-hover">
                <UserCheck className="icon-gold w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gold">Área do Cliente</h3>
                <ul className="text-gray-300 space-y-3 mb-6">
                  <li>• Acompanhamento de processos</li>
                  <li>• Download de documentos</li>
                  <li>• Histórico de atendimentos</li>
                  <li>• Agenda de compromissos</li>
                </ul>
                <button className="btn-primary px-6 py-3 rounded-lg text-navy font-semibold w-full">
                  Acessar Portal
                </button>
              </div>

              <div className="team-card p-8 rounded-xl card-hover">
                <Building className="icon-gold w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gold">Área dos Colaboradores</h3>
                <ul className="text-gray-300 space-y-3 mb-6">
                  <li>• Sistema interno de gestão</li>
                  <li>• Controle de prazos</li>
                  <li>• Base de conhecimento</li>
                  <li>• Relatórios gerenciais</li>
                </ul>
                <button className="btn-secondary px-6 py-3 rounded-lg text-navy font-semibold w-full">
                  Login Colaborador
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Primeiro acesso? Entre em contato conosco para criar sua conta.
              </p>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gold hover:text-gold transition-colors font-semibold"
              >
                Solicitar Acesso →
              </button>
            </div>
          </div>
        </section>

        {/* Institucional Section */}
        <section id="institucional" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Institucional</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conheça nossas certificações e compromisso com a excelência
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="icon-gold w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">20+ Advogados</h3>
                <p className="text-gray-300">especializados em diversas áreas</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="icon-gold w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">1000+ Clientes</h3>
                <p className="text-gray-300">atendidos com excelência</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="icon-gold w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">Certificações</h3>
                <p className="text-gray-300">OAB-PI, OAB-MA, CRC-PI</p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="team-card p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4 text-gold">Responsabilidade Social</h3>
                <p className="text-gray-300 leading-relaxed">
                  Acreditamos no papel social da advocacia. Participamos ativamente de projetos comunitários, 
                  oferecemos consultoria jurídica gratuita para ONGs e mantemos parcerias com universidades 
                  para formação de novos profissionais do direito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12 border-t border-gold/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Logo and Description */}
              <div>
                <img src={logoImage} alt="AMLV Advocacia" className="h-16 w-auto mb-4" />
                <p className="text-gray-400 mb-4">
                  Excelência em advocacia com tradição e inovação para empresas e pessoas físicas.
                </p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/araujomesquitalimaverdeadv" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gold">Links Rápidos</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-gold transition-colors">Sobre Nós</button></li>
                  <li><button onClick={() => scrollToSection('areas')} className="text-gray-400 hover:text-gold transition-colors">Áreas de Atuação</button></li>
                  <li><button onClick={() => scrollToSection('equipe')} className="text-gray-400 hover:text-gold transition-colors">Nossa Equipe</button></li>
                  <li><button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-gold transition-colors">Contato</button></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gold">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>(86) 98847-4727</li>
                  <li>araujomesquitalimaverdeadv@gmail.com</li>
                  <li>Teresina - PI | Timon - MA</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Araújo, Mesquita e Lima Verde Advocacia. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Made with Manus */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gold/20">
            <p className="text-xs text-gray-400">
              <span className="text-gold">🛠</span> Made with Manus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


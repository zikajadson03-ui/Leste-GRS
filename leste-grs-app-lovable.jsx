import React, { useState, useEffect } from 'react';

export default function LESTEGRSApp() {
  const [screen, setScreen] = useState('login'); // login, signup, dashboard, procedimentos, perfil
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: '', senha: '', nome: '', matricula: '' });
  const [activeTab, setActiveTab] = useState('dashboard');

  // Simular registro
  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.senha && formData.matricula) {
      setUser({ nome: formData.nome, email: formData.email, matricula: formData.matricula });
      setScreen('dashboard');
      setFormData({ email: '', senha: '', nome: '', matricula: '' });
    }
  };

  // Simular login
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.senha) {
      setUser({ nome: 'Técnico Teste', email: formData.email, matricula: '12345' });
      setScreen('dashboard');
      setFormData({ email: '', senha: '', nome: '', matricula: '' });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setScreen('login');
    setFormData({ email: '', senha: '', nome: '', matricula: '' });
  };

  // TELA LOGIN
  if (screen === 'login' && !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        {/* Animated neon lines background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#a333d8', stopOpacity: 0.3}} />
                <stop offset="50%" style={{stopColor: '#7c2dac', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: '#c24bff', stopOpacity: 0.3}} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Fibra ótica passando */}
            <path d="M 0 100 Q 300 50 600 100 T 1200 100" stroke="url(#neonGrad)" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 0 300 Q 300 350 600 300 T 1200 300" stroke="url(#neonGrad)" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 0 500 Q 300 450 600 500 T 1200 500" stroke="url(#neonGrad)" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.6" />
            <path d="M 0 700 Q 300 750 600 700 T 1200 700" stroke="url(#neonGrad)" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.6" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="inline-block mb-4">
              <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-2xl" style={{filter: 'drop-shadow(0 0 30px rgba(167, 51, 216, 0.8))'}}>
                <defs>
                  <filter id="glow2">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Círculos neon */}
                <circle cx="70" cy="70" r="55" fill="none" stroke="#a333d8" strokeWidth="3" opacity="0.9" filter="url(#glow2)" />
                <circle cx="70" cy="70" r="42" fill="none" stroke="#7c2dac" strokeWidth="2" opacity="0.6" />
                <circle cx="70" cy="70" r="30" fill="none" stroke="#c24bff" strokeWidth="1.5" opacity="0.4" />
                
                {/* Centro */}
                <circle cx="70" cy="70" r="18" fill="#a333d8" filter="url(#glow2)" />
                <path d="M 64 70 L 68 75 L 76 62" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Pontos Brasil */}
                <circle cx="85" cy="50" r="2.5" fill="#ff6b9d" opacity="0.8" />
                <circle cx="92" cy="62" r="2.5" fill="#ff6b9d" opacity="0.8" />
                <circle cx="83" cy="85" r="2.5" fill="#ff6b9d" opacity="0.8" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-white mb-2 drop-shadow-lg">LESTE GRS</h1>
            <p className="text-purple-300 text-sm font-medium">Contrato Vivo</p>
          </div>

          {/* Card Login */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 w-full max-w-md shadow-2xl" style={{boxShadow: '0 0 40px rgba(167, 51, 216, 0.2)'}}>
            
            <h2 className="text-2xl font-bold text-white mb-6">Bem-vindo</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Email Corporativo</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu.nome@telefonica.com" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-slate-800/80 transition"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Senha</label>
                <input 
                  type="password" 
                  value={formData.senha}
                  onChange={(e) => setFormData({...formData, senha: e.target.value})}
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-slate-800/80 transition"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95 shadow-lg" 
                style={{boxShadow: '0 0 20px rgba(167, 51, 216, 0.5)'}}
              >
                Entrar
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/0 to-purple-500/50"></div>
              <span className="text-gray-400 text-sm">Novo aqui?</span>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-purple-500/0"></div>
            </div>

            <button 
              onClick={() => setScreen('signup')}
              className="w-full py-3 border-2 border-purple-500 text-purple-300 font-bold rounded-lg hover:bg-purple-500/10 transition"
            >
              Criar Conta
            </button>
          </div>

          {/* Demo note */}
          <p className="mt-8 text-gray-400 text-center text-xs max-w-sm">
            🔐 Teste: qualquer email + senha para entrar<br/>
            Demo para apresentação - dados fictícios
          </p>
        </div>
      </div>
    );
  }

  // TELA SIGNUP
  if (screen === 'signup' && !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        <svg className="absolute w-full h-full inset-0" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#a333d8', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#c24bff', stopOpacity: 0.3}} />
            </linearGradient>
            <filter id="glow3">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M 0 100 Q 300 50 600 100 T 1200 100" stroke="url(#neonGrad2)" strokeWidth="2" fill="none" filter="url(#glow3)" />
          <path d="M 0 300 Q 300 350 600 300 T 1200 300" stroke="url(#neonGrad2)" strokeWidth="2" fill="none" filter="url(#glow3)" />
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-black text-white mb-2">LESTE GRS</h1>
            <p className="text-purple-300 text-sm">Criar Conta</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="João Silva" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Matrícula</label>
                <input 
                  type="text" 
                  value={formData.matricula}
                  onChange={(e) => setFormData({...formData, matricula: e.target.value})}
                  placeholder="Ex: 123456" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Email Corporativo</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu.nome@telefonica.com" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">Senha</label>
                <input 
                  type="password" 
                  value={formData.senha}
                  onChange={(e) => setFormData({...formData, senha: e.target.value})}
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg transition"
              >
                Criar Conta
              </button>
            </form>

            <button 
              onClick={() => setScreen('login')}
              className="w-full mt-4 py-3 text-purple-300 font-medium hover:text-white transition"
            >
              ← Voltar ao Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // TELA DASHBOARD (após login)
  if (user) {
    return (
      <div className="bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 min-h-screen text-white pb-20">
        
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 backdrop-blur-sm border-b border-purple-500/30 p-4 sticky top-0 z-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center font-bold text-sm">
                {user.nome.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm">{user.nome}</p>
                <p className="text-purple-300 text-xs">Mat: {user.matricula}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="text-purple-300 hover:text-white text-sm font-medium"
            >
              Sair
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
              { id: 'noticias', label: '📰 Notícias', icon: '📰' },
              { id: 'procedimentos', label: '📋 Procedimentos', icon: '📋' },
              { id: 'checklist', label: '✓ Checklist', icon: '✓' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                  activeTab === tab.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-800/50 text-purple-300 hover:bg-slate-800/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-6 max-w-4xl mx-auto">

          {/* TAB: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Seus Indicadores</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'IFI', valor: '5%', desc: '5 de 100', color: 'from-purple-600 to-purple-700' },
                    { label: 'IRR', valor: '8%', desc: '8 de 100', color: 'from-blue-600 to-blue-700' },
                    { label: 'OC', valor: '12', desc: 'Indevidas', color: 'from-amber-600 to-amber-700' },
                    { label: 'RPI', valor: '2.5%', desc: 'Indevido', color: 'from-red-600 to-red-700' }
                  ].map(ind => (
                    <div 
                      key={ind.label}
                      className={`bg-gradient-to-br ${ind.color} rounded-xl p-4 border border-white/10`}
                    >
                      <p className="text-white/70 text-xs font-medium mb-2">{ind.label}</p>
                      <p className="text-3xl font-bold mb-1">{ind.valor}</p>
                      <p className="text-white/60 text-xs">{ind.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-4">
                <p className="text-purple-300 text-sm font-medium mb-3">📈 Seu Ranking no Time</p>
                <div className="space-y-2">
                  {['João (Você)', 'Carlos', 'Maria', 'Pedro', 'Ana'].map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg">
                      <span className="text-sm">{idx + 1}º - {tech}</span>
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
                          style={{width: `${95 - (idx * 15)}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-4">
                <p className="font-bold text-sm mb-2">⚠️ Alertas de Atenção</p>
                <ul className="text-sm text-purple-200 space-y-1">
                  <li>• Checklist CTOP não foi preenchido hoje</li>
                  <li>• Meta de satisfação: 75% (você: 68%)</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB: NOTÍCIAS */}
          {activeTab === 'noticias' && (
            <div className="space-y-4">
              {[
                { 
                  titulo: 'Nova Procedimento CTOP Publicado', 
                  desc: 'Atualização do procedimento de teste de fibra óptica - LEIA COM ATENÇÃO', 
                  data: 'Hoje às 10:30',
                  tipo: 'procedimento'
                },
                { 
                  titulo: 'Manutenção de Rede Programada', 
                  desc: 'Zona Leste: 20 a 22 de Agosto - Verifique sua área de cobertura', 
                  data: 'Ontem',
                  tipo: 'manutencao'
                },
                { 
                  titulo: 'Ranking Mensal - Parabéns!', 
                  desc: 'Você está no TOP 3 de satisfação do time - Continue assim! 🎉', 
                  data: '3 dias atrás',
                  tipo: 'positivo'
                },
                { 
                  titulo: 'Sistema de Satisfação Atualizado', 
                  desc: 'Nova forma de solicitar avaliação ao cliente - Versão 2.0', 
                  data: '1 semana atrás',
                  tipo: 'sistema'
                }
              ].map((noticia, idx) => (
                <div 
                  key={idx}
                  className={`bg-slate-900/50 border rounded-xl p-4 hover:bg-slate-900/70 transition cursor-pointer ${
                    noticia.tipo === 'procedimento' ? 'border-red-500/30' :
                    noticia.tipo === 'positivo' ? 'border-green-500/30' :
                    'border-purple-500/30'
                  }`}
                >
                  <div className="flex gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      noticia.tipo === 'procedimento' ? 'bg-red-600/20' :
                      noticia.tipo === 'positivo' ? 'bg-green-600/20' :
                      noticia.tipo === 'manutencao' ? 'bg-amber-600/20' :
                      'bg-blue-600/20'
                    }`}>
                      {noticia.tipo === 'procedimento' ? '⚠️' : 
                       noticia.tipo === 'positivo' ? '🎉' :
                       noticia.tipo === 'manutencao' ? '🔧' : '📢'}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{noticia.titulo}</p>
                      <p className="text-gray-400 text-xs mt-1">{noticia.desc}</p>
                      <p className="text-gray-500 text-xs mt-2">{noticia.data}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: PROCEDIMENTOS */}
          {activeTab === 'procedimentos' && (
            <div className="space-y-4">
              {[
                { 
                  titulo: 'Teste de Sinal CTOP', 
                  desc: 'Como testar corretamente o sinal da fibra óptica no cliente',
                  passos: ['Acessar painel cliente', 'Executar teste sinal', 'Validar resultado', 'Documentar']
                },
                { 
                  titulo: 'Procedimento de Satisfação', 
                  desc: 'Passo a passo para solicitar avaliação ao cliente',
                  passos: ['Explicar importância', 'Mostrar código QR', 'Acompanhar resposta', 'Agradecer']
                },
                { 
                  titulo: 'Checklist de Atendimento', 
                  desc: 'Itens obrigatórios em cada visita',
                  passos: ['Segurança primeiro', 'Documentar cliente', 'Executar serviço', 'Deixar limpo']
                },
                { 
                  titulo: 'Abertura de Chamado Correta', 
                  desc: 'Quando e como abrir chamado sem degradar rede',
                  passos: ['Identificar necessidade real', 'Informar ao coordenador', 'Seguir protocolo', 'Fechar registro']
                }
              ].map((proc, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 border border-blue-500/30 rounded-xl p-4 hover:bg-slate-900/70 transition"
                >
                  <p className="font-bold text-sm mb-1">{proc.titulo}</p>
                  <p className="text-gray-400 text-xs mb-3">{proc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proc.passos.map((passo, i) => (
                      <span key={i} className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded">
                        {i + 1}. {passo}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Checklist de Hoje</h3>
                <div className="space-y-3">
                  {[
                    { item: 'Atendimento profissional ao cliente', done: true },
                    { item: 'Executar todos os procedimentos', done: true },
                    { item: 'Testar cliente CTOP', done: false },
                    { item: 'Validar sinal WiFi cliente', done: false },
                    { item: 'Preencher check-list completo', done: false },
                    { item: 'Solicitar avaliação (satisfação)', done: true },
                    { item: 'Nunca desligar cliente para ativar outro', done: true }
                  ].map((check, idx) => (
                    <label key={idx} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 cursor-pointer transition">
                      <input 
                        type="checkbox" 
                        defaultChecked={check.done}
                        className="w-5 h-5 rounded accent-purple-600"
                      />
                      <span className={check.done ? 'line-through text-gray-500' : 'text-white'}>{check.item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-4">
                <p className="font-bold text-sm mb-2">✅ Progresso do Dia</p>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600" style={{width: '57%'}}></div>
                </div>
                <p className="text-xs text-gray-300">4 de 7 tarefas concluídas (57%)</p>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

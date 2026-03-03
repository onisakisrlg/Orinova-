import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function SystemArchitecture({ theme }: { theme: Theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-32 pb-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className={`inline-flex items-center gap-2 mb-8 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${theme === 'dark' ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
            Service 04
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">System Architecture</h1>
          <p className={`text-xl md:text-2xl leading-relaxed mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            ビジネスの成長を見据えた、柔軟で持続可能なシステムアーキテクチャを設計します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Scalability & Reliability</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                急激なトラフィック増加にも耐えうるスケーラブルな構成と、障害発生時にもサービスを継続できる可用性の高いシステムを設計します。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Security by Design</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                設計段階からセキュリティを考慮し、情報漏洩やサイバー攻撃のリスクを最小限に抑えます。最新のセキュリティ基準に準拠したシステムを構築します。
              </p>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
            <h3 className="text-2xl font-bold mb-4">Architecture Patterns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white border border-black/5'}`}>
                <h4 className="font-bold mb-2">Microservices</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>機能を小さなサービスに分割し、開発スピードと保守性を向上させます。</p>
              </div>
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white border border-black/5'}`}>
                <h4 className="font-bold mb-2">Serverless</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>インフラ管理の負担を減らし、コードの実行に集中できる環境を実現します。</p>
              </div>
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white border border-black/5'}`}>
                <h4 className="font-bold mb-2">Event-Driven</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>イベント駆動型アーキテクチャにより、システム間の疎結合とリアルタイム性を実現します。</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

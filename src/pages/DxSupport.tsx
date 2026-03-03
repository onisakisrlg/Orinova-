import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function DxSupport({ theme }: { theme: Theme }) {
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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
            Service 03
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Digital Transformation</h1>
          <p className={`text-xl md:text-2xl leading-relaxed mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            デジタル技術を活用し、ビジネスプロセスの革新と競争力強化を支援します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Business Process Re-engineering</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                既存の業務フローを分析し、デジタルツール導入による効率化・自動化を提案します。アナログな業務をデジタルに置き換えるだけでなく、業務そのもののあり方を見直します。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Decision Making</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                社内に蓄積されたデータを統合・可視化し、経営判断に役立つダッシュボードを構築します。データに基づいた迅速な意思決定をサポートします。
              </p>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-500">01.</span>
                <span>現状分析と課題の抽出</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-500">02.</span>
                <span>デジタル戦略の策定とロードマップ作成</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-500">03.</span>
                <span>最適なツールの選定・導入支援</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-500">04.</span>
                <span>社内定着化に向けたトレーニングとサポート</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

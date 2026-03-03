import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function WebDevelopment({ theme }: { theme: Theme }) {
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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
            Service 01
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Web Development</h1>
          <p className={`text-xl md:text-2xl leading-relaxed mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            最新の技術スタックを活用し、高速で堅牢、そしてスケーラブルなWebアプリケーションを構築します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                React, Next.js, Vue.jsなどのモダンフレームワークを使用し、インタラクティブでユーザー体験の高いUIを実装します。パフォーマンス最適化とアクセシビリティにも配慮します。
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                <li>• Single Page Applications (SPA)</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Static Site Generation (SSG)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Node.js, Python, Goなどを用いたAPI開発から、データベース設計、クラウドインフラ構築まで、ビジネスロジックを支える強固なバックエンドを提供します。
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                <li>• RESTful API / GraphQL</li>
                <li>• Microservices Architecture</li>
                <li>• Cloud Infrastructure (AWS, GCP)</li>
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
            <h3 className="text-2xl font-bold mb-4">Our Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes'].map((tech) => (
                <span key={tech} className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-black border border-black/10'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

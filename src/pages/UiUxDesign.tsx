import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function UiUxDesign({ theme }: { theme: Theme }) {
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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${theme === 'dark' ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
            Service 02
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">UI/UX Design</h1>
          <p className={`text-xl md:text-2xl leading-relaxed mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            ユーザーの行動心理に基づいた、直感的で美しいインターフェースをデザインします。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">User Experience (UX)</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                徹底的なリサーチとユーザーテストを通じて、ユーザーが抱える課題を発見し、最適な解決策を導き出します。使いやすさだけでなく、心地よさを追求します。
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                <li>• User Research & Persona</li>
                <li>• Customer Journey Map</li>
                <li>• Wireframing & Prototyping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">User Interface (UI)</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                ブランドの世界観を体現するビジュアルデザインを作成します。マイクロインタラクションやアニメーションを取り入れ、操作すること自体が楽しくなるような体験を提供します。
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                <li>• Visual Design</li>
                <li>• Design System</li>
                <li>• Interaction Design</li>
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
            <h3 className="text-2xl font-bold mb-4">Tools We Use</h3>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop', 'After Effects', 'Protopie'].map((tool) => (
                <span key={tool} className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-black border border-black/10'}`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

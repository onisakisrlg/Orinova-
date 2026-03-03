import { Link } from 'react-router-dom';
import { Theme } from '../types';

export const Footer = ({ theme }: { theme: Theme }) => {
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
                <li><Link to="/" className="hover:underline">ホーム</Link></li>
                <li><a href="/#services" className="hover:underline">サービス</a></li>
                <li><a href="/#process" className="hover:underline">制作の流れ</a></li>
                <li><a href="/#company" className="hover:underline">会社概要</a></li>
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

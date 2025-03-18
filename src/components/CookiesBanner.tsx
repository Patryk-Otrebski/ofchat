import { type FC } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiesBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const CookiesBanner: FC<CookiesBannerProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-light border-t border-primary/20 shadow-lg p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-dark">
            Używamy plików cookie, aby poprawić jakość korzystania z naszej strony. Kontynuując wizytę na tej stronie, zgadzasz się na używanie plików cookie. Więcej informacji znajdziesz w naszej{' '}
            <Link to="/privacy-policy" className="text-primary hover:text-secondary underline">
              Polityce Prywatności
            </Link>.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onDecline}
            className="px-4 py-2 text-dark bg-light border border-primary/20 hover:bg-primary/5 rounded-lg transition-colors"
          >
            Odrzuć
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
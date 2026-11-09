import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const isLight = theme === 'light';

  const labelText = isLight ? 'Alternar para tema escuro' : 'Alternar para tema claro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={labelText}
      title={labelText}
      className={`relative inline-flex items-center justify-center gap-2 p-2.5 rounded-xl border border-[#1e3878] bg-[#0e1e4a]/70 hover:bg-[#122456] text-slate-200 hover:text-white transition-colors focus:outline-none cursor-pointer ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="moon"
              initial={reducedMotion ? { opacity: 0 } : { scale: 0.5, rotate: -90, opacity: 0 }}
              animate={reducedMotion ? { opacity: 1 } : { scale: 1, rotate: 0, opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { scale: 0.5, rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#0284c7]"
            >
              <Moon className="w-5 h-5 fill-current" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={reducedMotion ? { opacity: 0 } : { scale: 0.5, rotate: 90, opacity: 0 }}
              animate={reducedMotion ? { opacity: 1 } : { scale: 1, rotate: 0, opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { scale: 0.5, rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#4FD6F4]"
            >
              <Sun className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-medium">
          {isLight ? 'Tema Escuro' : 'Tema Claro'}
        </span>
      )}
    </button>
  );
};

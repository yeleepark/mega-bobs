import { cn } from '@/utils/cn';

export const chipInputWrapClass = (isDuplicate: boolean) =>
  cn(
    'flex flex-wrap items-start content-start gap-1.5 px-3 py-2.5 mx-4 mb-4',
    'min-h-[84px] max-h-[136px] overflow-y-auto',
    'bg-white/50 backdrop-blur-sm rounded-lg cursor-text',
    'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]',
    'focus-within:bg-white/65 transition-colors',
    isDuplicate && 'animate-[wiggle_0.3s_ease-in-out]'
  );

export const chipInputFieldClass =
  'flex-1 min-w-[90px] h-[28px] bg-transparent text-[13px] text-ink placeholder:text-ink/30 outline-none disabled:opacity-40';

export const chipClass = (isWinner: boolean) =>
  cn(
    'flex items-center gap-1 px-2.5 py-1 text-[12px] font-semibold rounded-lg transition-all shrink-0',
    isWinner ? 'bg-accent text-ink font-extrabold' : 'bg-white/60 text-ink-2'
  );

export const chipXClass =
  'text-ink/30 text-[10px] leading-none cursor-pointer hover:text-ink/60 transition-colors ml-0.5';

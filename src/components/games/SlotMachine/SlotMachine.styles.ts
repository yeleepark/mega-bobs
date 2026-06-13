import { cn } from '@/utils/cn';

export const gameZoneClass = (isFullscreen: boolean) =>
  cn(
    'bg-[linear-gradient(135deg,#c5d4f0_0%,#e8eef8_45%,#d5c8f0_100%)] flex flex-col gap-4',
    isFullscreen
      ? 'fixed inset-0 z-50 p-8 items-center justify-center overflow-auto'
      : 'rounded-2xl p-5'
  );

export const gameZoneInnerClass = (isFullscreen: boolean) =>
  isFullscreen
    ? 'w-full max-w-sm flex flex-col gap-4'
    : 'w-full flex flex-col gap-4';

export const cabinetClass =
  'bg-white/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7),0_4px_24px_rgba(0,0,0,.08)]';

export const dotGroupClass = 'flex gap-2';

export const dotClass = 'w-1.5 h-1.5 rounded-full bg-accent';

export const fullscreenBtnClass =
  'w-[28px] h-[28px] bg-white/40 text-ink/50 text-[13px] rounded-md flex items-center justify-center cursor-pointer hover:bg-white/70 hover:text-ink/80 transition-colors';

export const reelsAreaClass = 'px-4 py-4';

export const winnerBannerClass = (show: boolean) =>
  cn(
    'text-[11px] font-black tracking-[0.35em] uppercase text-center transition-opacity duration-300',
    show ? 'text-accent-text opacity-100' : 'opacity-0 pointer-events-none'
  );

export const controlRowClass = 'flex items-center gap-3 px-4 pb-4';

export const spinBtnClass =
  'flex-1 h-[52px] bg-accent text-ink text-[15px] font-black rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:opacity-90 active:opacity-80';

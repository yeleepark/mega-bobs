'use client';

import { useEffect, useRef, useState } from 'react';

import { useSlotMachine } from '@/hooks/useSlotMachine';

import { Reel } from './_Reel';
import ParticipantList from './_ParticipantList';
import {
  cabinetClass,
  controlRowClass,
  dotClass,
  dotGroupClass,
  fullscreenBtnClass,
  gameZoneClass,
  gameZoneInnerClass,
  reelsAreaClass,
  spinBtnClass,
} from './SlotMachine.styles';

// eslint-disable-next-line max-lines-per-function, complexity
const SlotMachine = () => {
  const {
    names,
    input,
    setInput,
    isSpinning,
    winner,
    isDuplicate,
    scrollPos,
    canSpin,
    addName,
    removeName,
    spin,
  } = useSlotMachine();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (zoneRef.current) {
      await zoneRef.current.requestFullscreen();
    }
  };

  return (
    <div ref={zoneRef} className={gameZoneClass(isFullscreen)}>
      <div className={gameZoneInnerClass(isFullscreen)}>
        <div className={cabinetClass}>
          <div className="flex items-center justify-between px-4 pt-4 pb-0">
            <div className={dotGroupClass}>
              <div className={dotClass} />
              <div className={dotClass} />
              <div className={dotClass} />
            </div>
            <button
              className={fullscreenBtnClass}
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? '창 모드로 보기' : '전체화면으로 보기'}
              title={isFullscreen ? '창 모드' : '전체화면'}
            >
              {isFullscreen ? '⊡' : '⊞'}
            </button>
            <div className={dotGroupClass}>
              <div className={dotClass} />
              <div className={dotClass} />
              <div className={dotClass} />
            </div>
          </div>

          <div className={reelsAreaClass}>
            <Reel
              names={names}
              scrollPos={scrollPos}
              isSpinning={isSpinning}
              winner={winner}
            />
          </div>
          <ParticipantList
            names={names}
            winner={winner}
            input={input}
            setInput={setInput}
            isDuplicate={isDuplicate}
            isSpinning={isSpinning}
            addName={addName}
            removeName={removeName}
          />

          <div className={controlRowClass}>
            <button
              className={spinBtnClass}
              onClick={spin}
              disabled={!canSpin}
              aria-label="슬롯 돌리기"
            >
              {isSpinning ? 'PUSH…' : 'PUSH'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;

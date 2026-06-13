'use client';

import { useRef } from 'react';

import {
  chipClass,
  chipInputFieldClass,
  chipInputWrapClass,
  chipXClass,
} from './ParticipantList.styles';
import type { ParticipantListProps } from './ParticipantList.types';

const ParticipantList = ({
  names,
  winner,
  input,
  setInput,
  isDuplicate,
  isSpinning,
  addName,
  removeName,
}: ParticipantListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isSpinning || e.nativeEvent.isComposing) return;
    if ((e.key === 'Enter' || e.key === ' ' || e.key === ',') && input.trim()) {
      e.preventDefault();
      addName();
    } else if (e.key === 'Backspace' && !input && names.length > 0) {
      removeName(names[names.length - 1]);
    }
  };

  return (
    <div
      className={chipInputWrapClass(isDuplicate)}
      onClick={() => inputRef.current?.focus()}
    >
      {names.map((name) => (
        <div key={name} className={chipClass(name === winner)}>
          <span>{name}</span>
          {!isSpinning && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeName(name);
              }}
              className={chipXClass}
              aria-label={`${name} 삭제`}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <input
        ref={inputRef}
        className={chipInputFieldClass}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={names.length === 0 ? '이름 입력 후 Enter 또는 Space' : ''}
        disabled={isSpinning}
        maxLength={12}
        aria-label="참여자 이름 입력"
      />
    </div>
  );
};

export default ParticipantList;

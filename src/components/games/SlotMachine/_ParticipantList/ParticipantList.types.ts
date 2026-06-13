export interface ParticipantListProps {
  names: string[];
  winner: string | null;
  input: string;
  setInput: (value: string) => void;
  isDuplicate: boolean;
  isSpinning: boolean;
  addName: () => void;
  removeName: (name: string) => void;
}

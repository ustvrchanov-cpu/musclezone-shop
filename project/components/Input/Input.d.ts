export interface InputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  /** Hilfetext unter dem Feld */
  hint?: string;
  /** Fehlertext — ersetzt den Hint, färbt den Rahmen */
  error?: string;
  value?: string;
  onChange?: (e: any) => void;
  required?: boolean;
  autoComplete?: string;
}

export declare function Input(props: InputProps): JSX.Element;

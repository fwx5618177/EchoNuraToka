import { EditorState } from 'lexical';

export interface ChatInputProps {
  onChange: (editorState: EditorState) => void;
  onSend: () => void;
  disabled?: boolean;
}

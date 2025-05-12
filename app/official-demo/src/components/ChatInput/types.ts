import { EditorState, LexicalEditor } from 'lexical';

export interface ChatInputProps {
  onChange: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
  onSend: () => void;
  disabled?: boolean;
}

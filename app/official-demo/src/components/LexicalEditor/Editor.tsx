import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { EditorState, LexicalEditor } from 'lexical';
import AutoEmbedPlugin from './plugins/AutoEmbedPlugin/AutoEmbedPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import DefaultTheme from './plugins/DefaultTheme';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';

import { Box } from '@mui/material';

import { FC } from 'react';

interface EditorProps {
  onChange: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
  expanded?: boolean;
}

const initialConfig = {
  namespace: 'ChatEditor',
  theme: DefaultTheme,
  onError: (error: unknown) => {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

const Placeholder: FC = () => {
  return <div className="editor-placeholder">请输入...</div>;
};

export function Editor({ onChange, expanded }: EditorProps) {
  return (
    <Box className={`editor-wrapper${expanded ? ' editor-expanded' : ''}`}>
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <Box className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={`editor-input${expanded ? ' editor-input-expanded' : ''}`}
              />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoEmbedPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <OnChangePlugin onChange={onChange} />
          <TreeViewPlugin />
        </Box>
      </LexicalComposer>
    </Box>
  );
}

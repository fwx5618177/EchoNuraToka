import type { SerializedDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import type { ElementFormatType, NodeKey, Spread } from 'lexical';

export type FigmaComponentProps = Readonly<{
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  format: ElementFormatType | null;
  nodeKey: NodeKey;
  documentID: string;
}>;

export type SerializedFigmaNode = Spread<
  {
    documentID: string;
  },
  SerializedDecoratorBlockNode
>;

import { BlockWithAlignableContents } from '@lexical/react/LexicalBlockWithAlignableContents';
import { FigmaComponentProps } from './types';

export function FigmaComponent({ className, format, nodeKey, documentID }: FigmaComponentProps) {
  return (
    <BlockWithAlignableContents className={className} format={format} nodeKey={nodeKey}>
      <iframe
        width="560"
        height="315"
        src={`https://www.figma.com/embed?embed_host=lexical&url=\
          https://www.figma.com/file/${documentID}`}
        allowFullScreen={true}
      />
    </BlockWithAlignableContents>
  );
}

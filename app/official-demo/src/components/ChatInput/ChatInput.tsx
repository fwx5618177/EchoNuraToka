import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import { Editor } from '../LexicalEditor/Editor';
import { ChatInputProps } from './types';

import styles from './input-chat.module.scss';

export function ChatInput({ onChange, onSend, disabled }: ChatInputProps) {
  const [expanded, setExpanded] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.FocusEvent) => {
    if (!editorRef.current?.contains(e.relatedTarget as Node)) {
      setExpanded(false);
    }
  };

  return (
    <Box
      className={styles.chatInput}
      sx={{ flexDirection: 'row', alignItems: 'stretch', display: 'flex' }}
    >
      {/* 左侧：Editor 区域 */}
      <Box
        ref={editorRef}
        tabIndex={-1}
        onBlur={expanded ? handleBlur : undefined}
        sx={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}
      >
        {/* expand 按钮右上角浮动 */}
        <IconButton
          color="primary"
          aria-label="expand"
          onClick={() => setExpanded((v) => !v)}
          sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
        >
          {expanded ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
        </IconButton>
        <Box sx={{ flex: 1 }}>
          <Editor onChange={onChange} expanded={expanded} />
        </Box>
      </Box>
      {/* 右侧：按钮区 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          ml: 1,
        }}
      >
        <IconButton color="primary" onClick={onSend} disabled={disabled}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

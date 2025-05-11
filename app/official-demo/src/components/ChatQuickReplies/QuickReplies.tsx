import { Box, Button } from '@mui/material';
import { QuickRepliesProps } from './types';

import styles from './quick-replies.module.scss';

export function QuickReplies({ quickReplies, onSendQuickReply }: QuickRepliesProps) {
  return (
    <Box className={styles.chatQuickReplies}>
      {quickReplies.map((reply, idx) => (
        <Button key={idx} variant="outlined" size="small" onClick={() => onSendQuickReply(reply)}>
          {reply}
        </Button>
      ))}
    </Box>
  );
}

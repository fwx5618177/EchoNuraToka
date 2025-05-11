import { Box, Typography } from '@mui/material';

import classNames from 'classnames';
import styles from './message-list.module.scss';
import { MessageListProps } from './types';

export function MessageList({ messages, messagesEndRef }: MessageListProps) {
  return (
    <Box className={styles.chatMessages}>
      {messages.map((msg, idx) => (
        <Box
          key={idx}
          className={classNames(styles.chatMessage, {
            [styles['from-service']]: msg.from === '客服',
            [styles['from-user']]: msg.from === '用户',
          })}
        >
          <Typography variant="body1">{msg.text}</Typography>
          <Typography className={styles['msg-time']} variant="caption" color="text.secondary">
            {msg.time}
          </Typography>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
}

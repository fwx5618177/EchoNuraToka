import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { UserListProps } from './types';
import styles from './user-list.module.scss';

export function UserList({ users, selectedUser, onSelectUser }: UserListProps) {
  return (
    <Paper className={styles['chat-sidebar']}>
      <Typography variant="h6" className={styles['sidebar-title']}>
        智能客服系统
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem
            button
            key={user.name}
            selected={selectedUser.name === user.name}
            onClick={() => onSelectUser(user)}
          >
            <ListItemAvatar>
              <Badge color="error" badgeContent={user.unread} invisible={user.unread === 0}>
                <Avatar>{user.name[0]}</Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.online ? '在线' : '离线'} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

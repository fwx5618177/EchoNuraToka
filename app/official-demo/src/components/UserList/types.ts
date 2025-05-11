export interface User {
  name: string;
  unread: number;
  online: boolean;
}

export interface UserListProps {
  users: User[];
  selectedUser: User;
  onSelectUser: (user: User) => void;
}

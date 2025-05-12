export interface Message {
  from: string;
  html: string;
  time: string;
}

export interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export interface Message {
  from: string;
  text: string;
  time: string;
}

export interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

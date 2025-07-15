import { useEffect, useRef } from 'react';

export interface WebSocketMessage {
  event: string;
  data: unknown;
}

const useWebSocket = (
  url: string,
  raw: boolean = false
): { sendMessage: (message: WebSocketMessage) => void; socket?: React.MutableRefObject<WebSocket | null> } => {
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    socket.current = new WebSocket(url);

    socket.current.onopen = () => console.log('🟢 WebSocket connected');
    socket.current.onclose = () => console.log('🔴 WebSocket disconnected');
    socket.current.onerror = (error) => console.error('⚠️ WebSocket error:', error);

    return () => {
      socket.current?.close();
    };
  }, [url]);

  const sendMessage = (message: WebSocketMessage) => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not open');
    }
  };

  if (raw) {
    return { sendMessage, socket }; // Return the socket for read access
  }

  return { sendMessage };
};

export default useWebSocket;

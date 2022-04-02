import { io } from 'socket.io-client';

const initSocketConnection = _ => {
    const socket = io('http://localhost:5000');
}

export { initSocketConnection };
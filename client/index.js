const socket = io('/ask');

socket.on('connect', () => {
  socket.emit('ask', { text: 'asd', id: 123 });
  console.log('connected!');
});

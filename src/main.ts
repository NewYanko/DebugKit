import MachineID from 'node-machine-id';
import { io } from 'socket.io-client';

let a = io('http://127.0.0.1:4030/', {
  query: { Type: 'CLIENT', Key: '1eef2e8c-35e0-4d10-ba69-98b1c95c571f', Identifier: MachineID.machineIdSync() },
});
a.on('connect', () => {
  console.log('Connected!');
  a.emit('Event', 'The JSON date is ' + new Date().toJSON());
});

let c = 0;
function PrintValue(arg: () => number) {
  setInterval(() => {
    console.log(arg());
  }, 500);
}

PrintValue(() => c);
setTimeout(() => {
  c = 1213;
}, 750);

// import { platform, release, arch, cpus, freemem, uptime } from 'node:os';

// console.log(`sistema operativo ${platform()}`);
// console.log(`version del sistema operativo ${release()}`);
// console.log(`arquitectura ${arch()}`);
// console.log(`CPUs` + JSON.stringify(cpus()));
// console.log(`Memoria libre en megas ${freemem() / 1024 / 1024}`);
// console.log(`uptime ${uptime() / 60 / 60}`);

import os from "node:os";

console.log(`sistema operativo ${os.platform()}`);
console.log(`version del sistema operativo ${os.release()}`);
console.log(`arquitectura ${os.arch()}`);
console.log("CPUs" + JSON.stringify(os.cpus()));
console.log(`Memoria libre en megas ${os.freemem() / 1024 / 1024}`);
console.log(`uptime ${os.uptime() / 60 / 60}`);

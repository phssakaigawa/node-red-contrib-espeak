// name: espeak
// outputs: 0
var Espeak = global.get('espeak');
var mei = new Espeak();
mei.talk(msg.payload);

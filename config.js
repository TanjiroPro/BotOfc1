import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
//import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 525218138672

//*──ׄ✞ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.owner = [
  ['5493853024746', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿𝗮 💫', true],
  ['5493853024746']
];

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5493853024746'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'Valucita Bot'
global.sessions = 'ValucitaSession'
global.jadi = 'ValucitaJadiBot'
global.ValucitaJadibts = true

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.packsticker = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.packname = `𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫`
global.author = `♾━━━━━━━━\n⇝͟͞𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫͟ ⋆\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\nѕτιϲκєя ϐγ: 𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫`;
global.wm = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫';
global.titulowm = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫';
global.igfg = '𝕸𝖆𝖋𝖎𝖆'
global.botname = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫'
global.dev = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫'
global.textbot = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫'
global.gt = '͟͞𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫͟͞';
global.namechannel = '𝐁𝐨𝐭 𝐯𝐚𝐥𝐮𝐜𝐢𝐭𝐚 💫'

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.moneda = 'monedas'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝐓𝐇𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 ™◞ • 🌿
global.gp4 = 'https://chat.whatsapp.com/KLcre5L4AvZ0nSC2n5qNzB' //Grupo Oficial De Valucita clover 
global.gp1 = 'https://chat.whatsapp.com/KLcre5L4AvZ0nSC2n5qNzB' //Grupo 2
global.gp2 = 'https://chat.whatsapp.com/KLcre5L4AvZ0nSC2n5qNzB'//
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal test 
global.yt = 'https://www.youtube.com' //Canal De Youtube
global.md = 'https://github.com' //Github Oficial
global.correo = ''
global.cn ='https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

//global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

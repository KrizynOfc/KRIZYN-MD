**
* Percuma aku bilang jangan ganti ya kak
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
๐ฎ LIST SEWA BOT NYA

โตอกอโช prince sewa bot
   Rp.15.000
   
`
     let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '๐ฎ ๐๐ฐ๐ฏ๐ต ๐ง๐ฐ๐ณ๐จ๐ฆ๐ต ๐ต๐ฐ ๐ง๐ฐ๐ญ๐ญ๐ฐ๐ธ ๐ฎ๐บ ๐ข๐ค๐ค๐ฐ๐ถ๐ฏ๐ต',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/Kricom'
             }

           },
                {
               urlButton: {
               displayText: 'Myweb',
               url: 'https://lynk.id/kri.com'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Group',
               id: '.allgc',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Command',
               id: '.krizyn',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['socialmedia']
handler.tags = ['info']
handler.command = /^(sosmed|medsos|smowner)$/i

module.exports = handler
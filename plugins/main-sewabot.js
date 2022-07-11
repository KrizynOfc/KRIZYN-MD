**
* Percuma aku bilang jangan ganti ya kak
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
📮 LIST SEWA BOT NYA

➵͜͡✪ prince sewa bot
   Rp.15.000
   
`
     let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 𝘋𝘰𝘯𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘧𝘰𝘭𝘭𝘰𝘸 𝘮𝘺 𝘢𝘤𝘤𝘰𝘶𝘯𝘵',
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
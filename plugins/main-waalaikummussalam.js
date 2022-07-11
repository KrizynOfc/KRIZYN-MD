let handler = async (m, {conn}) => {
let anu = `
Hello User yang bijak, Saya Bot whatsapp Multi Device
yang berada di Whatsapp, bot ini kekgunaan nya untuk
mempermudah kalian mendownload apapun
`
let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            hydratedContentText: anu,
            imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/Kricom'
             }

           },
                {
               urlButton: {
               displayText: 'Group Bot',
               url: 'https://chat.whatsapp.com/HVyRaNWp18NKMAIHv8NjLP'
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewa',
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
               id: '.allmenu',
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
handler.customPrefix = /^menu$/i // ketik bot (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

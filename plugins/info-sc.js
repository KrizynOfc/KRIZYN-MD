/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hello kak ${ye} Lagi Nyari Sc Ya? 

๐ฎ ๐๐๐๐ ๐๐๐ ๐๐ ๐ ๐๐ ๐๐๐๐

โตอกอโช ๐๐พ๐ ๐๐๐ฑ๐ด :
youtube.com/c/hokenbeusz

โตอกอโช ๐น๐ฐ๐ฝ๐ถ๐ฐ๐ฝ ๐ป๐๐ฟ๐ฐ ๐ผ๐ฐ๐ผ๐ฟ๐ธ๐ :
https://lynk.id/kri.com
conn.sendBut(m.chat, esce, '๐ฎ ๐๐ฐ๐ฏ๐ต ๐ง๐ฐ๐ณ๐จ๐ฆ๐ต ๐ต๐ฐ ๐ง๐ฐ๐ญ๐ญ๐ฐ๐ธ ๐ฎ๐บ ๐ข๐ค๐ค๐ฐ๐ถ๐ฏ๐ต', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler

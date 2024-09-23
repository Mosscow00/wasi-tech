const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher:Zubair@sigma-male.ggwx4gc.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'wasitec@gmail.com'
global.github = 'https://github.com/itxxwasi/wasi-tech'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/chwaseem565_' // add your username
global.sudo = process.env.SUDO || '923135673658'
global.devs = '923192173398';
global.website = 'https://github.com/itxxwasi/wasi-tech' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0e3ceca721a6e277dbb61.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'WASI-TECH' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'WASITECH' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUliQUsrbVdKS2JPemcxQ0pYdm9SVGNDK3N6UktJaEpkVkZqTmQ0cVBtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnozVlpNYzhwelpvazRIR2xFdDdQRXQxbDVab2ltY2lJUGp5SzVzejYxaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRm92Vk10NGl2TDRyV1JLdkJnTUFLNHMvRDExMFVnSmg0ai8rN1ZSclZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0RWNJYmhQaTB4Q3ZMMG1LbjVkVGdIVjhlMkdYVTdMNE1JcERxaWNnU2swPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNbXVlS0hqdjJqNFVnemlmdnRteVJXMDhyZUxzZ1IwYlNvU0ZVckJqbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlczdWRVZ2xON1ZGdWM3TlFybVF6T2lkYUl1TWRUZEN4SFJCalgrWHVDMjg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWVB5TURHTEF5OGZzc3hDZWNRM2dZMU41QnJZMDFVMGI1cDFaT1lWcXFVYmRXZWpIRmx0RGJJazZuaU55RUtYYml2ektxR0QzbmZyNmc4amlSK0JCUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MSwiYWR2U2VjcmV0S2V5IjoiSEpIRUsreEhEZnBaQTZGWDRlRy94YUk0MDQ4N1FnTks4UzZuTy9NTnUxZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiazZIX1ZVWXJTUUdZTTEtSmdhMXM2QSIsInBob25lSWQiOiI5OTY2MjYwYS04NTBjLTQ0YTAtYjJiNC1mZmYxMmMzOGI3ODUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05vemFmbEgwdHpSS0pOTlhSUTJYMFlBb3kwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnRRMWphcmI0eUVVUzkzOUhZdXpZWFA2WHc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTGkwdWtERUpDeng3Y0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2LzVTVGV4Z2g3TGM0NjlrSmhQZWk5aFlRNmZPZnI0UGZ6dlNuS2FPM1g0PSIsImFjY291bnRTaWduYXR1cmUiOiJRbWlYTEpjU0VWVUZFdjMzTUdQcjlvWklDWElkRXJOOVJQTTduSGtwVU0xMW5xdkVDcDgvMDdKTGo3NkVlRWdKTCtnT1JrU2NSdFpQd1ViVWF5d29Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidzlvR3d2TlAvM0dpRFd1RkxWNUZ6YTFyamtPeUFzcTlrbzcvZk95MS9JR1VKeklxZk4vRm41UkZPS2JDc01zVVJZSVhTWFVBYXhmc2dpYnlpSjlTRGc9PSJ9LCJtZSI6eyJpZCI6IjIwMTIxMDMwNzg2OToxQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIwMTIxMDMwNzg2OToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIvK1VrM3NZSWV5M09PdlpDWVQzb3ZZV0VPbnpuNitEMzg3MHB5bWp0MSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcxMjU5MDh9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'wasi-tech' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'wasi-tech' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '1' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

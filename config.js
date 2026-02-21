const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JXMHBVdW1HdUgrT2JPeDUwVmpKTXk0QUFJUlEzbEx6cHFid1o5cWZGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN08wSHFRMlUzbXlRVE8yTDJUWE9pNUpNTXAwVGNlYyt1YXNWUzBjL0lBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTlNUVjJQdnZ1emJvbXZsb1lRNVlSc29icm5SUWZLbGZPS29WVHUwVGxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5VW1mVkF6Y3pvMldtaGxQYVhRSzZTTkZBMVBKcW1uMXRZcTR5eUk0UWprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQS0VoWi9PZWVnNnZKZUYzQ0VBWFNTWG5nVjVwblNnZ1loaFNrcXVmVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUwaTVzUCtLWXd1UUFMcmUzTDZsN0htSUx4SStESUlITFF3U1hvcTRpRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdOZTlYQXI4MlIvaTdFS2NBTy9pNlBYVDFMSkJ5Q3VLZzhOZlNXY2szcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlhEeFVNZFBwN2lDK2NieTc3S0hVeGFNd1hxaUU4UEtoVGZCQ2wxL09taz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaTEJoRlFGWUNqSFlpZnZ2OHpsa2h0ajc2eEUzbGxjelMvRENIUGhHUkhHK3N5V1Y4OGpJU0hQNDVKL2NSRWUrQVVwR3lwRkJYWGFjUzAyOU5TRmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJUYVdBT0JpQjMxeHIwdmVnWW9rc2Fienk3d0dnRTRWWlZPYnRsSEI1NGJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxODY5NjUzMDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzQzUwMkY4RUIzQURFRUY5OURDRTQ0OEQ1MzYxNjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MTY5OTc3M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE4Njk2NTMwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzczMzA4OThGNTc2NkZDNjNGQzIyQ0M4N0VENkIyMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcxNjk5Nzc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTg2OTY1MzAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOUI1Q0YwMTUyNTdGODZFM0E2RTQzMUVGQ0FGNUYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzE2OTk3NzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxODY5NjUzMDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxQTk1ODg5NDI1M0I5MkVBMTlDOUY1NDI5MDQ2RUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MTY5OTc3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE4Njk2NTMwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzZGOEQ3QjUyRERFRTdEMEUwNUI0MUEwM0RCMUY1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcxNjk5Nzc4fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiIyMzQ4MTg2OTY1MzAzOjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMjM3ODcxNjU1MzQ0Njo3QGxpZCIsIm5hbWUiOiJUaW1teSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnFwMWYwRUVLZjg1OHdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVEQ0a3pWNERpOFVYVVhtd0x5OFR2ZWhmbDNHOVFpV0M4MlR0THNnSzlnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicTg0Q2VveWQ5amRVdGxTbUIvYTFSdnZRbkFYZ1N6bnRsY0tvRHdkTnBkSk5lQTNUV290ajJUaTh6NllvU05BMlJOZVVxaWZHblY4L2NZVFh6TGE5Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9HZmtqSzJ2UUxkTEhWbkgyM1JpL3dueW9IY1ZUT1RtWGprWVNmOGo2UTNOY01KTE9BeFBFbDV6d0VwVDdMb0Z0UTZKY0tla2lLUUdHVE8yai9pTmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE4Njk2NTMwMzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV3K0pNMWVBNHZGRjFGNXNDOHZFNzNvWDVkeHZVSWxndk5rN1M3SUN2WUkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTY5OTc3MCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEKysifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛_𝖇𝖔𝖙🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛_𝖇𝖔𝖙",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛_𝖇𝖔𝖙",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2347044330842",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕾𝖔𝖋𝖙𝖜𝖆𝖗𝖊_𝖉𝖊𝖛 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2347044330842",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With DEW-MD Hear
SESSION_ID: process.env.SESSION_ID || "DEW-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEBAhIiOWEQQRBTv2hv7UEKB1SBgVQHChP++gd09Mw+7s708FXXJPHnOyfwOshxT5KIGaN9BQXAFGeqWrCkQ0MC4jCJEQB+EkEGggcNCmXmv4RFNi3RzaJXYwvR45jndXXACrvcjJkayvk9SIXkBjz4oynOKg98EnNikjmR22CaqzxliEK+aW2ypbaD4LD7X67wiys06mEYTv4BHFxFigrPYLC7oighMXdT4EJOvwS8dxEbeYrm6CIJhiyIvxEdb3042eLTAx2TSu1xui7Yl9XT3NfjKVlxu74FfvcGk3Qxs0zd86xadsCfa5oh/LYOhXdTeIKzzd/gUxxkKnRBlDLPmy7ybvieNF1v1vGybVp/r+33hRW+x0htygr68t9vwPLJw3Dvvgq8Bb+Ul2ib8zEPB6jhu2lZSHbaFu0UaFYqpzMTTcrhzV3ZvSn8F7pNPryT/h/dGn+mWrdSj+XE/cww7rJz8lcuJUqR8hNdH+XT3Ynfow+MXea99pYbrqbNYXRhEw4C9mbpo7pXTXhaHlhrNEI7DdroSavMnfMhK8juUk9184XoNWtyKheUtacPGa1PmKwuPZkjdJux8eM0bhXsTe9gaG3A2mY+g5VMbrkdDN8/rvDpsjGQvvbnk5Bshi66eXr88K0pQ44RAEx59QFCMKSOQ4Tzr9mShD2BYbVBAEHuyC+aZlduRWUa9u+pzqifRV8eRk8tBLBvPil5Xe3296FnIFPQX0AcFyQNEKQptTFlOGg9RCmNEgfbnX32QoTt7163LJgp9EGFC2S4rizSH4aeon4cwCPIyY5smC4xugQjQ+J/biDGcxbSjscwgCS64QsYFMgq0CKYU/SgQERQCjZES/WhaIw873peOJx3Gcx/0wfWpBw6BBlRJkUVloA4GqiYIf9BvdRcVFsW3DDHQBxnsLoMwxKAP0ueTkSgKkjyUBEkW1VH3qtt//ADbxQ4RgzilQAPGXIHV3Vy1c8K3+umkb3Td1Z8Efhb3aZJ3FfycYPl8tKeuVR15KZpw1i5FPsfLczqpjT28RpjnlAnTd/8UBGggufMHtTny/LoX+stkiQLoqdsk5GxnpmIyKBV8M+ntrFyiE80q7i7W27nr2T2jrl268Z09ofU0SkJ/FJVoM3eHpjGOX7psIapwgH5NhsNhPhnI5cC/Z25vhODMvV/kQDYyySid2biq18hrab6TbvztfDxdTq6jltOzfBAnBRy0E+dQvEWbOzeH+1tVESIIhvFh32f7pB9jCz+d1cnW/UYYPafAhz7/JeM77s5s/KP/S4iPsfIvrTneDl2pPAj3O76cBXVp19x9Pzu+cepyo+gjPT0UmcT8Xq2sLPB4/NUHRQpZlJMr0AC9niHoA5KXnXWdLMp/k8nQPceM43lXdQop03+2wxZfEWXwWgBNUBRB5SVREt5v+SQvbEgvQAOCK11sqfN2oxfFhkH22V1A777J7AgefwOB6ktZeAcAAA==",
// Dew MD Api Site Url
API_BASE: process.env.API_BASE || "https://api.srihub.store",
// Dew MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "dew_kI5goH3q6XmpI7stwPX9m0aICW9KBO6w1DM0kcBy",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAVINDU-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAVINDU_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAVINDU_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94763079634",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Hansa Dewmina",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94763079634",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};



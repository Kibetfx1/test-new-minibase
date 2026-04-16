'use strict';
// settings.js — used by some plugins via require('../settings')
// Reads from process.env so it stays in sync with index.js config
module.exports = {
  get botName()    { return process.env.BOT_NAME     || '🔥 TEDDY-XMD 🔥'; },
  get botOwner()   { return process.env.OWNER_NAME   || 'Teddy'; },
  get ownerNumber(){ return process.env.OWNER_NUMBER || '254799963583'; },
  get coOwner()    { return process.env.CO_OWNER     || 'Teddy'; },
  get prefix()     { return process.env.PREFIX       || '.'; },
  get mode()       { return process.env.BOT_MODE     || 'public'; },
};

/*
* Tambahin nama author lah
* Author MhankBarBar, Farhan, Nurul, FxSx, FdlX
* Tambahin ya Cape Gan ngefix² Yg Ga work
* Jan numpang nama doank
- What's New?
* New Features
*/
const {
  WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { bahasa, help, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Nurul\n'
            + 'ORG:Owner Manca Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283815956151:+62 838-1595-6151\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:FdlXploit\n'
            + 'ORG:Co Owner Manca Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6282136099756:+62 821-3609-9756\n'
            + 'END:VCARD'

prefix = "#"
name = "MANCA BOT"
rdaftar = "@thenay_xploit_"
rmenu = "@thenay_xploit_"
botinfo = "@thenay_xploit_"
limitt = 999999999
memberLimit = 10
ban = []
premium = ["6283815956151@s.whatsapp.net","6282136099756@s.whatsapp.net"]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const nuy = new WAConnection()
	nuy.logger.level = 'warn'
	console.log(banner.string)
	nuy.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
	})

	fs.existsSync('./Fxc7.json') && nuy.loadAuthInfo('./Fxc7.json')
	nuy.on('connecting', () => {
		start('2', 'Connecting...')
	})
	nuy.on('open', () => {
		success('2', 'Connected')
	})
	await nuy.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(nuy.base64EncodedAuthInfo(), null, '\t'))

	nuy.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await nuy.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `✿➤ ʜᴀʟʟᴏ @${num.split('@')[0]}👋
✿➤ ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ
✿➤ *${mdata.subject}*

✿➤「 *ɪɴᴛʀᴏ* 」

✿➤ *ɴᴀᴍᴀ* :
✿➤ *ᴜᴍᴜʀ* :
✿➤ *ɢᴇɴᴅᴇʀ* :
✿➤ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :

✿➤ Note Dari Admin
✿➤ Jangan Toxic/Sara
✿➤ Hargai Member Lain:),
✿➤ Patuhi Peraturan Di Deskripsi

✿➤ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴍᴀɴᴄᴀ ʙᴏᴛ
✿➤ ᴋᴇᴛɪᴋ ${prefix}daftar`
				let buff = await getBuffer(ppimg)
				nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴘʀᴏᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ʏᴀɴɢ ᴀᴅᴅ ᴀᴅᴍɪɴ ꜱɪᴀᴘᴀ?, ᴅᴀʜ ɪᴢɪɴ ᴏᴡɴᴇʀ ɢʀᴜᴘ ʙᴇʟᴜᴍ!`
				let buff = await getBuffer(ppimg)
				nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴅᴇᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ʏᴀɴɢ ᴜɴ ᴀᴅᴍɪɴ ꜱɪᴀᴘᴀ?, ᴅᴀʜ ɪᴢɪɴ ᴏᴡɴᴇʀ ɢʀᴜᴘ ʙᴇʟᴜᴍ!`
				let buff = await getBuffer(ppimg)
				nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await nuy.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ꜱᴀʏᴏɴᴀʀᴀ @${num.split('@')[0]}👋\nꜱᴇᴍᴏɢᴀ ᴛᴇɴᴀɴɢ ᴅɪ ᴀʟᴀᴍ ꜱᴀɴᴀ`
				let buff = await getBuffer(ppimg)
				nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		nuy.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	nuy.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const manca = ["0@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = nuy.contacts[nameReq] != undefined ? nuy.contacts[nameReq].vname || nuy.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			nuy.chatRead(from)
			

			mess = {
				wait: '*⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ ᴅɪ ᴩʀᴏꜱᴇꜱ...*',
				success: '*ꜱᴜᴋꜱᴇꜱ...*',
				error: {
					stick: '*ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ*',
					Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!*'
				},
				only: {
					group: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴩ!*',
					benned: '*ᴍᴀᴀꜰ ɴᴏᴍᴇʀ ᴋᴀᴍᴜ ᴋᴇ ʙᴀɴɴᴇᴅ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ ᴀɴᴅᴀ*',
					ownerG: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!*',
					ownerB: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ʙᴏᴛ!* ',
					premium: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!*',
					userB: `ʜᴀʟʟᴏ ᴋᴀᴋ *${pushname2}*, ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ \n*${prefix}daftar*`,
					admin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!*',
					Badmin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!*',
					publikG: `ᴍᴀᴀꜰ ʙᴏᴛ ꜱᴇᴋᴀʀᴀɴɢ ꜱᴜᴅᴀʜ ᴅɪᴩʀɪᴠᴀᴛᴇ ᴏʟᴇʜ ᴏᴡɴᴇʀ\nᴜɴᴛᴜᴋ ʟᴇʙɪʜ ᴊᴇʟᴀꜱɴʏᴀ ᴋᴇᴛɪᴋ \n*${prefix}infobot*`
				}
			}

			const botNumber = nuy.user.jid
			const ownerNumber = ["6283815956151@s.whatsapp.net","6282136099756@s.whataapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await nuy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await nuy.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nuy.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nuy.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    nuy.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			nuy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nuy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nuy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        nuy.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    nuy.sendMessage(from, `ᴍᴀᴀғ ᴍᴀɴᴄᴀ ʙᴏᴛ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴀꜱᴜᴋ ɢʀᴏᴜᴘ ᴋᴀʀɴᴀ ᴍᴇᴍʙᴇʀ ɢʀᴏᴜᴘ *${groupMetadata.subject}* ᴛɪᴅᴀᴋ ᴍᴇᴍᴇɴᴜʜɪ ʟɪᴍɪᴛ ᴍᴇᴍʙᴇʀ\n\nᴍɪɴɪᴍᴀʟ ᴍᴇᴍʙᴇʀ *${memberLimit}*`, text)
					setTimeout( () => {
                            nuy.groupLeave(from)
                            }, 100)
		setTimeout( () => {
		nuy.updatePresence(from, Presence.composing)
					}, 10)
		setTimeout( () => {
		reply(`ᴍᴀᴀғ ᴍᴀɴᴄᴀ ʙᴏᴛ ꜱᴇɢᴇʀᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
					
		       } catch (err) { console.error(err)  }
 	 
 
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    nuy.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        if (bad.includes(messagesLink)) {
        nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/kasar.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (adminNumber.includes(messagesLink)){
        	hasil = `        ────────────────
ʜᴇɪ *${pushname2}* ᴄᴏʙᴀ ᴋᴇᴛɪᴋ *${prefix}menu*
        ────────────────`
nuy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ketik #menu kak", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
}
		if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		nuy.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 100)
		setTimeout( () => {
		nuy.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname2}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
		
     	   if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

                switch(command) {
				case 'menu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				nuy = `꧁「 *ᴍᴀɴᴄᴀ ʙᴏᴛ* 」꧂

http://ɑpɑkabarsemua.id

✿➤「 *ɪɴsᴛᴀɢʀᴀᴍ* 」

https://www.instagram.com/thenay_xploit_

✿➤「 *ʙᴏᴛ ɪɴғᴏ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ᴄʀᴇᴀᴛᴏʀ: ɴᴜʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴄʀᴇᴀᴛᴏʀ: ғxsx
♡ۣۜۜ፝͜͜͡͡✿➤ ᴄʀᴇᴀᴛᴏʀ: ғᴀᴅʟɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴘʀᴇғɪx: ${prefix}
♡ۣۜۜ፝͜͜͡͡✿➤ ᴜꜱᴇʀ ᴛᴇʀᴅᴀғᴛᴀʀ: ${user.length}

✿➤「 *ᴜꜱᴇʀ ɪɴғᴏ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴀᴍᴇ: ${pushname2}
♡ۣۜۜ፝͜͜͡͡✿➤ ʟɪᴍɪᴛ: ${limitt}
♡ۣۜۜ፝͜͜͡͡✿➤ ʀᴇɢɪꜱᴛᴇʀᴇᴅ: √

✿➤「 *ᴀʙᴏᴜᴛ ᴍᴀɴᴄᴀ ʙᴏᴛ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇᴘᴏʀᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴏɴᴀꜱɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏᴡɴᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏᴏᴡɴᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴘᴇᴇᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴀғᴛᴀʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪᴍɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏᴛᴀʟᴜꜱᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴏᴄᴋʟɪꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀɴʟɪꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀʜᴀꜱᴀ

͏͏͏͏͏͏͏͏͏͏͏͏͏͏✿➤「 *ɴᴇᴡ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴜʙ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʜᴏꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏᴘᴛᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴀᴋᴇᴀᴅᴅʀᴇꜱꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴏᴏɢʟᴇꜱᴇᴀʀᴄʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜʙᴅ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜɪɴᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛʜᴇɴɪɢʜᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀɪɴʙᴏᴡ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴏᴠᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏɴᴇᴄᴜᴘ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴋʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴀᴛᴜʀᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴏꜱᴇɢᴏʟᴅ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴀᴛᴜʀᴇ3ᴅ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏᴄᴇᴀɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴜᴍᴍᴇʀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴜɴᴅᴇʀɢʟᴀꜱꜱ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴇᴍᴇᴛᴇʀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴏʏᴀʟʟᴏᴄᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏғғᴇᴄᴜᴘ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏғғᴇᴄᴜᴘ2 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴇᴏɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʟᴏᴡ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴜᴍᴍᴇʀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғʟᴏᴡᴇʀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʀᴀɴᴅɪᴇɴᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇᴍʙʀᴏɪᴅᴇʀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴜɴɴʏᴄᴜᴘ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏʀᴄʜɪᴅꜱ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴍᴏᴋᴇ2 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴏᴠᴇᴏɴᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴍᴏᴋᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏɴᴇꜱɪʟᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʟᴏᴡɪɴɢ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴇᴀʀᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴏʟғ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱɪᴍɪꜱɪᴍɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ2
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ3
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏᴠɪᴅɪɴᴅᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏᴠɪᴅɢʟᴏʙᴀʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀɴᴅᴏᴍᴡᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀʙᴜᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜᴏᴛᴇᴍᴜꜱʟɪᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴜʙɢʟᴏɢᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴜᴛᴛᴇʀғʟʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴏᴅᴇᴘᴏꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴀᴄᴀᴋɪᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴋᴀꜱɪᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴇᴋʀᴇꜱɪᴊɴᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏғɪʟᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏɪʟᴍ2
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴋ21
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋɪꜱᴀʜɴᴀʙɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴀʜʟɪʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴀᴅɪᴛꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪᴘᴜᴛᴀɴ6
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄɴɴɴᴇᴡꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇᴘᴜʙʟɪᴋᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴇᴍᴘᴏɴᴇᴡꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴜᴍᴘᴀʀᴀɴɴᴇᴡꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴀᴢʏᴍᴇᴅɪᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴀɴɢᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴜꜱᴏɴɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏᴜᴘʟᴇꜱʜɪᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏᴘᴀɴɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʏᴜʀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴜꜱꜱʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀᴋᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴏᴡᴊᴏʙ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴇᴡᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴀɪғᴜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇʀᴏʏᴜʀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴜɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴡᴏᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪᴄᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋɪꜱꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴍᴜɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴜᴅᴅʟᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴜʟʟʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜɪɴᴏʙᴜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴇɢᴜᴍɪɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴜꜱʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜɪɢʜғɪᴠᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴀɴᴅʜᴏʟᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴍɪʟᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʟᴏᴍᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʀɪɴɢᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴇɴᴛᴀɪᴘɪᴄᴛ

͏͏͏͏͏͏͏͏͏͏͏͏͏͏✿➤「 *ᴍᴇᴅɪᴀ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏᴄʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪᴍɢ2ᴜʀʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏᴍᴘ3
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɢꜱᴛᴀʟᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴꜱᴛᴀᴠɪᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴꜱᴛᴀɪᴍɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴꜱᴛᴀꜱᴛᴏʀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘʟᴀʏᴍᴘ3
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғʙ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱɴᴀᴄᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʏᴛᴍᴘ3
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʏᴛᴍᴘ4
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴏᴏx
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏᴀʟᴀᴍᴀᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘʟᴀʏꜱᴛᴏʀᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴍᴜʟᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱꜱᴡᴇʙ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴜʀʟ2ɪᴍɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏɪᴍɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛɪᴋᴛᴏᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴏᴛᴏᴛɪᴋᴛᴏᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋʙʙɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴀɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠɴᴏᴡ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴅᴡᴀʟʙᴏʟᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪʀɪᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʜᴏʀᴅ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡɪᴋɪ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʀᴀɪɴʟʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇꜱᴇᴘᴍᴀꜱᴀᴋᴀɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴇʀɪᴛᴀʜᴏᴀx
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴀᴘ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғɪʟᴍ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀʀᴀᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sʜᴏᴘᴇᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏɴᴏᴍᴏʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴘᴋᴘᴜʀᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴏᴅᴅʀᴏɪᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏᴄᴜᴀᴄᴀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴍᴅᴜɴɪᴀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛʀᴇɴᴅᴛᴡɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴏᴏɢʟᴇ

✿➤「 *ᴋᴇʀᴀɴɢ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴘᴀᴋᴀʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙɪꜱᴀᴋᴀʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀᴛᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴀᴛᴀᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴏʙʙʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛʀᴜᴛʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴀʀᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴀᴋᴛᴀ

✿➤「 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛʀɪɢɢᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴀsᴛᴇᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴛɪᴋᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢɪғꜱᴛɪᴋᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴀɴɢɪꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴇʟᴜᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄɪᴜᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴɢᴇᴡᴇ

✿➤「 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴇᴍᴜᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴜᴘᴀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀꜱꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʟᴏᴡ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴀꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴛꜱ

✿➤「 *ɪᴍᴀɢᴇ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴛᴀᴠ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅʀᴀᴡɪɴɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀɪɴᴅʀᴏᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴɪɢʜᴛʙᴇᴀᴄʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴋᴇᴛᴄʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴀɴᴛᴇᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴀᴘᴛᴏᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪɴᴇᴘʜᴏᴛᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʀᴏꜱꜱɢᴜɴ

✿➤「 *ᴅᴜɢᴇᴍ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ɪʀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴛᴀᴘɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ʏᴏᴜʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴀᴡᴀʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ʙᴏᴍᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴜᴍᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ʀᴜʟᴇs
♡ۣۜۜ፝͜͜͡͡✿➤ ɢᴀʀᴏx
♡ۣۜۜ፝͜͜͡͡✿➤ ᴍᴀɢɪᴄ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴍᴇɴʏᴜᴋᴀɪᴋᴜ

✿➤「 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴇᴋᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴏʟɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡɪʙᴜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴜꜱʙᴜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴇᴏɴɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴀʀᴜᴛᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍɪɴᴀᴛᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴏʀᴜᴛᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜɪɴᴀᴛᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴀᴋᴜʀᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴀꜱᴜᴋᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀɪᴢᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴋɪʀᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪᴛᴏʀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴜʀᴜᴍɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍɪᴋᴜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀɴɪᴍᴇ

✿➤「 *ɢʀᴜᴘ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀɴᴛᴇɴɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴀɴᴛɪᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴇʙᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴏᴅᴇᴀɴɪᴍᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀɴᴛɪʟɪɴᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʀᴜᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴏᴡɴᴇʀɢʀᴜᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛᴘᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɪɴғᴏɢᴄ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋɪᴄᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋɪᴄᴋᴛɪᴍᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘʀᴏᴍᴏᴛᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇᴍᴏᴛᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʀᴜᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴀɢᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜɪᴅᴇᴛᴀɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴀɢᴀʟʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴇɴᴛɪᴏɴᴀʟʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴅɪᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғɪᴛɴᴀʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴꜱғᴡ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱɪᴍɪʜ

✿➤「 *ᴍᴀᴋᴇʀ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜᴏᴛᴇᴍᴀᴋᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴀʜᴛᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}8ʙɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʟᴏᴡɴᴇᴏɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢꜱᴜɢɢᴇꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴀɴᴅʟᴇᴍᴜɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴏᴠᴇᴍꜱꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴜɢғʟᴏᴡᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴀᴘᴇʀɢʟᴀꜱꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴏᴍᴀɴᴄᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʜᴀᴅᴏᴡ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢʟɪᴛᴄʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏғғᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴀɴᴅʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴘᴏᴛᴛᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡᴏᴏᴅʙʟᴏᴄᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀʟᴀxᴛᴇxᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀʟᴀxsᴛʏʟᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴘɪɴᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴜᴘʏᴄᴜᴛᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴏʟᴏɢʀᴀᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ

✿➤「 *ғᴜɴ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴜʟɪꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴜʟɪꜱ2
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱʟɪᴅᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀɴᴊɪɴɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴜᴄɪɴɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʏʙᴇʀᴘᴜɴᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴇꜱᴛɪᴍᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴢᴏᴅɪᴀᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜɪʟɪʜ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴇᴄᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴏɢᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜᴏᴛᴇꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀᴛᴀʙɪᴊᴀᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴜᴄɪɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴀɴᴛᴜɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀᴛᴀᴅɪʟᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀᴛᴀᴄɪɴᴛᴀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀɴᴅᴏᴍᴋᴘᴏᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴇᴋᴇʀʙᴜᴄɪɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴋᴀᴛᴀɪʟʜᴀᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴇʀꜱᴇɴɢᴀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘʙᴜᴄɪɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴘғᴏɴᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴇxᴛꜱᴛʏʟᴇ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍɪᴍᴘɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴜɪꜱɪɪᴍɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀꜱᴜᴘᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ғᴀᴍɪʟʏ100
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴍᴇᴍᴇɪɴᴅᴏ

✿➤「 *ꜱᴀɴɢᴇ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄᴇʀꜱᴇx
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴏʀɴʜᴜʙ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}xᴠɪᴅᴇᴏꜱ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴꜱғᴡʟᴏʟɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴꜱғᴡʙʟᴏᴡᴊᴏʙ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴꜱғᴡɴᴇᴋᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴꜱғᴡᴛʀᴀᴘ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴇɴᴛᴀɪ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ɴᴇᴋᴏᴘᴏɪ

✿➤「 *ɪꜱʟᴀᴍ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴊᴀᴅᴡᴀʟꜱʜᴏʟᴀᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜʀᴀɴᴀᴜᴅɪᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜʀᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜʀᴀɴʟɪꜱᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ϙᴜʀᴀɴꜱᴜʀᴀʜ 

✿➤「 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴇᴄʀʏᴘᴛ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇɴᴄᴏᴅᴇ64
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇᴄᴏᴅᴇ64
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇɴᴄᴏᴅᴇ32
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇᴄᴏᴅᴇ32
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇɴᴄʙɪɴᴀʀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇᴄʙɪɴᴀʀʏ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴇɴᴄᴏᴄᴛᴀʟ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇᴄᴏᴄᴛᴀʟ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʜᴀꜱʜɪᴅᴇɴᴛɪғɪᴇʀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴏʀᴋɪɴɢ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴘᴀꜱᴛᴇʙɪɴ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴛɪɴʏᴜʀʟ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙɪᴛʟʏ 

✿➤「 *ꜱᴘᴀᴍ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴘᴀᴍᴄᴀʟʟ 
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴘᴀᴍɢᴍᴀɪʟ 

✿➤「 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇᴍᴏᴠᴇᴘʀᴇᴍ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅʙᴜᴄɪɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅᴀᴜᴅɪᴏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛᴍᴇᴍʟɪᴍɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʀᴇꜱᴇᴛʟɪᴍɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛʟɪᴍɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛʀᴇᴘʟʏ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛᴘʀᴇғɪx
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴄ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴄɢᴄ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴜɴʙᴀɴ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʙʟᴏᴄᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴜɴʙʟᴏᴄᴋ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʟᴇᴀʀᴀʟʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴅᴇʟᴇᴛᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄʟᴏɴᴇ
♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ʟᴇᴀᴠᴇ

✿➤「 *ᴛʜᴀɴᴋs ᴛᴏᴏ* 」

♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴜʏ/ɴᴜʀᴜʟ
♡ۣۜۜ፝͜͜͡͡✿➤ ғxsx
♡ۣۜۜ፝͜͜͡͡✿➤ ғᴀᴅʟɪ xᴘʟᴏɪᴛ
♡ۣۜۜ፝͜͜͡͡✿➤ ᴀʟʟ ᴍᴇᴍʙᴇʀ 
♡ۣۜۜ፝͜͜͡͡✿➤ ᴍᴄ-ʙᴏᴛ | ғᴅʟ-ʙᴏᴛ`
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
nuy.sendMessage(from, nuy, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Halo User Manca 👋", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')}}}})
nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	    
            break
            case 'help':
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
nuy.sendMessage(from, help(name), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "@thenay_xploit_", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
    	    break
            case 'gifstiker':
				case 'stiker':
				case 'sticker':
				case 'gifsticker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 'sticker':
				case 's':
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nuy.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								nuy.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nuy.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Gagal, pada saat mengkonversi ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								nuy.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nuy.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								nuy.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender) 
					break 
					case 'shopee':
                      if (isBanned) return reply(mess.only.benned)
			        if (!isUser) return reply(mess.only.userB)
			    hmml3 = await fetchJson(`https://pencarikode.xyz/api/shopee?search=${body.slice(8)}&apikey=pais`)
                     buffer = await getBuffer(`https://e.top4top.io/p_1886uvsdz0.jpg`)
                     hasilbg3 = `*Nama* : *_${hmml3.result[0].nama}_*\n*Harga* : *_${hmml3.result[0].harga}_*\n*Terjual* : *_${hmml3.result[0].terjual}_*\n*Tempat* : *_${hmml3.result[0].lokasi}_*\n*Link* : *_${hmml3.result[0].link_produk}_*\n*Deskripsi* : *_${hmml3.result[0].deskripsi}_**Nama* : *_${hmml3.result[1].nama}_*\n*Harga* : *_${hmml3.result[1].harga}_*\n*Terjual* : *_${hmml3.result[1].terjual}_*\n*Tempat* : *_${hmml3.result[1].lokasi}_*\n*Link* : *_${hmml3.result[1].link_produk}_*\n*Deskripsi* : *_${hmml3.result[1].deskripsi}_*`
                    nuy.sendMessage(from, buffer, image, {quoted: mek, caption: hasilbg3})
                    await limitAdd(sender)
                    break
                    case 'jadwalbola':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
// newmenu
case 'igpost': 				
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('ini bukan url instagram anjim')
				ige = body.slice(8)
                                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
                                nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }})
				break
		case 'fakeaddress': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=onlyonedeveloper`)
				teks = `➸ *Nama* : ${anu.result.name}\n*➸ Birthday :* ${anu.result.birthday}\n*➸ Address :* ${anu.result.address}\n*➸ City :* ${anu.result.city}\n*➸ Region :* ${anu.result.region}\n*➸ Country :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Phone Number :* ${anu.result.phone_number}\n*➸ Username :* ${anu.result.username}\n*➸ Password :* ${anu.result.password}\n*➸ Email :* ${anu.result.email}`
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }})
				break
				case 'googlesearch': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break 
				case 'hbd': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(4)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=birthday&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'shine': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=shinetext&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'thenight': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=thenight&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'rainbow': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=rainbow3d&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'love': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev4?text=${ct}&theme=lovemessage&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'textonecup': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textonecup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'textsky': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textsky&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'nature': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'rosegold': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=rosegold&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'nature3d': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'ocean': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=underwater-ocean&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'woodheart': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=woodheart&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'summertext': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=summertext&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'underglass': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=underglass&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'cemetery': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=cemetery&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'royallock': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev6?text=${ct}&theme=royallock&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'coffecup': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'coffecup2': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'neon': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=neon&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'glow': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=glow&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'summer': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'flower': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=flower&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'grandient': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro6?text=${ct}&theme=grandient&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'embroidery': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=embroidery&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'funnycup': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro4?text=${ct}&theme=funnycup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'orchids': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=orchids-flower&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'smoke2': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=smoke2&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'loveone': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=loveone&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'smoke': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=smoke&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'onesilk': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=onesilk&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'glowing': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro1?text=${ct}&theme=glowing&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'heart': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=heart&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'wolf': 				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=wolf-metal&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'yuri': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/yuri?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'pussy': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'nekonime': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'baka': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'blowjob': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'lewd': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'eroyuri': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'hug': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'hug2': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'awoo': // masih ngebug
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/awoo?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'lick': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/lick?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'kiss': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/kiss?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'smug': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/smug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'cuddle': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/cuddle?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'bully': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/bully?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'shinobu': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'megumin': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'blush': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/blush?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'highfive': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/highfive?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'handhold': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/handhold?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'smile': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/smile?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'glomp': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/glomp?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'cringe': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/cringe?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'shortlink':
				 
				nuy.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				break
		case 'shortlink2':
				 
				nuy.updatePresence(from, Presence.composing)
				reply(`[❕] Loading`)
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				break
		case 'shortlink3':
				 
				nuy.updatePresence(from, Presence.composing)
				reply(`[❕] Loading`)
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/tiny?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				break
		case 'asmaulhusna': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/asmaulhusna?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nomor:* : ${i.index}\n*Latin* : ${i.latin}\n*Arab* : ${i.arabic}\n*Translate Indo* : ${i.translation_id}\n*Translate English* : ${i.translation_en}\n=================\n`
				}
				reply(teks)
				break
		case 'covidindo': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidindo?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
					teks += `*Kode Provinsi:* : ${i.attributes.Kode_Provi}\n*Provinsi* : ${i.attributes.Provinsi}\n*Total Positif* : ${i.attributes.Kasus_Posi}\n*Total Sembuh* : ${i.attributes.Kasus_Semb}\n*Total Meninggal* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break
		case 'topanime': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Studio* : ${i.studio}\n*Rank* : ${i.rank}\n*Peak* : ${i.stats.peak}\n*Previously* : ${i.stats.previously}\n*Week On Top* : ${i.stats.weeksOnTop}\n*Status* : ${i.stats.status}\n*Stat* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
		case 'coupleship': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/coupleship?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Name:* : ${i.names}\n*Anime* : ${i.anime}\n*Rank* : ${i.rank}\n*Peak* : ${i.stats.peak}\n*Previously* : ${i.stats.previously}\n*Week On Top* : ${i.stats.weeksOnTop}\n*Status* : ${i.stats.status}\n*Stat* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
		case 'doaharian': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat': // Case By Nuy
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat': // Case By Nuy
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
				case 'kisahnabi': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.image)
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi}\n*➸ Lahir :* ${anu.result.lahir}\n*➸ Umur :* ${anu.result.umur}\n*➸ Tempat :* ${anu.result.tempat}\n*➸ Kisah :* ${anu.result.kisah}`
				nuy.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: teks})
				break
		case 'tahlil': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'ayatkursi': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=onlyonedeveloper`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'covidglobal': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlyonedeveloper`)
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'hadits': 
				if (args.length < 1) return reply(`kitab + nomor nya mana om? contoh: hadits muslim|116`)
				ct = body.slice(8)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=onlyonedeveloper`)
				teks = `➸ *Name Hadits* : ${anu.result.data.name}\n*➸ Number Hadits :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'github': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/github?user=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.avatar_url)
				teks = `*HASIL*\n\n*➸ ID :* ${anu.result.id}\n*➸ Node ID :* ${anu.result.node_id}\n*➸ Gravatar ID :* ${anu.result.gravatar_id}\n*➸ Url :* ${anu.result.html_url}\n*➸ Type :* ${anu.result.type}\n*➸ Site Admin :* ${anu.result.site_admin}\n*➸ Name :* ${anu.result.name}\n*➸ Company :* ${anu.result.company}\n*➸ Blog :* ${anu.result.blog}\n*➸ Location :* ${anu.result.location}\n*➸ Email :* ${anu.result.email}\n*➸ Bio  :* ${anu.result.bio}\n*➸ Twitter Username :* ${anu.result.twitter_username}\n*➸ Public Repo :* ${anu.result.public_repos}\n*➸ Public Gists :* ${anu.result.public_gists}\n*➸ Followers :* ${anu.result.followers}\n*➸ Following :* ${anu.result.following}\n*➸ Create At :* ${anu.result.created_at}\n*➸ Update At :* ${anu.result.updated_at}`
				nuy.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: teks})
				break
				case 'lacakip': 
				if (args.length < 1) return reply(`ip nya mana bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/iplookup?ip=${body.slice(9)}&apikey=onlyonedeveloper`)
				teks = `➸ *ip* : ${anu.result.ip}\n*➸ Country :* ${anu.result.country}\n*➸ Region :* ${anu.result.region}\n*➸ Latitude :* ${anu.result.latitude}\n*➸ Longtitude :* ${anu.result.longtitude}\n*➸ Timezone :* ${anu.result.timezone}\n*➸ Org :* ${anu.result.org}\n*➸ As :* ${anu.result.as}\n*➸ City :* ${anu.result.city}\n*➸ Country Code :* ${anu.result.countryCode}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Link GMaps :* ${anu.result.maps}`
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }})
				break
		case 'dkasia': // Update By Nurul FsXs FdlXploit
				if (args.length < 1) return reply(`nama drakorasia apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/drakorasia?search=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `➸ *Title* : ${anu.result.title}\n*➸ Title Korea :* ${anu.result.titleKr}\n*➸ Year :* ${anu.result.year}\n*➸ Jumlah Episode :* ${anu.result.episode}\n*➸ Genre :* ${anu.result.genre}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Network :* ${anu.result.network}\n*➸ Ringkasan :* ${anu.result.synopsis}\n*➸ Aktor :* ${anu.result.casters}`
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: hasil})
				break
		case 'manga': // Update By Nurul FsXs FdlXploit
				if (args.length < 1) return reply(`nama anime nya apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${body.slice(6)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `*Note:* : ${anu.result.note}\n*Title* : ${anu.result.title}\n*Description* : ${anu.result.description}\n*Name* : ${anu.result.name}\n*Type* : ${anu.result.type}\n*Author* : ${anu.result.author}\n*Genre* : ${anu.result.genre}\n*Rating* : ${anu.result.rating}\n*Released* : ${anu.result.released}\n*Status* : ${anu.result.status}`
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: hasil})
				teks = '=================\n'
				for (let i of anu.result.downloads) {
					teks += `*Date* : ${i.date}\n*Download Via* : ${i.title}\n*Link Download* : ${i.link}\n=================\n`
				}
				reply(teks)
				break
		case 'kusonime': 
				if (args.length < 1) return reply(`nama anime nya apaang bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/kusonime?search=${body.slice(9)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumbs)
				hasil = `*Title:* : ${anu.result.title}\n*Title Jp* : ${anu.result.title_jp}\n*Genre* : ${anu.result.genre}\n*Season* : ${anu.result.season}\n*Producer* : ${anu.result.producer}\n*Type* : ${anu.result.type}\n*Total Episode* : ${anu.result.total_episode}\n*Rating* : ${anu.result.score}\n*Durasi* : ${anu.result.duration}\n*Released On* : ${anu.result.released_on}\n*Description* : ${anu.result.description}`
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: hasil})
				break
		case 'cekresijne': 
				if (args.length < 1) return reply(`res nya apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/searchresi?courier=jne&awb=${body.slice(11)}&apikey=onlyonedeveloper`)
				hasil = `*Code Resi:* : ${anu.result.data.summary.awb}\n*Courier* : ${anu.result.data.summary.courier}\n*Service* : ${anu.result.data.summary.service}\n*Status* : ${anu.result.data.summary.status}\n*Date* : ${anu.result.data.summary.date}\n*Desc* : ${anu.result.data.summary.desc}\n*Harga* : ${anu.result.data.summary.amount}\n*Berat Barang* : ${anu.result.data.summary.weight}\n*Origin* : ${anu.result.data.detail.origin}\n*Destination* : ${anu.result.data.detail.destination}\n*Shipper* : ${anu.result.data.detail.shipper}\n*Receiver* : ${anu.result.data.detail.receiver}`
				nuy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'ini hasilnya kak'})
				teks = '=================\n'
				for (let i of anu.result.data.history) {
					teks += `*Date* : ${i.date}\n*Desc History* : ${i.desc}\n*Location* : ${i.location}\n=================\n`
				}
				reply(teks)
				break
				case 'randomwp': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'blackpink': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomimage/blackpink?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'hentaipict': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'ini fotonya kak'})
				break
				case 'gabut': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=onlyonedeveloper`)
				hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
				nuy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'quotemuslim': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=onlyonedeveloper`)
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				nuy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'gombal': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/katakatagombal?apikey=onlyonedeveloper`, {method: 'get'})
				reply(anu.result.quote)
				break
				case 'simisimi': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=onlyonedeveloper`)
				reply(anu.result.success)
				break
		case 'kodepos': 	
				nuy.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
		case 'liputan6': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
				}
				reply(teks)
				break
		case 'cnnnews': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.contentSnippet}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'republika': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'temponews': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.content}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'kumparannews': 	
				nuy.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'lazymedia': 	
				nuy.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				break
				case 'pubglogo': 
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'butterfly': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro11?text=${ct}&theme=butterfly&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'battlefield': 
				if (args.length < 1) return reply(`textnya mana om?`)					
				ct = body.slice(12)
				ll1 = ct.split("/")[0];
				ll2 = ct.split("/")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				nuy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@thenay_xploit_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('mc.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'infofilm': 	
				nuy.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.detail.views}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Dscription* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'infofilm2': 	
				nuy.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Quality* : ${i.quality}\n*Movie ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Views* : ${i.detail.views}\n*Genre* : ${i.detail.genre}\n*Director* : ${i.detail.director}\n*Aktor* : ${i.detail.actors}\n*Country* : ${i.detail.country}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Description* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'lk21': 	
				nuy.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Genre* : ${i.genre}\n*Rating* : ${i.rating}\n*Duration* : ${i.duration}\n*Quality* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Watch* : ${i.watch}\n=================\n`
				}
				reply(teks)
				break
// last
                    case 'randomquran':
                case 'quranaudio':
				if (isBanned) return reply(mess.only.benned)   
				 if (!isUser) return reply(mess.only.userB)
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					faktaaa = `*Nama* : *${anu.result.nama}*\n*Arti* : *${anu.result.arti}*\n*Nomor* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Ayat* : *${anu.result.ayat}*\n*Isi* : *${anu.result.keterangan}*`
					quu = await getBuffer(anu.result.audio)
					nuy.sendMessage(from, faktaaa, text, {quoted: mek})
					nuy.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break
					case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'nihhh'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return nuy.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return nuy.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						nuy.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						nuy.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return nuy.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						nuy.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						nuy.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return nuy.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return nuy.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 6285928xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					nuy.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						nuy.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						nuy.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						nuy.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						nuy.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'apkpure':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
            case 'zodiak':
if (args.length < 1) return reply('Masukkan nama zodiak')
nuy.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${VthearApi}`)
hasil = `Zodiak : *${data.result.zodiak}*\nRamalan hari ini : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
case 'cyberpunk':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
   nuy.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  nuy.sendMessage(from, pok, image, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'katadilan': 	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wasted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
nuy.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break

case 'drawing':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'gay':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
nuy.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break

case 'nightbeach':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'laptop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'linephoto':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'raindrop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'sketch':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'crossgun':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break


case 'wanted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 nuy.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'gtav':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await nuy.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 nuy.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
case 'cecan':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  tels = body.slice(5)
  nuy.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cute girl",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  nuy.sendMessage(from, pok, image, {
quoted: mek, caption: `Gimana ?`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'cogan':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  nuy.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  nuy.sendMessage(from, pok, image, {
quoted: mek, caption: `Wah ganteng kek gua`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
			case 'jadian':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					case 'cantik':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nuy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nuy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nuy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
                  if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await nuy.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				nuy.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
					case 'ganteng':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					case 'beban':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname2[Math.floor(Math.random() * tod.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					break
				case 'brainly':
					if (!isUser) return reply(mess.only.userB)
									
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '───────────────────────\n'
					for (let Y of res.data) {
						teks += `\n*「 _ʙʀᴀɪɴʟʏ_ 」*\n\n*➸ ᴘᴇʀᴛᴀɴʏᴀᴀɴ*\n ${Y.pertanyaan}\n\n*➸ ᴊᴀᴡᴀʙᴀɴ*\n ${Y.jawaban[0].text}\n────────────────────\n`
					}
					nuy.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
                await limitAdd(sender)
				break 
				case 'daftar':
					nuy.updatePresence(from, Presence.composing)
					if (isUser) return reply('*ᴋᴀᴍᴜ ꜱᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ!*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await nuy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─✿➤「 *ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ᴍᴄ ʙᴏᴛ* 」\n│\n│♡ۣۜۜ፝͜͜͡͡✿➤ ʙᴇʀʜᴀsɪʟ ᴅᴇɴɢᴀɴ sɴ\n│♡ۣۜۜ፝͜͜͡͡✿➤ TM08GK8PPHBSJDH10J\n│\n│♡ۣۜۜ፝͜͜͡͡✿➤ ᴘᴀᴅᴀ ${date} ${time}\n│♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴀᴍᴀ : ${pushname2}\n│♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴏᴍᴇʀ : wa.me/${sender.split("@")[0]}\n│♡ۣۜۜ፝͜͜͡͡✿➤ ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ : ${user.length} ᴏʀᴀɴɢ\n│\n│♡ۣۜۜ፝͜͜͡͡✿➤ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴍᴄ-ʙᴏᴛ\n│♡ۣۜۜ፝͜͜͡͡✿➤ ᴋᴇᴛɪᴋ : #ᴍᴇɴᴜ\n│\n│♡ۣۜۜ፝͜͜͡͡✿➤ ɴᴏᴛᴇ\n│♡ۣۜۜ፝͜͜͡͡✿➤ ʏɢ ɢᴀᴋ ᴀᴅᴀ ᴅɪ ᴍᴇɴᴜ ᴊᴀɴɢᴀɴ ᴅɪ ᴋᴇᴛɪᴋ!!\n╰─────────────────────`
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					nuy.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
                    case 'profile':
    				nuy.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await nuy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_ᴘʀᴏғɪʟᴇ ᴀɴᴅᴀ_* 」\n│• *ɴᴀᴍᴇ:* ${pushname2}\n│• *ᴜꜱᴇʀ ᴛᴇʀᴅᴀғᴛᴀʀ:* √\n│• *ʟɪɴᴋ:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					nuy.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				nuy.sendMessage(from, bahasa(prefix), text, {quoted: mek})
				brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				break 
				case 'donasi':
				case 'donate':
					nuy.sendMessage(from, donasi(name), text, {quoted: mek})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'info':
					me = nuy.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *ɴᴀᴍᴀ ʙᴏᴛ* : ${me.name}\n➽ *ᴏᴡɴᴇʀ ʙᴏᴛ* : ɴᴜʀᴜʟ | ғᴅʟxᴘʟᴏɪᴛ\n➽ *ᴘʀᴇғɪx* : | ${prefix} |\n➽ *ᴛᴏᴛᴀʟ ʙʟᴏᴄᴋ* : ${blocked.length}\n➽ *ᴀᴋᴛɪғ ꜱᴇᴊᴀᴋ* : ${kyun(uptime)}\n➽ *ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ* : ${user.length} ᴜꜱᴇʀ\n➽ *ɪɴꜱᴛᴀɢʀᴀᴍ* : https://www.instagram.com/thenay_xploit_\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ ᴀʟʟᴀʜ ꜱᴡᴛ\n➽ ᴍʜᴀɴᴋʙᴀʀʙᴀʀ\n➽ ғxᴄ7\n➽ ɴᴜʀᴜʟ\n➽ ғxsx\n➽ ғᴅʟxᴘʟᴏɪᴛ`
					const daca = fs.readFileSync('mc.jpg');
				    nuy.sendMessage(from, daca, image, {quoted: mek, caption: teks})
				    brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    nuy.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
				case 'totaluser':
					nuy.updatePresence(from, Presence.composing) 
									
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					nuy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					nuy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					nuy.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					nuy.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
					case 'tahta':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}tahta dns`)
tekts = body.slice(7)
reply(mess.wait)
tthha = await getBuffer(`https://api.vhtear.com/hartatahta?text=${tekts}&apikey=${VthearApi}`)
nuy.sendMessage(from, tthha, image, {quoted: mek})
await limitAdd(sender)
break
case 'burnpaper':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper dns`)
todi = body.slice(11)
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
nuy.sendMessage(from, pper, image, {quoted: mek})
await limitAdd(sender)
break
case '8bit':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}8bit dns/bot`)
ds = `${body.slice(6)}`
tex1 = ds.split("/")[0];
tex2 = ds.split("/")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
nuy.sendMessage(from, brikff, image, {quoted: mek})
await limitAdd(sender)
break
case 'glowneon':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon dns`)
tekas = body.slice(10)
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
nuy.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest dns/bot/wea`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
nuy.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candlemug dns`)
ddu = body.slice(11)
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
nuy.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss dns`)
lop = body.slice(9)
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
nuy.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'mugflower':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower dns`)
mug = body.slice(11)
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
nuy.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'narutobanner':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner dns`)
nar = body.slice(14)
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
nuy.sendMessage(from, narba, image, {quoted: mek})
await limitAdd(sender)
break
case 'paperglass':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass dns`)
papg = body.slice(12)
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
nuy.sendMessage(from, gelas, image, {quoted: mek})
await limitAdd(sender)
break
case 'romance':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}romance dns`)
roce = body.slice(9)
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
nuy.sendMessage(from, roma, image, {quoted: mek})
await limitAdd(sender)
break
case 'shadow':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}shadow dns`)
sdow = body.slice(8)
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
nuy.sendMessage(from, shan, image, {quoted: mek})
await limitAdd(sender)
break
case 'glitch':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glitch dns/bot`)
gl = `${body.slice(8)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
nuy.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
case 'coffe':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}coffe dns`)
kop = body.slice(7)
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
nuy.sendMessage(from, ppi, image, {quoted: mek})
await limitAdd(sender)
break
case 'candy':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candy dns`)
cndy = body.slice(7)
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
nuy.sendMessage(from, prmen, image, {quoted: mek})
await limitAdd(sender)
break
case 'hpotter':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}hpotter dns`)
hpter = body.slice(9)
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
nuy.sendMessage(from, helpter, image, {quoted: mek})
await limitAdd(sender)
break
case 'woodblock':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock dns`)
woblk = body.slice(11)
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
nuy.sendMessage(from, gblok, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxtext':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}galaxtext dns`)
glaktx = body.slice(11)
reply(mess.wait)
galax = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${glaktx}`)
nuy.sendMessage(from, galax, image, {quoted: mek})
await limitAdd(sender)
break
case 'pupycute':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}pupycute dns`)
puki = body.slice(10)
reply(mess.wait)
cute = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${puki}`)
nuy.sendMessage(from, cute, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxstyle':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}galaxstyle dns`)
gelay = body.slice(12)
reply(mess.wait)
style = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=WEMPYGANSS&text=${gelay}`)
nuy.sendMessage(from, style, image, {quoted: mek})
await limitAdd(sender)
break
case 'hologram':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}hologram dns`)
gram = body.slice(10)
reply(mess.wait)
holo = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${gram}`)
nuy.sendMessage(from, holo, image, {quoted: mek})
await limitAdd(sender)
break
case 'metallogo':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}metallogo dns`)
metal = body.slice(11)
reply(mess.wait)
metlog = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${metal}`)
nuy.sendMessage(from, metlog, image, {quoted: mek})
await limitAdd(sender)
break
case 'bpink':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}bpink dns`)
black = body.slice(7)
reply(mess.wait)
pink = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=WEMPYGANSS&text=${black}`)
nuy.sendMessage(from, pink, image, {quoted: mek})
await limitAdd(sender)
break
				case 'addprem':
					nuy.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
					case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 nuy.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					nuy.blockUser (`${body.slice(7)}@c.us`, "add")
					nuy.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    nuy.blockUser (`${body.slice(9)}@c.us`, "remove")
					nuy.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					nuy.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
					case 'limit':
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Limit anda habis`, id)
                            await reply(`*LIMIT ANDA TINGGAL: ${limitCounts}*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`LIMIT ANDA ${limitCounts}`)
                    }
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nuy.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
					 case 'trigger':
					if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await nuy.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                nuy.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break

				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
							
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  nuy.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     nuy.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  

                 case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   				
				   if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    nuy.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'owner':
                 nuy.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 nuy.sendMessage(from, '*_ɪᴛᴜ ᴏᴡɴᴇʀ ᴍᴀɴᴄᴀ ʙᴏᴛ, ᴋᴀᴛᴀɴʏᴀ ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀʜ ᴋᴀʟᴏ ᴄʜᴀᴛ ᴅʏ_*',text, { quoted: mek} )
                 break
                 case 'coowner':
                 nuy.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
                 nuy.sendMessage(from, '*_ɪᴛᴜ ᴘᴀᴄᴀʀᴋᴜ ᴇʜ ᴍᴀᴋꜱᴜᴅɴʏᴀ ᴄᴏᴏᴡɴᴇʀᴋᴜ >-<_*',text, { quoted: mek} )
                 break
                case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
           				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					nuy.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				 				
				if (!isUser) return reply(mess.only.userB)
                nuy.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await nuy.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        nuy.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
				case 'trendtwit':
					nuy.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
               				
                     if (isLimit(sender)) return reply(limitend(pushname2))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'testime':
					setTimeout( () => {
					nuy.sendMessage(from, 'Waktu habis:v', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '5 Detik lagi', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '10 Detik lagi', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'neonime':
					nuy.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                    if (!isUser) return reply(mess.only.userB)
              				
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
             				
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						nuy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await nuy.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nuy.sendMessage(from, yeh, text, {quoted: mek})
			        break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await nuy.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					nuy.sendMessage(from, options, text)
					break
					case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					nuy.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
					const tik = can[Math.floor(Math.random() * can.length)]
					nuy.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				  case 'ownergrup':
				  case 'ownergroup':
               nuy.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           nuy.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await nuy.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                nuy.groupUpdateSubject(from, `${body.slice(9)}`)
                nuy.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                nuy.groupUpdateDescription(from, `${body.slice(9)}`)
                nuy.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: mek})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return nuy.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nuy.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
					dtt = body.slice(5)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal gan:(')
							reply(mess.wait)
							nuy.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  
				case 'translate':
				case 'translete':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return nuy.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return nuy.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`
				    nuy.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'ts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return nuy.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return nuy.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(4)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    ts = `Text Asli: *${body.slice(7)}*\n\nHasil: *${anu.text}*`
				    nuy.sendMessage(from, ts, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'setpp':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	      				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await nuy.downloadAndSaveMediaMessage(mek)
                    await nuy.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`âœ“Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
                    break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
					apakah = body.slice(1)
					const apakahh = ["Ya","Tidak","Ga tau"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break 
				case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: mek })
					break 
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break 
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					bisakah = body.slice(1)
					const bisakahh = ["Bisa","Tidak Bisa","Ga tau"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break 
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					kapankah = body.slice(1)
					const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					nuy.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break 
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
					ttrth = `${anu.Dare}`
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nuy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender) 
					break 
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					der = `${anu.Dare}`
					totd = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nuy.sendMessage(from, totd, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender) 
					break 
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                nuy.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)
          				
                if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nom] }
					}
					nuy.sendMessage(from, tag, text, {quoted: mek})
					break
         case 'lirik':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`)
				thum = await getBuffer(anu.result.thumb)
				teks = `*LAGU DI TEMUKAN *\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*Public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`
				nuy.sendMessage(from, thum, image, { quoted : mek, caption: teks })
				break
                case 'report':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Yang mau direport apaan? Contoh: #report fitur #hentai error`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    nuy.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                case 'request':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Mau request apa? Contoh: #request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    nuy.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke coowner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
				case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					nuy.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`)
					ssweb = await getBuffer(anu.result)
					nuy.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
					case 'neko':
if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
nuy.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
nuy.sendMessage(from, pok, image, {
  quoted: mek, caption: `*Neko*`
})
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
					case 'loli':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
                    reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					nuy.sendMessage(from, nye, image, { caption: '*Loli*', quoted: mek })
					await limitAdd(sender)
					break
					case 'wibu':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                  data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VthearApi}`)
						buffer = await getBuffer(data.result.foto)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
					case 'nsfwloli':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
               if (!isUser) return reply(mess.only.userB)
         				
               if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply(mess.wait)
                   gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
                   nuy.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
                   await limitAdd(sender) 
                   break 
                case 'kucing':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result.url)
					nuy.sendMessage(from, buff, image, { quoted: mek , caption: 'meong🐈'})
					await limitAdd(sender) 
					break 


// only grup fitur anime
              case 'anime':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					nuy.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					nuy.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					nuy.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					nuy.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					nuy.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					nuy.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					nuy.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 

				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					nuy.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					nuy.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					nuy.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					nuy.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					nuy.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					nuy.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(mess.only.benned)
								
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					nuy.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
// akhir fitur anime

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					nuy.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender) 
					break 
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of anu.results){
                   masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                    }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   nuy.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'randomkpop':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   nuy.sendMessage(from, buff, image, {quoted: mek})
                   break 
               case 'puisiimg':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   nuy.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 

				case 'fb':
				  nuy.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					nuy.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					nuy.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					nuy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
			case 'instaimg':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    nuy.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nuy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    nuy.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
			case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				nuy.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(mess.wait)
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
					case 'tiktok':
					case 'tiktoknowm': 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Urlnya mana kak?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    nuy.sendMessage(from, buffer, video, )
				    break
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return nuy.sendMessage(from, 'Usernamenya mana gan?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					nuy.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Kemungkinan username tidak valid')
					}
					await limitAdd(sender) 
					break  
//creator
				case 'nulis':
				case 'tulis':
				  nuy.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					nuy.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'nulis2':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				ct = body.slice(8)
				reply(mess.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=WEMPYGANSS&text=${ct}`)
				nuy.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					nuy.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					 case 'quotemaker':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nuy.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 

//akhir kreator
			    case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    nuy.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        nuy.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			   case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   									
   					if (isLimit(sender)) return reply(limitend(pushname2))
                        anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    nuy.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        nuy.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
				nuy.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 nuy.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'fakta':
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					nuy.sendMessage(from, fakta, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'katabijak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					nuy.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              nuy.sendMessage(from, tiktok, image, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			case 'closetime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              nuy.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					nuy.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'opentime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              nuy.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					nuy.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'darkjokes':
				nuy.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 nuy.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				nuy.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
			    if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await nuy.downloadMediaMessage(boij)
				fs.writeFileSync(`./sticker/${svst}.webp`, delb)
				nuy.sendMessage(from, `Berhasil menyimpan sticker!`, MessageType.text, { quoted: mek })
				break
				case 'addaudio':
                   if (!isOwner) return reply(mess.only.ownerB)
                   if (!isQuotedAudio) return reply('Reply audio nya om')
                   gsh = body.slice(10)
                   if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                   gx = await nuy.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./mp3/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     case 'katacinta':	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				
			case 'pasangan':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, {method: 'get'})
				nuy.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah GayðŸ¤¦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*HatiÂ² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur GanðŸƒðŸŒ¬ï¸*","83%\n\n Yaallah NakðŸ¤¦","97%\n\nAstagfirullahðŸ¤¦","100%\n\nKabur ae Gan Daripada Ditusbol Bool luðŸƒ","29%\n\n amann:v","94%\n\n YaallahðŸƒ","75%\n\nHadehh GayðŸ¤¦","82%\n\nMending Lu Tobat DahðŸƒ","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool TopanðŸƒ"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				nuy.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehhðŸ¤¦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n HadehhhðŸƒ","74%\n\n bucen Teroosss","83%\n\n SekaliÂ² kek Ga bucin Gitu","97%\n\nHadehh PakboiÂ²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				nuy.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply('Masukan nama daerah')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  nuy.sendMessage(from, hasil, image, {
quoted: mek, caption: `Hasil Dari *${daerah}*`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					nuy.sendMessage(from, url2img, image, {quoted: mek})
					await limitAdd(sender)
					break 
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname2}* ✪══`+ teks +'╚═══〘 *DNS BOT* 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 *DNS BOT* 〙', members_id, true)
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						nuy.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						nuy.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					nuy.sendMessage(from, anu.result, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nuy.chats.all()
					nuy.setMaxListeners(25)
					for (let _ of anu) {
						nuy.deleteChat(_.jid)
					}
					reply(`\`\`\`Sukses delete all chat DNS BOT\`\`\``)
					break
                                case 'bcgc':
					nuy.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await nuy.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							nuy.sendMessage(_.jid, bcgc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await nuy.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await nuy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nuy.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						}
						nuy.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						reply('Suksess broadcast')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nuy.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nuy.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nuy.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					nuy.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					nuy.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					nuy.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					nuy.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nuy.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						nuy.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					nuy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nuy.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						nuy.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`âœ“Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif gan')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik #antilink on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link sudah on')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'antibadword':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
                if (args[0] === 'on') {
                if (isBadWord) return reply('anti badword sudah on')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓“Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('anti badword sudah off')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓“Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					nuy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case 'addbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					nuy.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					nuy.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					nuy.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					nuy.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'randombokep':
				nuy.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isNsfw) return reply(' *NSFW OF* ')
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 nuy.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nuy.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nuy.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
					case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
					break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    nuy.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					rmenu = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await nuy.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							nuy.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
					
			case 'quran':
			 if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					nuy.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     				
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             nuy.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 

         case 'pinterest':
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${pinte}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					nuy.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
					
		case 'jadwalsholat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\nâž¸ *Subuh :* ${anu.Subuh} WIB\n*âž¸ Dzuhur :* ${anu.Dzuhur} WIB\n*âž¸ Ashar :* ${anu.Ashar} WIB\n*âž¸ Maghrib :* ${anu.Maghrib} WIB\n*âž¸ Isya :* ${anu.Isya} WIB`
					nuy.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
            case 'jadwaltvnow':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  nuy.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
case 'jadwaltv':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  ch = body.slice(10)
  if (args.length < 1) return reply('Masukan nama channel')
  nuy.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarApi}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`
  reply(hasil)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break

// premium user
         case 'joox':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.title}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                nuy.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                nuy.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                nuy.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                nuy.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                
       case 'play':
case 'playmp3':
                  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Yang mau dicari apaan? Titit kah?`)
                data = await fetchJson(`https://onlydevcity.herokuapp.com/api/ytmp3?url=${body.slice(6)}&apikey=onlyonedeveloper`, {method: 'get'})
                 reply(mess.wait)
                 infomp3 = `「 *PLAY* 」\n*Judul* : ${data.result.title}\n*Duration* : ${data.result.duration}\n*Filesize* : ${data.result.size}\n\n*[ WAIT ] Audionya Sedang Dikirim....*`
                bufferddd = await getBuffer(data.result.image)
                lagu = await getBuffer(data.result.mp3)
                nuy.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                nuy.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                
                case 'ytmp3':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Urlnya mana kak?`)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio Ditemukan*\n‣ Judul : ${anu.result.title}\n‣ Source : ${anu.result.source}\n‣ Ukuran : ${anu.result.size}\n\n_Mengirim file silahkan tunggu_\n\n_Jika audio tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  nuy.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  nuy.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Urlnya mana kak?`)
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Ditemukan*\n‣ *Judul* : ${anu.result.title}\n‣ *Source* : ${anu.result.source}\n‣ *Ukuran* : ${anu.result.size}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  nuy.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  nuy.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
 
            case 'smule':
	       if (isBanned) return reply(mess.only.benned)
	       
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					nuy.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					nuy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break 

// Akhir Fitur Premium 

case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('teks nya mana om?')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    nuy.sendMessage(from, wikii, text, {quoted: mek})
                   await limitAdd(sender) 
                   break  
                   
               case 'pastebin':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   await limitAdd(sender) 				
                   break 
		case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
		case 'spamcall':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			nuy.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			nuy.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'quransurah':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.quran) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break 
			case 'quranlist':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, {method: 'get'})
			list = ''
			for (let sur of anu){
			list = `Nomer: ${sur.list}\n`
			}
			reply(list.trim())
			break
		case 'bitly':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${anu.result}`
			nuy.sendMessage(from, anu, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
			
		case 'jamdunia':
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			nuy.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
                	nuy.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						nuy.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					
				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    nuy.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(enmedia)
					await nuy.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya☺️™‚')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					nuy.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				nuy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  nuy.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    nuy.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    nuy.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
            break
            case 'beritahoax':
                     if (!isUser) return reply(mess.only.userB)
                    nuy.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
case 'husbu':
				if (!isUser) return reply(mess.only.userB)
				try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						nuy.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break
            case 'nangis':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nuy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'ngewe':
				if (!isUser) return reply(mess.only.userB)
				if (!isNsfw) return reply(' *NSFW OF* ')
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nuy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nuy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nuy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break		
					case 'moddroid':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			nuy.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			nuy.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply(`*${pushname2}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
					nuy.updatePresence(from, Presence.composing)
					if (messagesLink.includes("#izinadmin")) return reply("#izinadmin *_「 ᴅɪᴛᴇʀɪᴍᴀ 」_*")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*_「 ʟɪɴᴋ ɢʀᴜᴘ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname2}* ᴀɴᴅᴀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɢʀᴜᴘ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
						setTimeout( () => {
						nuy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 100)
		setTimeout( () => {
		nuy.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*ᴛᴀᴋᴇ ᴏғ ᴏᴛᴡ ᴋɪᴄᴋ!*`)
		}, 0)
		}
		if (budy.includes("Manca")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/manca.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Menyukaiku")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/menyukaiku.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Magic")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/magic.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : magic rude", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Garox")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/garox.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Away")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/away.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Tapi")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Boong")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boong.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Pagi")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Malam")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Your")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/your.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Iri")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Boma")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boma.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("boma")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boma.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("rules")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/rules.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Rules")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/rules.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Numa")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("numa")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("away")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/away.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("menyukaiku")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/menyukaiku.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("magic")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/magic.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : magic rude", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("garox")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/garox.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("your")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/your.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("pagi")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("tapi")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("boong")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boong.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("iri")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("bilang")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/joget.webp');
        nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("6283815956151")){  // respon tag ubah aja
        reply(`ᴍᴀᴀғ *${pushname2}*, ᴏᴡɴᴇʀ ᴍᴀɴᴄᴀ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ ᴛᴀɢ xɪxɪxɪ!`)
        const d = fs.readFileSync('./sticker/nuy.webp');
        nuy.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("Nurul")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ᴍᴀɴᴄᴀ?`)
        const d = fs.readFileSync('./sticker/nuy.webp');
        nuy.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
        }
        if (budy.includes("trigger")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/trigger.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Makasih")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/mksh.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Tqs")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/mksh.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Sholawat1")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/maulaya.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("owner")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/owner.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("coowner")){
		nuy.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/owner.mp3')
        nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
                  if (body.startsWith(`${prefix}${command}`)) {
comd = `      ────────────────\nʜᴇɪ *${pushname2}* !!!\nᴘᴇʀɪɴᴛᴀʜ/ᴄᴏᴍᴍᴀɴᴅ *${prefix}${command}*\nᴛɪᴅᴀᴋ ᴀᴅᴀ ᴅᴀʟᴀᴍ *${prefix}menu*\n      ────────────────`
nuy.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "tidak ada dalam #menu", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
				  }
                  if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[MC-BOT]','aqua'), 'Command Tidak Terdaftar', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    
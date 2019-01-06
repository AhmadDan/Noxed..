const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
var prefix = "*"


client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];

client.on('ready', () => {
  console.log('---------------');
  console.log('Alotibi System Is Online')
  console.log('---------------')
});
//client.on('error', console.error)
client.on('message', message => {

if (message.content === prefix+'help') {//prefix+"**
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField(prefix+"**ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField(prefix+"**id :chart_with_downwards_trend:**","**معلومات عامه عن الشخص المختار**")
      .addField(prefix+"**avatar :camping:**","**لـ صور الشخص المختار**")
      .addField(prefix+"**roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField(prefix+"**server :recycle:**","**لـ معلومات السيرفر**")
      .addField(prefix+"**roles :medal: **","**مسح محادثات الشات**")
	  .addField(prefix+"**invite :gear:**","**دعوة البوت لسيرفرك**")
      .addField(prefix+"**say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField(prefix+"**time :alarm_clock:**","**لـ معرفة الساعة**")
      .addField(prefix+"**date **","**لـ معرفة التاريخ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
/*
if (message.content === '*help') {

        let helpEmbed = new Discord.RichEmbed()
        .addField("** 🎶 اوامر الميوزك**","** **")

       // .setDescription('**برفكس البوت (*)**')
        .addField('*play :musical_note:', 'لتشغيل اغنية')
        .addField('*join :microphone2:  ', 'دخول رومك الصوتي')
        .addField('*disconnect :skull_crossbones: ', 'الخروج من رومك الصوتي')
        .addField('*skip :track_next: ', 'تخطي الأغنية')
        .addField('*pause ::pause_button: :', 'ايقاف الاغنية مؤقتا')
        .addField('*resume ::play_pause: :', 'تكملة الاغنية')
        .addField('*queue :film_frames: ', 'اظهار قائمة التشغيل')
        .addField('*np :headphones: ', 'اظهار الاغنية اللي انت مشغلها حاليا')

      message.channel.send(helpEmbed);
    }
});*/
client.on('message', message => {




if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField(prefix+"**bc  :mega:**","**لـ البرودكاست**")
      .addField(prefix+"**clear :octagonal_sign:**","**لـ مسح الشات كامل**")
	//  .addField("***createcolors :cyclone:**","** لـ اضافة 110 لون**")
		.addField(prefix+"**kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField(prefix+"**ban  :no_entry:**","**لـ حظر الأعضاء**")
	.addField(prefix+"**mutechannel  ::lock: :**","**لكتم الروم**")
	.addField(prefix+"**unmutechannel  ::unlock: :**","**لــفك كتم الروم**")


.setColor('RANDOM')
  message.author.sendEmbed(embed);  
    }
	     
     
});
//بداية اوامر المطورين
client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'leave'){
	if(message.author.id === '294833548848922624'){
		if (!args) {
			message.channel.send("**leave <server id>**");
			return;
		}

		let server = client.guilds.get(args)
		if (!server){
			let embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('مالقيت سيرفر بنفس الايدي ',args)
			message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   
		}else{
		server.leave()	
					let embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('طلعت من ',args)
			message.channel.sendEmbed(embed).then(msg => {msg.delete(8000)});;  
			message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   

		}
		
	}
	}
});
/*
client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .addField("**guilds**",client.guilds.id())
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
*/
client.on('message', message => {
     if (message.content === prefix + "givemeinvite") {
let args = message.content.split(' ').slice(1).join(' ');
		  if(!message.author.id === '294833548848922624') return;
		if (!args) {
			message.channel.send("**givemeinvite <server id>**");
			return;
		}

		let server = client.guilds.get(args)
		if (!server){
			let embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('مالقيت سيرفر بنفس الايدي ',args)
			message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   
		}else{

  server.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.channel.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")
		}
    
	
		/*	var embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('تم خذ الرابط',invite.url)
			message.channel.sendEmbed(embed);
			
		*/
		  //  client.guild.fetchInvites()
 //then(invites => console.log(invites.find(invite => invite.inviter.id === '294833548848922624')))
//.catch(console.error);


//.addField("**Server: **" , client.guilds.size) 
//message.guild.fetchBans().then(invites => {
  


		}
});/*
 client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});*/
client.on('message', message => {
     if (message.content === prefix + "servers") {
		  if(!message.author.id === '294833548848922624') return;
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
//.addField("**Server: **" , client.guilds)  
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
		if (message.author.id === client.user.id) return;
		let embed = new Discord.RichEmbed()
		let args = message.content.split(' ').slice(1).join(' ');
			if(message.content.split(' ')[0] == prefix + 'bc2') {
 if(!message.author.id === '294833548848922624') return;

			if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');				

			if (!args[1]) {
				message.channel.send("**bc <message>**");
				return;
			}
            message.guild.members.forEach(m => {
				if(!message.member.hasPermission('ADMINISTRATOR')) return;
					var bc = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField(' ***● Sender  :***', `${message.author.username}#${message.author.discriminator}`,true)
					.addField(' ***● message  :*** ', args)
					.setThumbnail(message.guild.iconURL)
					.setColor('#ff9900')
					m.send(`${m}`,{embed: bc});
				});
				const xomar933 = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)   
				.setTitle('✔️ | جاري ارسال رسالتك ') 
				.addBlankField(true)
				.addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
				.addField('📋| الرسالة ', args)
				.setColor('#ff9900')  

				message.channel.sendEmbed(xomar933).then(msg => {msg.delete(8000)});;   
				

				}
         else {
            return;
		}
		
});
/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
																/////////////////////////////
----------------------------------------------------------------نهاية الاوامر الخاصة بالمطورين---------------------------------------------------------------
																/////////////////////////////
																عمر العتيبــــــــــــــــــي
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
//نهاية اوامر المطورين
client.on('message', message => {

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
.setThumbnail(message.author.avatarURL) 
  .addField(`اوامر التذاكر::envelope_with_arrow: `, `${prefix}new > يفتح تذكرة جديدة ويضع علامات على فريق الدعم\n ${prefix}close > يغلق تذكرة بعد حلها او فتحها بالغلط \n ${prefix}add > إدخال شخص للتذكره\n ${prefix}remove >إخراج شخص من التذكره`)
  message.author.sendEmbed(embed);
  }
  if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
       .addField("** توضيح :tools: **","**ملاحظة هذه نسخة تجريبية قيد التطوير قد لاتعمل بعض الاوامر  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }

if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()

		 .setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**@     عمر العتيبي #5055  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }


if (message.content === '*invite') {
		let embed = new Discord.RichEmbed()
		.setThumbnail(message.author.avatarURL)    
		.addField("** رابط انفايت البوت لسيرفرك :gear: **","** لازم تكون رتبتك عاليه عشان تستدعي البوت للسيرفر \n  https://discordapp.com/oauth2/authorize?client_id=518324035273097216&scope=bot&permissions=8 **")
		.setColor('RANDOM')
		message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === prefix + 'roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var xomar933;
      if(mentionned){
          var xomar933 = mentionned;
      } else {
          var xomar933 = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${xomar933.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**ping ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});


client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
	if (message.content.startsWith(prefix + "clear")) {
		if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
			if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
				if(!message.member.hasPermission('ADMINISTRATOR')) return;
					var msg;
					msg = parseInt();
					const embed9 = new Discord.RichEmbed()
					.setColor(embedColor)
					.addField(`التذاكر`, 'هل أنت واثق؟ بعد التأكيد ، لا يمكنك إلغاء هذا الإجراء! \n للتأكيد ، اكتب \  ***confirm ** \n. سوف تنتهي المهلة خلال 15 ثانيه ويتم إلغاؤها.')
					message.channel.send({ embed: embed9 })
					.then((m) => {
					  message.channel.awaitMessages(response => response.content === prefix + 'confirm', {
						max: 1,
						time: 15000,
						errors: ['time'],
					  })
					  .then((collected) => {
								  message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
								  message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: "تم مسح الرسائل بنجاح",
									footer: {
									  text: "Alotibi System"
									}
								  }}).then(msg => {msg.delete(3000)});		})
						.catch(() => {
						  m.edit('انتهى وقت التاكيد.').then(m2 => {
							  m2.delete();
						  }, 3000);
						});
					});

					}
});
client.on('ready',  () => {
  console.log('By : xomar933');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});

client.on('message', message => {
    if (message.content === prefix + "server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
		.addField('**------------------------------**',"**اخرى**")
		.addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','اكتب *roles لترى الرولات!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
	

/*
client.on('message', message => {
		if (message.author.id === client.user.id) return;
		let embed = new Discord.RichEmbed()
		let args = message.content.split(' ').slice(1).join(' ');
			if(message.content.split(' ')[0] == prefix + 'bc') {
				if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');				

			//if (!args[1]) {
				message.channel.send("**bc <message>**");
				return;
			//}
			/*
            message.guild.members.forEach(m => {
				if(!message.member.hasPermission('ADMINISTRATOR')) return;
					var bc = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField('**● Server  :**', `${message.guild.name}`,true)
					.addField(' ***● Sender  :***', `${message.author.username}#${message.author.discriminator}`,true)
					.addField(' ***● message  :*** ', args)
					.setThumbnail(message.guild.iconURL)
					.setColor('#ff9900')
					m.send(`${m}`,{embed: bc});
				});
				const xomar933 = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)   
				.setTitle('✔️ | جاري ارسال رسالتك ') 
				.addBlankField(true)
				.addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
				.addField('📋| الرسالة ', args)
				.setColor('#ff9900')  

				message.channel.sendEmbed(xomar933).then(msg => {msg.delete(8000)});;   
				

				}
         else {
            return;
		}
		
		}
});
*/

//client.login(process.env.TOKEN);
//مغلق
/*
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});
*/

client.on('message', message => {
if (message.content === prefix +"help") {
message.reply("**Done | تــم**")
if (!message.channel.type === "dm") {
message.reply("**تم ارسال اوامر البوت في الخاص**")
}
message.react("📩")

}
}); 
var prefix = "*"

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Alotibi System- Script By : xomar933`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : xomar933 ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]

///client.channels.get(`518393149803200513`).message.channel.send("** تم طرده : " + `${user.tag}` + "\n تم طردة من المشرف : " +`${message.author.tag}` + " \n السبب المذكور : " +`${reason}`)


 client.on('message', message => {
   if (message.content.startsWith("خواطر")) {
                if(!message.channel.guild) return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
  var embed = new Discord.RichEmbed()

  message.channel.sendEmbed(embed);
    }
});

///بد
/*اية اكواد الادمنيه
 client.on('message', message => {
  if(message.content === prefix + "unbanall") {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });*/
const fs = require('fs')
const p = {}
const devs = ['الايدي حقك']
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
 if(!message.author.id === '294833548848922624') return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "*"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'تم تغيير البرفكس ${newPrefix}**`);
} 


});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Syntax [command] [@user] [reason] **");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`مطرود!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed :kickembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** الامر للسيرفرات فقط**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص**");
  if(!reason) return message.reply ("**اكتب السبب**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا استطيع حظر شخص اعلى مني**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`حُظر!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
/// تسكيت الروم
client.on('message', message => {
var prefix = "*";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** هذا الامر للخوادم فقط**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **لايوجد لديك صلاحيات كافيه**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: تم قفل خاصية الكتابة بنجاح**")
              });
                }
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** هذا الامر للخوادم فقط**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**لايوجد لديك صلاحيات كافيه**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: تم فك خاصية الكتابة بنجاح**")
              });
    }
       
});
///اوامر الميوت


 
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});


client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[3];
    let muteDuration = messageArray[2];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
            
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(5000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user 1m reason').then(message => message.delete(5000))

	   if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(5000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(5000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});
//
//

///نهاية اكواد الادمنيه
/*  client.on("message", msg => {

if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)

msg.channel.send({embed: embed})
}
});*/
    client.on('message', message => {
     if (message.content === prefix + "id") {
        var mentionned = message.mentions.users.first();
    var author2;
      if(mentionned){
          var author2 = mentionned;
      } else {
          var author2 = message.author;
          
      }
	 var bottf = author2.bot
	 if (bottf  === true ) {
		 var botd = "نعم هو بوت"
	 }else{
		  var botd = "لا هو ليس ببوت"
	 }

if (author2.bot === false) {
     let embed = new Discord.RichEmbed()
//var statuss = message.author.presence.status.toUpperCase()

	 .setThumbnail(author2.avatarURL)  
  .setAuthor(author2.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Alotibi System.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${author2.username}`)
  .addField('كود الحساب الخاص', author2.discriminator)
  .addField("الرقـــم الشـــخصي", author2.id)

  .addField("الحالة", `**[ ${author2.presence.status.toUpperCase()} ]**`, true)
  .addField('بــــوت', botd)
  .addField("تاريخ التسجيل", author2.createdAt)
   message.channel.sendEmbed(embed);
 } else{

     let embed = new Discord.RichEmbed()
//var statuss = message.author.presence.status.toUpperCase()

	 .setThumbnail(author2.avatarURL)  
  .setAuthor(author2.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Alotibi System.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${author2.username}`)
  .addField('كود الحساب الخاص', author2.discriminator)
  .addField("الحالة", `**[ ${author2.presence.status.toUpperCase()} ]**`, true)
  .addField('بــــوت', botd)
  .addField("تاريخ التسجيل", author2.createdAt)
   message.channel.sendEmbed(embed);
 }  
     

    }
});
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var embed22= new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``New Message in private``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("519204216321867786").send({embed:embed22});
    }
   
});

const prefix2 = "*";
const embedColor = 0xE52B50;
//بداية دمج اكواد التيكتس
client.on("ready", () => {
  client.user.setGame(`*help`);
   client2.user.setGame(`+help`);

  });/*
client.on('message', message => {
if(!message.channel.guild) return message.reply('**:x: هذا الامر للسيرفرات فقط **');    
	 if (message.content === prefix + "tcount") {
        var embed22= new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``التذاكر``')
       // .addField(` عدد التذاكر الحالي هو`+message.guild.channels.filter(m => m.name.startsWith(`ticket-`).size)
        .setDescription(` عدد التذاكر الحالي هو`+message.guild.channels.size)
        .setFooter(`Alotibi Tickets `)
		message.channel.sendEmbed(embed22);
	 }
});*/
const ticketid = require('./ticketid.json');
const path2 = './ticketid.json';	

client.on("message", (message) => {
  if (!message.content.startsWith(prefix2) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix2 + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support")) {
	message.guild.createRole({name: 'Support'});   
    }
	if(!reason[1]){
    const embed0 = new Discord.RichEmbed()
    .setColor("RANDOM")
	.addField(`التذاكر`, `يجب ان تكتب سبب التذكره`)
    message.channel.send({ embed: embed0 });
	return
  }
	let ticketsStation = message.guild.channels.find("name", "Ticket Area");
	if(!ticketsStation) {
		message.guild.createChannel("Ticket Area", "category");
		let ticketsStation = message.guild.channels.find("name", "Ticket Area");
	const embed0 = new Discord.RichEmbed()
    .setColor("RANDOM")
	.addField(`التذاكر`, `تم انشاء منطقة التذاكر الرجاء اعادة فتح التذكره`)
    message.channel.send({ embed: embed0 });
	//ticketsStation.setPosition(1); //*/
	return
	};

//

const serveridd = message.guild.id
/*antijoin[message.guild.id] = {
created: time,
onoff: 'On',
}*/
message.delete()
  if(!ticketid[serveridd]) ticketid[serveridd] = {
	  ticketid: 0,
	  onlytickets: 0,	  
  }
	fs.writeFile(path2, JSON.stringify(ticketid, null, 5), function(err) {if(err) console.log(err)});
	ticketid[serveridd].ticketid += (+1);
		ticketid[serveridd].onlytickets += (+1);
	//fs.writeFile(path2, JSON.stringify(ticketid, null, 5), function(err) {if(err) console.log(err)});
	//	fs.writeFile(path2, JSON.stringify(onlytickets, null, 5), function(err) {if(err) console.log(err)});
	fs.writeFile(path2, JSON.stringify(ticketid, null, 5), function(err) {if(err) console.log(err)});
	message.guild.createChannel(`ticket-${ticketid[serveridd].ticketid}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
		c.setParent(ticketsStation);

        const embed2 = new Discord.RichEmbed()
        .setColor(embedColor)
        .addField(`التذاكر`, `تم انشاء تذكرتك.[ ${c} ]`)
		         

        .setTimestamp();
        message.channel.send({ embed: embed2 }).then(msg => {msg.delete(10000)});;
		

        const embed3 = new Discord.RichEmbed()
        .setColor(embedColor)
		.addField("** تم فتح التذكره **",`عزيزي/ ${message.author.username} \n تم فتح تذكرتك برقم  ${ticketid[serveridd].ticketid} \n سيكون فريق الدعم . معك قريباً. يرجى توضيح سبب فتح تذكرة بأكبر قدر ممكن من التفاصيل.`)
		.addField("\n **الموضوع** \n ",""+reason)
        .setTimestamp();
		c.send({ embed: embed3 });
	
	}).catch(console.error);
}

  if (message.content.toLowerCase().startsWith(prefix2 + `add`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`التذاكر`, `لاتستطيع استعمال الامر خارج روم التذكره.`)
    message.channel.send({ embed: embed4 });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`التذاكر`, '**' + addedmember + `** لقد ادخل للتذكره. لحذفة اكتب [${prefix2}remove]().`)
    message.channel.send({ embed: embed5 });

  }

  if (message.content.toLowerCase().startsWith(prefix2 + `remove`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`التذاكر`, `لاتستطيع استعمال الامر خارج روم التذكره.`)
    message.channel.send({ embed: embed6 });
    return
    }
    removedmember = message.mentions.members.first();
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`التذاكر`, '**' + removedmember + '** لقد حذف من التذكره.')
    message.channel.send({ embed: embed7 });
  }


if (message.content.toLowerCase().startsWith(prefix2 + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
    const embed7 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`التذاكر`, `
	هل أنت واثق؟ بعد التأكيد ، لا يمكنك إلغاء هذا الإجراء! 
	للتأكيد ، اكتب \  **${prefix2}confirm ** 
	. سوف تنتهي المهلة خلال 15 ثانيه ويتم إلغاؤها
	`)
	message.channel.send({ embed: embed7 })
    .then((m) => {
      message.channel.awaitMessages(response => response.content === prefix2 + 'confirm', {
        max: 1,
        time: 15000,
        errors: ['time'],
      })
      .then((collected) => {
		  /*
		  		ticketid[serveridd].onlytickets += (-1);
	fs.writeFile(path2, JSON.stringify(ticketid, null, 5), function(err) {if(err) console.log(err)});
		  */
          message.channel.delete();
        })
        .catch(() => {
          m.edit('انتهى وقت تأكيد إغلاق التذاكر ، لم يتم إغلاق التذكرة.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});

function response(c) {
  while (true) {
    client.on("message", (message) => {
      if(message.channel == c) {
        return message.content;
      }
    });
  }
};
//اكواد الكريدت
//  const fs = require('fs'); // npm i fs
//const ms = require('ms'); // npm i ms
//
/*
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحص����ل على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});
*/
//*/
//اللوق والشكر
var logrom = "526978578080989184"
client.on('guildCreate', guild => {
  let joinedbot = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('✅ | Join Bot')
  .setDescription(`Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get(logrom).sendEmbed(joinedbot);
});


client.on('guildDelete', guild => {
  /*message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    */
  let kickedbot = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('❎ | Leave Bot')
  .setDescription(`Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  client.channels.get(logrom).sendEmbed(kickedbot);
  //)
});
/*
client.on('guildDelete', guild => {
//	if (message.content.toLowerCase().startsWith(prefix + `givemeinvite2`)) {

  let kickedbot = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('❎ | Leave Bot')
  .setDescription(`Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`)
  
  client.channels.get(logrom).sendEmbed(kickedbot);
	
	}
});
*/
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكرا لك على اضافة البوت لسيرفرك**`)
  .setFooter("ادارة البوت /قسم التواصل وخدمة العملاء")
      guild.owner.send(embed)
});
/*
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "alpha codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');
*/
client.on('message', message => {
 if(!message.author.id === '294833548848922624') return;
		let embed = new Discord.RichEmbed()
		let args = message.content.split(' ').slice(1).join(' ');
			if(message.content.split(' ')[0] == prefix + 'صيانة') {
	client.guilds.forEach(m => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setTitle("صيانة")
  .setDescription(`**نعتذر لكم البوت سيتوقف للصيانة والتطوير**`)
  .setFooter("ادارة البوت /قسم التواصل وخدمة العملاء")
      m.owner.send(embed)
	})
	}
});
client.on('message', message => {
 if(!message.author.id === '294833548848922624') return;
		let embed = new Discord.RichEmbed()
		let args = message.content.split(' ').slice(1).join(' ');
			if(message.content.split(' ')[0] == prefix + 'msgall') {
				    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');
	client.guilds.forEach(m => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
    .setTitle("رسالة من ادارة البوت")
  .setDescription(`**${args}**`)
  .setFooter("ادارة البوت /قسم التواصل وخدمة العملاء")
      m.owner.send(embed)
	})
	}
});
///اكواد بوت البرودكاست**
const client2 = new Discord.Client();
client2.on('message', message => {
  var prefix3 = "!";
    if(message.content.startsWith(prefix3 + 'bc')) {
return message.channel.send('**البوت قيد التجهيز**').then(m => m.delete(5000));  
	}
	});
client2.on('message', message => {
  var prefix3 = "!";
    if(message.content.startsWith(prefix3 + 'help')) {
return message.channel.send('**البوت قيد التجهيز**').then(m => m.delete(5000));  
	}
	});
client2.on("ready", () => {
	  var prefix3 = "!";

  client2.user.setGame(prefix3 + `help`);

  });/*
	/*
client2.on('message', message => {
	
          if(!message.channel.guild) return;
    var prefix3 = "!";
    if(message.content.startsWith(prefix3 + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "alpha codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');
	message.channel.send(`**

	${args}توى الرساله  2
برودكاست بـ امبد :pencil:
برودكاست بدون امبد:pencil2: 
لديك دقيقه للأختيار قبل الغاء البرودكاست**`).then(msg => {
  var one = client.emojis.find(emoji => emoji.name === "one"); 
  var one = client.emojis.find(emoji => emoji.name === "two"); 
 msg.react(":penci2:")
    .then(() => msg.react(":pencil:"))
    .then(() =>msg.react(":penci:"))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === ':one:' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === ':two:' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client2.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
*/
/*
client2.on('message', message => {
		if (message.author.id === client.user.id) return;
		let embed = new Discord.RichEmbed()
		let args = message.content.split(' ').slice(1).join(' ');
			if(message.content.split(' ')[0] == prefix + 'bc') {
				if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');				

			if (!args[1]) {
				message.channel.send("**bc <message>**");
				return;
			}
			
            message.guild.members.forEach(m => {
				if(!message.member.hasPermission('ADMINISTRATOR')) return;
					var bc = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField('**● Server  :**', `${message.guild.name}`,true)
					.addField(' ***● Sender  :***', `${message.author.username}#${message.author.discriminator}`,true)
					.addField(' ***● message  :*** ', args)
					.setThumbnail(message.guild.iconURL)
					.setColor('#ff9900')
					m.send(`${m}`,{embed: bc});
				});
				const xomar933 = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)   
				.setTitle('✔️ | جاري ارسال رسالتك ') 
				.addBlankField(true)
				.addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
				.addField('📋| الرسالة ', args)
				.setColor('#ff9900')  

				message.channel.sendEmbed(xomar933).then(msg => {msg.delete(8000)});;   
				message.delete

				}
         else {
            return;
		}
		
});
client2.on("message", message => {
	
	
});
/* برميوم فقط في المستقبل ان شاء الله
client2.on("message", message => {

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client2.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
				if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
				
					var bc = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField('**● Server  :**', `${message.guild.name}`,true)
					.addField(' ***● Sender  :***', `${message.author.username}#${message.author.discriminator}`,true)
					.addField(' ***● message  :*** ', argresult)
					.setThumbnail(message.guild.iconURL)
					.setColor('#ff9900')
					m.send(`${m}`,{embed: bc});
				
})
				const xomar933 = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)   
				.setTitle('✔️ | جاري ارسال رسالتك ') 
				.addBlankField(true)
				.addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.members.filter(m => m.presence.status !== 'online').size , true)        
				.addField('📋| الرسالة ', args)
				.setColor('#ff9900')  

				message.channel.sendEmbed(xomar933).then(msg => {msg.delete(8000)});;  
				message.delete(); 
};     
});

client2.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
				if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
 // message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
				
					var xomar933 = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField('**●اختار نوع البرودكاست**', `اذا تبي برودكسات للاون لاين فقط اختار رقم واحد اذا تبي برودكاست للكل اختار رقم 2`,true)
					.setThumbnail(message.guild.iconURL)
					.setColor('#ff9900')
					message.channel.sendEmbed(xomar933).then(msg => {msg.delete(8000)});;  
				
//})

}     
});
*/
//اكواد الالوان
/*

*/
///متعقب الايرور
///client.on('error', console.error);
client.on('error', console.error);
client2.on('error', console.error);
//توكن لوقن NTE4MzQ2Mjc4OTM4MDgzMzMw.Dv5tNQ.dWd2FbIy48-bPDcp1Ogvp5tYgxk
client.login("NTE4MzI0MDM1MjczMDk3MjE2.Du_4KQ.9XGOp2_ae6cGsAa-bKTJi-7vlJs");
client2.login("NTI3MDA3NTUyNTU5NjQ0Njgy.DwNfTA.EK-R2lpqowEOGo5g7EYuy6VTlnc");

//client.login("NTE4MzQ2Mjc4OTM4MDgzMzMw.Dv5w2g.a1Tb18gdWni0ZictblXONrAsRXk");

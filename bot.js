const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';
const verifed = ["236192758765715456"]; 


client.on('ready',  () => {
	client.user.setStatus("Online");
	console.log('By : _xShaDowZx');
	console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
	console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
	console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
 }); 
  
 client.on("guildCreate", guild => {
   	 console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
 });

const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');

client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'welcome');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setTitle("Member joind!")
        .setColor("RANDOM")
        .setThumbnail(member.user.avatarURL)
        .addField("**Member name**", `[<@${member.user.id}>]`,true)
        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)    
     welcomer.send({embed:yumz});          
         
    



const w = ['./nj.png']; //'./w2.png' /

              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 540, 230);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '21px kathen';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 240, 150);
                              
                              //NAMEً
                              ctx.font = '21px kathen';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });







client.login(process.env.BOT_TOKEN);

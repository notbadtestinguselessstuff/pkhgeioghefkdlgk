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
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .addField('**:hugging:  | name :  **',`**${member}**`)
        .addField('**:loudspeaker: | Hello there 👋 **' , `**Welcome to the server, ${member} :wave: **`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
        .addField('**➡| You are the member number**',`**${member.guild.memberCount}**`)
        .addField("**Name:**",`<@` + `${member.id}` + `>`, true)
        .addField(' **Server**', `${member.guild.name}`,true)
        .setFooter(`${member.guild.name}`)      
     welcomer.send({embed:yumz});          
         
    



const w = ['./w2.png' ,'./Nameless.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer()) //sendFile



      
      
                    }  )  
      
                    

})
      });                    
 }
});




client.login(process.env.BOT_TOKEN);

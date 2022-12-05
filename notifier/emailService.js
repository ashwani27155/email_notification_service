/** 
 * this file will have the logic for sending email
 */
const nodemailer=require('nodemailer');
/**
 * i need to setup the nodemailer for sending emails for this we need
 * smtp host details
 * credentials if need
 */
module.exports=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:"infinitesketch98@gmail.com",
        pass:"Kushwaha@123"
    },
    secure:true
})
/**
 * transporter will be used to send the emails

const emailDataObj={
    from:"salmanKhan@bollywood.com",
    to:"abic.ashwani@gmail.com",
    subject:"very important message",
    text:"time is life"
};
transporter.sendMail(emailDataObj,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
    }
})
 */
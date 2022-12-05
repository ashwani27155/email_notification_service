/** 
 * we will take help of node-cron to repeat some lines of code of regular interval
 * 
 */
const cron=require('node-cron')
const Notification=require('../models/notification.model')
const constant=require('../utils/constants')
const emailTransporter=require('../notifier/emailService')
cron.schedule('*/2 * * * * *',async()=>{
      console.log('cron-staarted')
      /**
     * I need to send emails
     * 
     * 1. Get the list of all the notifications to be sent
     * 2. Send email for each notifications
     */
    const notifications= await Notification.find({
      sentStatus:constant.sentStatuses.unsent
    })
    notifications.forEach(notification=>{
      const mailData={
            from:"crm@gmail.com",
            to:notification.recepientEmails,
            subject:notification.subject,
            text:notification.content
      }
      emailTransporter.sendMail(mailData,async (err, info)=>{
            if(err){
                console.log("Some error happened", err);
            }else{
                //Update the status of the notification
                const savedNotification = await Notification.findOne({
                    _id : notification._id
                });
                savedNotification.sentStatus = constants.sentStatuses.sent;

                await savedNotification.save();
            }
        })
    })
})
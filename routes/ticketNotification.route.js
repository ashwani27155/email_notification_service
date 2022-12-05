/** this will contain the route for ticket notification request */
const notificationController=require('../controllers/notification.controller')
module.exports=(app)=>{
    app.post("/notification_service/api/v1/notifications",notificationController.acceptNotificationRequest)
}
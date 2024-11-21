const Email = {
    sendMessage(message){
        return `You Have recievied Email Message ${message}`;
    },
    cancel(){
        return `Email Cancelled`;
    }
}

const Sms = {
    sendMessage(message){
        return `You Have recievied Sms Message ${message}`;
    },
    cancel(){
        return `Sms Cancelled`;
    }
}

const NotificationSystemFactory = (notificationType) => {
    if (notificationType === 'Email') {
        return Email;
    }
    else if(notificationType === 'Sms') {
        return Sms;
    }
}

let emailNotification = NotificationSystemFactory("Email");
let smsNotification = NotificationSystemFactory("Sms");

const emailStatus = emailNotification.sendMessage("Email Has Been Successfully verified");
const smsStatus = smsNotification.sendMessage("Mobile Number Has Been Successfully verified");

console.log(emailStatus , smsStatus);

console.log(emailNotification.cancel())
console.log(smsNotification.cancel())


// output 
// You Have recievied Email Message Email Has Been Successfully verified You Have recievied Sms Message Mobile Number Has Been Successfully verified
// Email Cancelled
// Sms Cancelled






















// You need to create a Notification System that can send notifications through various channels: Email, SMS, and Push Notification.

// Each notification type should have the following methods:

// send(message) - Logs the message being sent through the respective channel.
// cancel() - Logs the cancellation of the notification.
// Objective: Implement a factory function that returns the correct notification object based on the notification type.
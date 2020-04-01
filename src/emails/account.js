const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'balint.bb@gmail.com', 
        subject: 'Thanks for joining in!', 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'balint.bb@gmail.com', 
        subject: 'Cancellation notice', 
        text: `Dear ${name}.\n\nI hope you enjoyed your stay with us, however I need to inform you, that your account has been deleted as you requested. Please share your feedback with us from the application and tell us why did you choose to delete your account.\nHave a nice day!\nTask-App Team`
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelEmail
}
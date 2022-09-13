// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {contextBridge} = require("electron");
// const url = require("url");
const Handlebars = require("handlebars");
const nodemailer = require("nodemailer");

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once("loaded", () => {

    contextBridge.exposeInMainWorld("api", {
        template: (messageTemplate) => {
            const template = Handlebars.compile(messageTemplate);
            return (variables) => {
                template(variables);
            }
        },
        mailer: (email, password, smtpServer, smtpPort, smtpUsername, useSsl) => {
            const transporter = nodemailer.createTransport({
                host: smtpServer,
                port: smtpPort,
                secure: useSsl, // true for 465, false for other ports
                auth: {
                    user: smtpUsername, // generated ethereal user
                    pass: password, // generated ethereal password
                },
            });

            return async (address, messageBody, subject) => {
                console.log('sending message "%s" to %s', subject, address);
                let message = await transporter.sendMail({
                    from: this.configuration.email,
                    to: address,
                    subject,
                    html: messageBody
                })

                console.log("Message sent: %s - to %s", message.messageId, address)
                return message;
            }
        }
    });

});

import * as nodemailer from 'nodemailer';

export default class SMTPService {

    /**
     *
     * @param configuration SMTPServiceConfiguration
     */
    constructor(configuration) {
        this.configuration = configuration;
        this.transporter = nodemailer.createTransport({
            host: configuration.smtpServer,
            port: configuration.smtpPort,
            secure: configuration.useSsl, // true for 465, false for other ports
            auth: {
                user: configuration.smtpUsername, // generated ethereal user
                pass: configuration.password, // generated ethereal password
            },
        });

    }

    async sendMessage(address, messageBody, subject) {
        console.log('sending message "%s" to %s', subject, address);
        let message = await this.transporter.sendMail({
            from: this.configuration.email,
            to: address,
            subject,
            html: messageBody
        })

        console.log("Message sent: %s - to %s", message.messageId, address)
        return message;
    }

}

export class SMTPServiceConfiguration {
    get useSsl() {
        return this._useSsl;
    }

    get smtpUsername() {
        return this._smtpUsername;
    }

    get smtpPort() {
        return this._smtpPort;
    }

    get smtpServer() {
        return this._smtpServer;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    constructor(email, password, smtpServer, smtpPort, smtpUsername, useSsl) {
        this._email = email;
        this._password = password;
        this._smtpServer = smtpServer;
        this._smtpPort = smtpPort;
        this._smtpUsername = smtpUsername || email;
        this._useSsl = useSsl;
    }
}
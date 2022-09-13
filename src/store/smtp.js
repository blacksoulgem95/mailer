import create from 'zustand'

const useSmtp = create((set) => ({
    mail: null,
    pass: null,
    smtp: null,
    smtpAccount: null,
    port: null,
    ssl: null,
    updateMail: (mail) => set({mail}),
    updatePassword: (pass) => set({pass}),
    updateSmtpServer: (smtp) => set({smtp}),
    updateSmtpAccount: (smtpAccount) => set({smtpAccount}),
    updatePort: (port) => set({port}),
    updateSSL: (ssl) => set({ssl}),
}))

export default useSmtp;
import logo from "../../logo.svg";
import FormInput from "../../components/FormInput";
import FormCheckBox from "../../components/FormCheckBox";
import Button from "../../components/Button";
import useSmtp from "../../store/smtp";
import {useNavigate} from "react-router-dom";
import Form from "../../components/Form";

export default function Home() {
    const {
        updateMail,
        updatePassword,
        updateSmtpServer,
        updateSmtpAccount,
        updatePort,
        updateSSL
    } = useSmtp((state) => state);
    const navigate = useNavigate();
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2"
                             src={logo} alt="logo"/>
                            Simple Mailer
                    </a>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create a new mail
                            </h1>
                            <Form name="home" onSubmit={() => navigate('/message')}>
                                <FormInput onChange={updateMail} name="email" label="Email account" placeholder="myaccount@company.com" required={true} type="email" />
                                <FormInput onChange={updatePassword} name="password" label="Password" placeholder="••••••••" required={true} type="password" />
                                <hr />
                                <FormInput onChange={updateSmtpServer} name="smtp" label="SMTP Server" placeholder="smtp.company.com" required={true} type="text" />
                                <FormInput onChange={updateSmtpAccount} name="account" label="SMTP Account" placeholder="myaccount" required={true} type="text" />
                                <FormInput onChange={updatePort} name="port" label="SMTP Port" placeholder="465" required={true} type="number" max={25565} min={1} />

                                <div className="flex items-center justify-between">
                                    <FormCheckBox onChange={updateSSL} name="ssl" label="Use SSL" />
                                </div>

                                <Button type="submit" label="Start"/>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
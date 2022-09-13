
import logo from "../../logo.svg";
import FormInput from "../../components/FormInput";
import useMessage from "../../store/message";

import * as Papa from "papaparse";
import Form from "../../components/Form";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import useSmtp from "../../store/smtp";

export default function Variables() {

    const setVariables = useMessage((state) => state.setVariables);
    const navigate = useNavigate();
    let variables = [];
    const subject = useMessage((state) => state.subject);
    const messageTemplate = useMessage((state) => state.message);
    const smtp = useSmtp((state) => state);

    function parseCSV(text) {
        const data = Papa.parse(text, {header: true});
        console.log('csv', data);
        variables = data.data || [];
        if (!data.errors || data.errors.length === 0) {
            console.log('saving data')
            setVariables(data.data)
        } else {
            alert(JSON.stringify(data.errors));
        }
    }

    function submit(e) {
        e.preventDefault();
        console.log('submit!')
        console.log(smtp);
        const service = window.api.mailer(
            smtp.mail,
            smtp.pass,
            smtp.smtp,
            smtp.port,
            smtp.smtpAccount,
            smtp.ssl
        );

        const templateEngine = window.api.template(messageTemplate);
        variables.map(row => {
            const message = templateEngine.generateMessage(row);
            return service.sendMessage(row.email, message, subject);
        }).forEach(async (data) => {
            console.log('processed', data);
        })
    }

    return (
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
                            Load variables
                        </h1>
                        <Form className="space-y-4 md:space-y-6" onSubmit={submit}>
                            <FormInput onChange={parseCSV} name="variables" type="textarea" placeholder={"name,id\nJeff,2"} required={true} label="CSV of Variables"/>
                            <Button type="submit" label="Send"/>

                            <Button type="button" label="Back" onClick={() => navigate('/message')}/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

import useSmtp from "../../store/smtp";
import logo from "../../logo.svg";
import FormInput from "../../components/FormInput";
import useMessage from "../../store/message";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import Form from "../../components/Form";

export default function Message() {
    const {setTemplate, setSubject} = useMessage((state) => state);
    const navigate = useNavigate();
    const submit = () => {
        console.log('navigating after submit')
        navigate('/variables')
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
                            Set the message body
                        </h1>
                        <Form name="message" onSubmit={submit}>
                            <FormInput disabled={true} name="email" label="From" placeholder="myaccount@company.com" type="email" defaultValue={useSmtp((state) => state.mail)}/>
                            <FormInput required={true} name="subject" label="Subject" placeholder="A very nice email" type="text" onChange={setSubject}/>

                            <FormInput onChange={setTemplate} name="template" type="textarea" placeholder="Hi {{name}}" required={true} label="Message Template"/>

                            <Button type="submit" label="Next"/>

                            <Button type="button" label="Back" onClick={() => navigate('/')}/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}
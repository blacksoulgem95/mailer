export default function ({name, onSubmit, children}) {

    const submit = event => {
        console.log('submitted form', name, event)
        if (onSubmit) {
            event.preventDefault();
            onSubmit(event);
        }
    }

    return (
        <form id={name} name={name} onSubmit={submit} className="space-y-4 md:space-y-6">
            {children}
        </form>
    )
}
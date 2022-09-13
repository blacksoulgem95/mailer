export default function FormInput({
                                      name,
                                      label,
                                      type,
                                      placeholder,
                                      required,
                                      max,
                                      min,
                                      onChange,
                                      defaultValue,
                                      disabled
                                  }) {

    function change(event) {
        onChange(event.target.value);
    }

    return (
        <div>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            {type === "textarea" ? <>
                <textarea name={name} id={name}
                       onChange={change} disabled={disabled}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder={placeholder} required={required} defaultValue={defaultValue}/>

            </> : <>
                <input type={type} name={name} id={name}
                       onChange={change} disabled={disabled}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder={placeholder} required={required} max={max} min={min} defaultValue={defaultValue}/>
            </>}
        </div>
    )
}
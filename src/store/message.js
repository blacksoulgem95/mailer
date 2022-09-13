import create from 'zustand'

const useMessage = create((set) => ({
    template: null,
    subject: null,
    variables: [],
    setTemplate: (template) => set({template}),
    setSubject: (subject) => set({subject}),
    setVariables: (variables) => set({variables})
}))

export default useMessage;
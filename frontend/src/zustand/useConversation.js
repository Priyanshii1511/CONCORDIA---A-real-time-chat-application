import {create} from 'zustand';

const useConversation=create((set) => ({
    selectedConversation: null, //alternative to useState
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages})
}))

export default useConversation;
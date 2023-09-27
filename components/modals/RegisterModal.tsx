import { useCallback, useState } from "react"

import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"

import Input from "../Input"
import Modal from "../Modal"

const RegisterModal = () => {
    const LoginModal = useLoginModal()
    const RegisterModal = useRegisterModal()
    
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [name, setName]= useState('')
    const [username, setUsername]= useState('')
    const [isLoading, setisLoading] = useState(false)

    const onToggle = useCallback(() => {
        if(isLoading) {
            return
        }
        RegisterModal.onClose()
        LoginModal.onOpen()

    },[RegisterModal, LoginModal, isLoading]) 

    const onSubmit = useCallback(async () => {
        try {
            setisLoading(true)
            {/**to do register & login */}

            RegisterModal.onClose()

        } catch (error) {
            console.log(error)
        } finally {
            setisLoading(false)
        }
        
    },[RegisterModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
            <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}
            />
            <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
            />
            <Input
            placeholder="Pasword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />
        </div>

)
        const footerContent = (
            <div className="text-neutral-400 text-center mt-4">
                <p>
                    ALready have an account?
                    <span 
                    onClick={onToggle}
                    className="text-white cursor-pointer hover:underline">Sign in</span>
                </p>
            </div>
        )
    return (
        < Modal
        disabled={isLoading}
        isOpen={RegisterModal.isOpen}
        title="Create an account"
        actionLabel="Register"
        onClose={RegisterModal.onClose}
        onSubmit={onSubmit}
       body={bodyContent}
       footer={footerContent}
        />
    )
}
export default RegisterModal
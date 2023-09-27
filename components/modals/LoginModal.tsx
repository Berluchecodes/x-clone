import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"
import Input from "../Input"
import Modal from "../Modal"
import useRegisterModal from "@/hooks/useRegisterModal"

const LoginModal = () => {
    const LoginModal = useLoginModal()
    const RegisterModal = useRegisterModal()

    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(false)


    const onToggle = useCallback(() => {
        if(isLoading) {
            return
        }
        LoginModal.onClose()
        RegisterModal.onOpen()

    },[LoginModal, RegisterModal, isLoading]) 

    const onSubmit = useCallback(async () => {
        try {
            setisLoading(true)
            {/**to do log in */}

            LoginModal.onClose()

        } catch (error) {
            console.log(error)
        } finally {
            setisLoading(false)
        }
        
    },[LoginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
                First time using X?
                <span 
                onClick={onToggle}
                className="text-white cursor-pointer hover:underline">Create an account</span>
            </p>
        </div>
    )
    return (
        < Modal
        disabled={isLoading}
        isOpen={LoginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={LoginModal.onClose}
        onSubmit={onSubmit}
       body={bodyContent}
       footer={footerContent}
        />
    )
}
export default LoginModal
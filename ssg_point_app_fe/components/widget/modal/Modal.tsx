import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type PublicModalProps = {
    isOpen: boolean;
    onOpenChange: (newValue: boolean) => void;
    content: string;
    routePath?: string;
};

export default function PublicModal({ isOpen, onOpenChange, content, routePath }: PublicModalProps) {
    const router = useRouter();

    return (
        <>
            
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                classNames={{
                    closeButton: "hidden",
                }}
                >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                            <ModalBody>
                                <p>{content}</p>
                            </ModalBody>
                            <ModalFooter>
                                
                                <Button color="primary" onPress={() => {onClose(); 
                                                                        if (routePath) {
                                                                            router.push(routePath);
                                                                        }}}>
                                    확인
                                </Button>
                                
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

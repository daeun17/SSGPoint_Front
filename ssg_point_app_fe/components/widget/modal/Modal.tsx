import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

type PublicModalProps = {
    isOpen: boolean;
    onOpenChange: (newValue: boolean) => void;
    content: string;
};

export default function PublicModal({ isOpen, onOpenChange, content }: PublicModalProps) {
    

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
                                
                                <Button color="primary" onPress={onClose}>
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

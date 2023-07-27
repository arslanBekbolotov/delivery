import React from 'react';
import {Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton} from "@chakra-ui/react";

interface Props{
    alertStatus:"info" | "warning" | "success" | "error" | "loading" | undefined;
    onClose:React.MouseEventHandler;
}

const CustomAlert:React.FC<Props> = ({onClose,alertStatus}) => {
    return (
        <Alert status={alertStatus} position="fixed" top="24" right="5" maxW="500px">
            <AlertIcon />
            <Box>
                <AlertTitle>{alertStatus}</AlertTitle>
                <AlertDescription>
                    {alertStatus === 'success' ? 'your order was successfully accepted ✅' :
                        'your order has not been accepted, you have not added anything to the cart 😢'}
                </AlertDescription>
            </Box>
            <CloseButton
                ml="auto"
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    );
};

export default CustomAlert;
import React from 'react';
import {Spinner} from "@chakra-ui/react";

const CircularProgress = () => {
    return (
        <Spinner
            position="absolute"
            top="200"
            left="49%"
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    );
};

export default CircularProgress;
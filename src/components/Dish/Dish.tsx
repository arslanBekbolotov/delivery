import React from 'react';
import {Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text} from "@chakra-ui/react";
import {IDish} from "../../types";

interface Props{
    dish:IDish;
}

const Dish:React.FC<Props> = ({dish}) => {
    const dishName = dish.name.charAt(0).toUpperCase() + dish.name.slice(1);
    return (
        <Card
            mb="6"
            shadow="lg"
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                maxW={{ base: '100%', sm: '200px' }}
                src={dish.imageUrl}
                alt={dish.name}
            />

            <Stack flexGrow="1" flexDirection="row" align="center">
                <CardBody>
                    <Heading size='lg'>{dishName}</Heading>

                    <Text py='2'>
                        {dish.price} KGZ
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='teal' mr="4">
                        Edit
                    </Button>
                    <Button variant='solid' colorScheme='red'>
                        Delete
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default Dish;
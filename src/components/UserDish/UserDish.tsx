import React from 'react';
import {Button, Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {IDish} from "../../types";

interface Props{
    dish:IDish;
    onClickAdd: React.MouseEventHandler;
}

const UserDish:React.FC<Props> = ({dish,onClickAdd}) => {
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
                <CardBody display="flex" alignItems="center">
                    <Heading size='lg'>{dishName}</Heading>

                    <Text py='2' fontSize="25" ml="auto" flexWrap="wrap">
                        <strong>
                            {dish.price}s
                        </strong> KGZ
                    </Text>

                    <Button colorScheme="teal" shadow="md" ml="30%" onClick={onClickAdd}>
                        Add to cart
                    </Button>

                </CardBody>

            </Stack>
        </Card>
    );
};

export default UserDish;
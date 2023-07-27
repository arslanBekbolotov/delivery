import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { IDish } from "../../types";

interface Props {
  dish: IDish;
  onClickAdd: React.MouseEventHandler;
}

const UserDish: React.FC<Props> = ({ dish, onClickAdd }) => {
  const dishName = dish.name.charAt(0).toUpperCase() + dish.name.slice(1);

  return (
    <Card maxW="sm" shadow="lg">
      <CardBody>
        <Image
          mx="auto"
          mb="3"
          src={dish.imageUrl}
          alt={dish.name}
          borderRadius="lg"
        />
        <Flex align="center" justifyContent="space-between">
          <Heading size="md">{dishName}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {dish.price}kgz
          </Text>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button colorScheme="teal" onClick={onClickAdd} ml="auto">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDish;

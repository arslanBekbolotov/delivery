import React from "react";
import { IApiOrdersResponse } from "../../types";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";

interface Props {
  orders: IApiOrdersResponse;
  handleComplete: React.MouseEventHandler;
}

const AdminOrderItems: React.FC<Props> = ({ orders, handleComplete }) => {
  const totalPrice = orders.reduce((acc, value) => {
    if (value && "price" in value) {
      return acc + +value.price * value.count;
    }

    return acc;
  }, 0);

  return (
    <Card mb="3" shadow="lg">
      <CardBody fontSize="20">
        <Flex align="center" flexWrap="wrap">
          <Box flexGrow="1">
            {orders &&
              orders.map((order) => {
                if (order && "name" in order && order.name) {
                  const dishName =
                    order.name.charAt(0).toUpperCase() + order.name.slice(1);

                  return (
                    <Box key={order.id} mb="3">
                      <Flex align="center" justify="space between">
                        <Text>{dishName}</Text>
                        <Text ml="auto">{order.count}x</Text>
                        <Text ml="15%">{order.price}kgz</Text>
                      </Flex>
                      <Divider />
                    </Box>
                  );
                }
                return null;
              })}
            <Flex align="center" justify="space between">
              <Text>Delivery</Text>
              <Text ml="auto">150 kgz</Text>
            </Flex>
          </Box>
          <Center height="150px" ml="5">
            <Divider orientation="vertical" />
          </Center>
          <Box>
            <Flex flexDirection="column" ml="10" mr="10">
              <Text mb="3"> Total:{totalPrice + 150}kgz</Text>
              <Divider />
              <Button
                mb="3"
                colorScheme="teal"
                variant="link"
                onClick={handleComplete}
              >
                Complete order
              </Button>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AdminOrderItems;

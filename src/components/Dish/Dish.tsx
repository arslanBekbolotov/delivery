import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { IDish } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { deleteDish, fetchDishes } from "../../store/adminThuck";

interface Props {
  dish: IDish;
}

const Dish: React.FC<Props> = ({ dish }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dishName = dish.name.charAt(0).toUpperCase() + dish.name.slice(1);

  const onClickDelete = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchDishes());
  };

  return (
    <Card
      flexWrap="wrap"
      mb="6"
      shadow="lg"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        maxW={{ base: "100%", sm: "200px" }}
        src={dish.imageUrl}
        alt={dish.name}
      />

      <Stack flexGrow="1" flexDirection="row" align="center">
        <CardBody>
          <Heading size="lg">{dishName}</Heading>

          <Text py="2">{dish.price} KGZ</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="teal"
            mr="4"
            onClick={() => navigate(`/admin/edit/${dish.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => onClickDelete(dish.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Dish;

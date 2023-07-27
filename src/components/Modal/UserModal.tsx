import React from "react";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import OrderItem from "../OrderItem/OrderItem";
import { addOrder } from "../../store/userThuck";
import { changeStatus, onOpen } from "../../store/userSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { dishes, loading, totalPrice } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (totalPrice > 150) {
      await dispatch(addOrder(dishes));
      dispatch(changeStatus("success"));
    } else {
      dispatch(changeStatus("error"));
    }
    onClose();
    dispatch(onOpen());
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="700">
          <ModalHeader>Your Order:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {dishes.map((dish) => (
              <OrderItem key={dish.id} dish={dish} />
            ))}
            <Card mt="10">
              <CardBody>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Delivery</Text>
                  <Text>150kgz</Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  fontSize="25"
                >
                  <Text>Total</Text>
                  <Text>{totalPrice + 150}kgz</Text>
                </Box>
              </CardBody>
            </Card>
          </ModalBody>

          <ModalFooter>
            <form onSubmit={(e) => onSubmit(e)}>
              <Button
                colorScheme="red"
                mr={3}
                onClick={onClose}
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                isLoading={loading}
                loadingText="Loading"
                colorScheme="teal"
                variant="outline"
                spinnerPlacement="start"
                type="submit"
              >
                Add
              </Button>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;

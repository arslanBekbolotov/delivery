import React from 'react';
import cart from "../../assets/icons8-cart-60.png";
import {Box, Breadcrumb, BreadcrumbItem, Button, Flex, Text, Image, useDisclosure} from "@chakra-ui/react";
import {Link, useLocation} from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import UserModal from "../Modal/UserModal";

const Navbar = () => {
    const {pathname} = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { dishes, totalPrice } = useAppSelector((state) => state.user);
    const productsCount = dishes.reduce((acc, value) => {
        return acc + value.count;
    }, 0);

    return (
        <Flex justify="space-between" bg="#fff" p="4" boxShadow="lg" align="center" rounded='md' mb="6">
            <Box fontSize="25">
                {pathname.includes('admin') ?
                    <Link to={'/admin/dishes'}>
                        Turtle Pizza Admin
                    </Link> :
                    <Link to={'/'}>
                        Turtle Pizza
                    </Link>
                }
            </Box>
            {pathname.includes('admin') ? <Breadcrumb>
                <BreadcrumbItem fontSize="20">
                    <Link to={'/admin/dishes'}>
                        Dishes
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem fontSize="20">
                    <Link to={'/admin/order'}>
                        Order
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb> :
                <Button colorScheme="orange" size="lg" borderRadius="3xl" onClick={onOpen}>
                        <Flex align="center" >
                            {totalPrice} <Text fontSize="12">kgz</Text>
                            <Text height="10" w='0.5' bg="#fff" mx="2"></Text>
                            <Image width="6" height="auto" src={cart} alt="cart"/>
                            {productsCount}
                        </Flex>
                </Button>
            }
                <UserModal onClose={onClose} isOpen={isOpen}/>
        </Flex>
    );
};

export default Navbar;
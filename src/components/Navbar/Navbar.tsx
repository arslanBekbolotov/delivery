import React from 'react';
import {Box, Breadcrumb, BreadcrumbItem, Flex, Link} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex justify="space-between" bg="#fff" p="4" boxShadow="lg" align="center" rounded='md' mb="6">
            <Box fontSize="25">
                <Link>
                    Turtle Pizza
                </Link>
            </Box>
            <Breadcrumb>
                <BreadcrumbItem fontSize="20">
                    <Link>
                        Dishes
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem fontSize="20">
                    <Link>
                        Order
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    );
};

export default Navbar;
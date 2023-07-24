import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {TDishMutation} from "../../types";
import {useNavigate} from "react-router-dom";

interface Props{
    onSubmit:(dish:TDishMutation)=> void;
}

const Form:React.FC<Props> = ({onSubmit}) => {
    const navigate = useNavigate();
    const [dish,setDish] = useState<TDishMutation>({
        name:'',
        price:'',
        imageUrl:'',
    });

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name,value} = e.target;
        setDish(prevState => ({...prevState,[name]:value}));
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        onSubmit(dish);

        navigate('/admin/dishes');
    };


    return (
        <form onSubmit={handleSubmit}>
            <Box maxW="500px" mx="auto">
                <FormControl mb="3">
                    <FormLabel>Dish</FormLabel>
                    <Input
                        required
                        type='text'
                        name="name"
                        value={dish.name}
                        onChange={onChange}
                    />
                </FormControl>

                <FormControl mb="3">
                    <FormLabel>Price</FormLabel>
                    <Input
                        required
                        type='number'
                        name="price"
                        onChange={onChange}
                        value={dish.price}
                    />
                </FormControl>

                <FormControl mb="5">
                    <FormLabel>Photo</FormLabel>
                    <Input
                        required
                        type='url'
                        name="imageUrl"
                        value={dish.imageUrl}
                        onChange={onChange}
                    />
                </FormControl>

                <Button type="submit" display="block" ml="auto" colorScheme="teal">Add</Button>
            </Box>
        </form>
    );
};

export default Form;
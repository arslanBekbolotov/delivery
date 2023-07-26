import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input,Stack} from "@chakra-ui/react";
import {IDish, TDishMutation} from "../../types";
import {useNavigate} from "react-router-dom";

interface Props{
    onSubmit:(dish:TDishMutation)=> void;
    editDish?:IDish;
    isLoading:boolean;
}

const Form:React.FC<Props> = ({onSubmit,editDish,isLoading}) => {
    const navigate = useNavigate();
    const initialState = editDish ? editDish : {
        name:'',
        price:'',
        imageUrl:'',
        count:0,
    };

    const [dish,setDish] = useState<TDishMutation>(initialState);

    useEffect(()=>{
        if(editDish) setDish(editDish);
    },[editDish]);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name,value} = e.target;
        setDish(prevState => ({...prevState,[name]:value}));
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        await onSubmit(dish);

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
                <Stack direction='row' spacing={4} align='center'>
                    <Button
                        isLoading={isLoading}
                        loadingText='Loading'
                        colorScheme='teal'
                        variant='outline'
                        spinnerPlacement='start'
                        type="submit"
                    >
                        Add
                    </Button>
                </Stack>
            </Box>
        </form>
    );
};

export default Form;
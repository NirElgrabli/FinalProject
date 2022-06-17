import { background, Box, Button, Center, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Product.css';
import Sidebar from '../components/Sidebar';
import Homepage from '../components/Homepage';

const Header = ({title}) => <Box p={4} shadow='md'>
    <Heading ml='25'>{title}</Heading>
</Box>

function copy() { //copy function for button to copy the data
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }


function Product({location}) {
 const {state} = location;
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);
  
 let windowObjectReference;
 function openRequestedPopup() {
   windowObjectReference = window.open(state.urf);
 }
 //const handleClick = () => setClick(!click);
 //const closeMobileMenu = () => setClick(false);
 
if(!state){
     window.location = '/';
}
    return ( 
      <>
     <Sidebar />
     <Box >
        <Box textColor='black' bgColor='purple'>
         <Header title={state.title} />
        </Box>
        <Box p={12} d="flex" alignItems="center">
        <Box ml={4}>
            <SimpleGrid spacing={4} columns={{base: 1,md: 5}}>
                <GridItem colSpan={2}>
                  <Center>
                  <Image w={96} src={state.image} />
                  </Center>
                </GridItem>
            <GridItem colSpan={3}>
             <Box >
             <Heading>Price: ${state.price}</Heading>
             <Tag mt={2}>{state.category}</Tag>    
             </Box>
             <Text>{state.description} </Text>
             <HStack>
             <Button  w="sm" size="sm" colorScheme='blue'  onClick={openRequestedPopup}> GO NOW AND BUY</Button>
             <Button  w="sm" size="sm" colorScheme='red' onClick={ copy }>Copy link And share</Button>
             </HStack>
             </GridItem>
             </SimpleGrid>
        </Box>
        </Box>
    </Box>

    </>
    );
}
export default Product;

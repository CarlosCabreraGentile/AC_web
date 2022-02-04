import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import Image from "./Image";
import styled from 'styled-components'

const ImageList = () => {
    const [car, setCar] = useState([]);
    // const [numberPage, setNumberPage] = useState(1);

    useEffect(() => {
        images()
        .then((items) => {
            debugger
            setCar(items)
        })
    }, []);


const images = async () => {
    try {
        const response = await fetch(`http://localhost:8090/api/cars`);
        const items = await response.json();
        debugger
        return items;
    } catch (error) {
        console.log(error);
    }
}

    return(
        <>
        {/* <Pagination defaultCurrent={1} total={car?.length} /> */}
        <ListContainer>
         {car && 
            (car.map((item) => {
                debugger
            return <Image key={item.id} item={item}/>
        }             
            ))
        }    
        </ListContainer>
        </>
    )
}

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;  
`;

export default ImageList;

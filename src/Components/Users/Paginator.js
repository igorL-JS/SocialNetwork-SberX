import React, {useState} from "react";
import p from "../Users/Paginator.module.css"

export const Paginator = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize));

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let partCount = Math.ceil((pagesCount / props.pageSize));
    let [numberOfPart,setNumberOfPart] = useState(1);
    let leftPartPageNumber = (numberOfPart - 1 ) * props.sizeOfPart + 1;
    let rightPartPageNumber = numberOfPart * props.sizeOfPart;
    debugger;

    return (
        <div className={p.pagination}>
            {numberOfPart > 1 &&
            <a onClick={ () => {setNumberOfPart(numberOfPart - 1)}}>&laquo;</a>}


            {(pages.filter((page) => (page >= leftPartPageNumber && page <= rightPartPageNumber))).map((page) => {
                return (<a onClick={() => {props.onPageChanged(page)}} className={props.currentPage === page && p.selected}> {page} </a>)
            })}

        {partCount > numberOfPart &&
        <a onClick={ () => {setNumberOfPart(numberOfPart + 1)}}>&raquo;</a>}

        </div>
    )};





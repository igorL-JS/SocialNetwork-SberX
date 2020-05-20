import React from "react";
import p from "../Users/Paginator.module.css"

export const Paginator = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize));

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
        {pages.map((page) => {
            return <span onClick={() => {
                props.onPageChanged(page)
            }} className={props.currentPage === page && p.selected}> {page} </span>
        })}

        </div>
    )};





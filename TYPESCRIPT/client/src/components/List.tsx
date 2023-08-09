import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>){
    return (
        <div>
            {props.items.map(item => props.renderItem(item))}
        </div>
    )
}

export default List

import React from 'react';
import cl from './tagItem.module.css'

function TagItem({children}) {
    return (
        <div className={cl.tag}>{children}</div>
    );
}

export default TagItem;

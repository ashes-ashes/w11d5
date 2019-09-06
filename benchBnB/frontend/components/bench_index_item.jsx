import React from 'react';

const BenchIndexItem = ({ bench }) => {
    return(
        <li>
            <p>{bench.description}</p>
        </li>
    );
};

export default BenchIndexItem;
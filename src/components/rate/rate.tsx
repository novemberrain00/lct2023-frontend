import {FC} from 'react';

import './rate.css';

interface RatePropsI {
    name: string,   
    data: string,  
}

const Rate: FC<RatePropsI> = (props) => {
    return (
        <div className='rate'>
            <h4 className="rate__title">{props.name}</h4>
            <div className="rate__value">{props.data}</div>
        </div>
    );
}

export default Rate;
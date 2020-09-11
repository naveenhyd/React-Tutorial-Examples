import React from 'react';
import './Stylesheet.css';
import styles from './Stylesheet1.module.css';

function Stylesheet() {

    return (
        <div>
            <div className='error'>error</div>
            <div className={styles.success}>success</div>
        </div>
    )
}

export default Stylesheet;
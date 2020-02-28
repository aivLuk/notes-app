import React from 'react';
import styles from './Input.module.css';

const Input = (props) => (
    <div className={styles.InputContainer}>
        <textarea
            type='text'
            className={styles.TextArea}
            style={{ border: props.error ? '1px solid red' : '1px solid #ccc' }}
            placeholder='Add a note here...'
            onChange={props.changed} />
        <button onClick={props.clicked} className={styles.InputBtn}>Add note</button>
    </div>
)




export default Input;
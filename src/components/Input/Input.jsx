import React from 'react';
import styles from './Input.module.scss'
import { Button, TextField } from '@mui/material';


const Input = ({ value, setValue, addTask }) => {
    return (
        <div className={styles.input}>
            <TextField
                variant="outlined"
                type="text"
                value={value}
                onChange={({ target }) => {
                    setValue(target.value)
                }}
                label='&#9998; Your note'
                className={styles.input_field}
            />
            <Button onClick={addTask} type="button" variant="contained" className={styles.btn}>Add note</Button>
        </div>
    );
};

export default Input;
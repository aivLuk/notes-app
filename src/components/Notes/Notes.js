import React from 'react';
import styles from './Notes.module.css';

const Notes = (props) => {
    const noteList = props.notes.map((el, index) => {
        return <div key={index} className={styles.SingleNote}>
            <p className={styles.Note}>{el.note}</p>
            <span className={styles.Date}>{el.date}</span>
            <button
                className={styles.Done}
                onClick={() => props.clicked(index)}>Done</button>
        </div >
    })

    return <div className={styles.NotesContainer}>
        {noteList}
    </div>
}

export default Notes;
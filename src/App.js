import React, { Component } from 'react';
import styles from './App.module.css';
import Input from './components/Input/Input';
import Notes from './components/Notes/Notes'

class App extends Component {
  state = {
    currentNote: '',
    notes: [],
    error: false
  }

  addNoteHandler = () => {
    if (this.state.currentNote.length > 0) {
      const cur = this.state.currentNote;
      const notesArr = [...this.state.notes];
      const date = new Date();
      const currDate = date.toLocaleString();
      notesArr.push({ note: cur, date: currDate });
      this.setState({ notes: notesArr, error: false })
    } else {
      this.setState({ error: true })
    }
  }

  changeNoteHandler = (event) => {
    const note = event.target.value;
    this.setState({ currentNote: note })
  }

  NoteDoneHandler = (indx) => {
    const newNotes = [...this.state.notes];
    newNotes.splice(indx, 1);
    this.setState({ notes: newNotes });
  }

  render() {

    return (
      <div className={styles.App} >
        <Input
          error={this.state.error}
          clicked={this.addNoteHandler}
          changed={(e) => this.changeNoteHandler(e)} />
        <Notes
          notes={this.state.notes}
          clicked={this.NoteDoneHandler} />
      </div>
    )
  }
}

export default App;

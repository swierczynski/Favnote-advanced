import React, { useContext } from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Card from '../../components/moleculs/Card/Card'
import styles from './NoteView.module.scss'
import Input from '../../components/atoms/Input/Input';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Heading from '../../components/atoms/Heading/Heading';
import { connect } from 'react-redux'
import AddItem from '../../components/organisms/AddItem/AddItem';

const NoteView = ({notes}) => {

  const allNotes = notes.map( note => <Card key={note.id} {...note} /> )

  

  return ( 
    <UserPageTemplate>
      <div className={styles.heading}>
        <Input searchInput />
        <Heading big >Notes</Heading>
        <Paragraph>6 notes</Paragraph>
      </div>
      <div className={styles.main}>
        {allNotes}
      </div>
      <AddItem />
    </UserPageTemplate>
   );
}
 
const mapStateToProps = (state) => {
  return {
    notes : state.notes
  }
}

const NoteViewConsumer = connect(mapStateToProps)(NoteView)


export default NoteViewConsumer;
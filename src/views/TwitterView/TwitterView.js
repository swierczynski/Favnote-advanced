import React from 'react';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Card from '../../components/moleculs/Card/Card';
import UserPageTemplate from '../../templates/UserPageTemplate';
import styles from './TwitterView.module.scss'
import { connect } from 'react-redux';
import AddItem from '../../components/organisms/AddItem/AddItem';



const TwitterView = ({twitters}) => {

  const allTwitters = twitters.map(twitter => <Card key={twitter.id} {...twitter} />)

  return ( 
    <UserPageTemplate>
      <div className={styles.heading}>
        <Input searchInput />
        <Heading big >Twitters</Heading>
        <Paragraph>6 Twitters</Paragraph>
      </div>
      <div className={styles.main}>
        {allTwitters}
      </div>
      <AddItem />
    </UserPageTemplate>
   );
}

const mapStateToProps = (state) => {
  return {
    twitters : state.twitters
  }
}

const TwitterViewConsumer = connect(mapStateToProps)(TwitterView)
 
export default TwitterViewConsumer;
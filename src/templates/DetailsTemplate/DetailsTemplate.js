import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { PageContext } from '../../components/context/PageContext';
import UserPageTemplate from '../UserPageTemplate';


const DetailsTemplate = ({children}) => {

  const { pageType } = useContext(PageContext)
  return ( 
    <UserPageTemplate>
      <div>
        <h1>{pageType}</h1>
        {children}
        <Link to='/'>go back</Link>
      </div>
    </UserPageTemplate>
   );
}
 
export default DetailsTemplate;
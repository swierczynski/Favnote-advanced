import React, { useEffect, useState } from 'react';
import DetailsTemplate from '../../templates/DetailsTemplate/DetailsTemplate';
import { routes } from '../../roots/roots'


const DetailsPage = ({match}) => {

  return ( 
    <>
      <DetailsTemplate>
        {console.log(match)}
        <p>{`is Twitter: ${match.path === routes.twitter}`}</p>
        <p>{`is Article: ${match.path === routes.article}`}</p>
        <p>{`is Note: ${match.path === routes.note}`}</p>
        <p>lorem kamil</p>
      </DetailsTemplate>
      
    </>
   );
}
 
export default DetailsPage;
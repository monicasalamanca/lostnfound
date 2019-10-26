import React from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import CSSReset from './styles/cssReset';

class Page extends React.Component {
  render() { 
    return ( 
      <div>
        <CSSReset />
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
 
export default Page;
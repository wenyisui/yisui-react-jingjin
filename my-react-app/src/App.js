import React,{Component, Suspense, lazy} from 'react';
import Loading from './14.Loading';
const MainConponent = lazy(()=>import('./14.Main'));

class App extends Component {
    render() {
      return (
         <Suspense fallback={ <Loading /> }>
            <MainConponent  />
         </Suspense>
      );
  }
}

export default App;

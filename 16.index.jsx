import Loading from './16.Loading';
import ErrorBoundary from './ErrorBoundary';

// const TestComponent= React.lazy(()=>import('./16.module'))

// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <div>123</div>
//                 <ErrorBoundary>
//                    < React.Suspense fallback={ <Loading /> }>
//                       <TestComponent />
//                    </React.Suspense>
//                 </ErrorBoundary>
//             </div>
            
//         )
//     }
// }


const Test1=React.lazy(()=>import('./16.modules.folder/Test1'));
const Test2=React.lazy(()=>import('./16.modules.folder/Test2'));

class App extends React.Component {
    render () {
        return (
            <div>
                <React.Suspense fallback={ <Loading/> }>
                    <ErrorBoundary>
                       <Test1 />
                    </ErrorBoundary>
                    
                    <Test2 />
                </React.Suspense>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
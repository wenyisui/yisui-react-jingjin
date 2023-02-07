import React, { Suspense } from 'react';
function App() {
  return (
    <div className='app'>
      <Suspense fallback={<p>loading...</p>}>
        <div id='app'>
        </div>
      </Suspense>

    </div>
  );
}

export default App;

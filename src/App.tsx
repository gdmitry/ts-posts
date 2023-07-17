import PostsList from './components/PostsList'
import Header from './components/Header';
import { Suspense, useState } from 'react';
import Skeleton from './components/Skeleton/Skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const Skeletons = [...Array(10).keys()].map(i => <Skeleton key={i} />)

function App() {
  const [currentUserId, setCurrentUserId] = useState<number>(0);

  const content = currentUserId == 0
    ? <p className="message">Select an Employee to view posts</p>
    : (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCurrentUserId(0)}
        resetKeys={[currentUserId]}
      >
        <Suspense fallback={Skeletons}>
          <PostsList currentUserId={currentUserId} />
        </Suspense>
      </ErrorBoundary>
    )

  return (
    <>
      <Header currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
      {content}
    </>
  )
}

export default App

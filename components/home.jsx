'use client';
import { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';

function Home({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <LoadingComponent onLoadingComplete={handleLoadingComplete} />
      )}
      {!isLoading && <div className="container mx-auto">{children}</div>}
    </div>
  );
}

export default Home;

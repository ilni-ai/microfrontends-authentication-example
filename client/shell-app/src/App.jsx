// shell-app/src/App.jsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const UserApp = lazy(() => import('userApp/App'));
const ProductApp = lazy(() => import('productApp/App'));

// GraphQL query to check the current user's authentication status
const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      username
    }
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use Apollo's useQuery hook to perform the authentication status check on app load
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY, {
    fetchPolicy: 'network-only',
  });
  // Use the useEffect hook to listen for the custom loginSuccess event from the UserApp
  useEffect(() => {
    // Listen for the custom loginSuccess event from the UserApp
    const handleLoginSuccess = (event) => {
      // Update the authentication status based on the event detail
      setIsLoggedIn(event.detail.isLoggedIn);
    };
    // Add the event listener to the window object to listen for the custom event
    // emitted by the UserApp
    window.addEventListener('loginSuccess', handleLoginSuccess);

    // Check the authentication status based on the query's result
    if (!loading && !error) {
      setIsLoggedIn(!!data.currentUser);
    }
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('loginSuccess', handleLoginSuccess);
    };
    
  }, [loading, error, data]); // Re-run the effect when the query's loading, error, or data state changes
  // Display a loading message while the query is in progress
  if (loading) return <div>Loading...</div>;
  // Display an error message if the query fails
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {!isLoggedIn ? <UserApp /> : <ProductApp />}
      </Suspense>
    </div>
  );
}

export default App;

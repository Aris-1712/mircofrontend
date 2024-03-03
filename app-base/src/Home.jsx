import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = React.lazy(() => import('app-components/Button'));

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Sample Micro forntend App</h1>
      <label>
        Below component is exported from a micro frontend "app-components"
      </label>
      <div style={{ marginTop: 16 }}>
        <Suspense fallback={<>Loading...</>}>
          <Button
            label='Product Listing'
            clicHandler={() => {
              navigate('/listing');
            }}
            disabled={false}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

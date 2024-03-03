import { useParams } from 'react-router-dom';
import Sample from './sampleJson.json';
import { useEffect } from 'react';
import { useMemo } from 'react';

const LisitngId = () => {
  const params = useParams();
    console.log(params)
  const product = useMemo(() => {
    return Sample?.products?.find((item) => (item?.id)?.toString() === params?.id) || {};
  }, [params]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label>Title: {product?.title}</label>
      </div>
      <div>
        <label>Price: {product?.price}</label>
      </div>
      <div>
        <label>Stock: {product?.stock}</label>
      </div>
    </div>
  );
};
export default LisitngId;

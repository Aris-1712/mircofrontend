import Sample from './sampleJson.json';

const Lisitng = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Sample?.products?.map((item) => {
        return (
          <div>
            <div>
              <label>Title: {item?.title}</label>
            </div>
            <div>
              <label>Price: {item?.price}</label>
            </div>
            <div>
              <label>Stock: {item?.stock}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Lisitng;

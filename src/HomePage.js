import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
function HomePage() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((item) => [...item, ...item.concat(Array.from({ length: 10 }))]);
    },1000);
  };
  // const data = React.useMemo(() => items, [items]);
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {items.map((i, index) => (
          <div key={index}>{index}{<h3>Div</h3>}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
export default HomePage;

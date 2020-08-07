import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="121" r="116" />
      <rect x="0" y="253" rx="6" ry="3" width="280" height="26" />
      <rect x="0" y="299" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="413" rx="6" ry="3" width="90" height="35" />
      <rect x="149" y="404" rx="30" ry="30" width="129" height="50" />
    </ContentLoader>
  );
}

export default LoadingBlock;
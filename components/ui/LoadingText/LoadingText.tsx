import React from 'react';

type Props = {
  text?: boolean;
};

function LoadingText({ text = false }) {
  return (
    <div className="flex items-center gap-2">
      {text ?? <span>Loading</span>}
      <span className="ml-2 animate-bounce [animation-delay:-0.3s]">.</span>
      <span className="animate-bounce [animation-delay:-0.15s]">.</span>
      <span className="animate-bounce">.</span>
    </div>
  );
}

export default LoadingText;

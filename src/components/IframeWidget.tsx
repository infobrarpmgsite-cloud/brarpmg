import React from 'react';

interface IframeWidgetProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  id?: string;
}

const IframeWidget: React.FC<IframeWidgetProps> = ({
  src,
  title,
  width = '100%',
  height = '600px',
  className = '',
  id,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        id={id}
        src={src}
        title={title}
        width={width}
        height={height}
        className="border-0 rounded-lg shadow-lg"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default IframeWidget;

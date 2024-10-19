import React from 'react';

const TextBorder = ({
  children,
  color = 'white',
  borderColor = 'black',
  borderWidth = 1,
}) => {
  const style = {
    color: color,
    textShadow: `
      -${borderWidth}px -${borderWidth}px 0 ${borderColor},
       ${borderWidth}px -${borderWidth}px 0 ${borderColor},
      -${borderWidth}px  ${borderWidth}px 0 ${borderColor},
       ${borderWidth}px  ${borderWidth}px 0 ${borderColor}
    `,
  };

  return <span style={style}>{children}</span>;
};

export default TextBorder;

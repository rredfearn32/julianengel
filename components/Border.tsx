type BorderProps = {
  color: string;
  width?: number;
};

export const Border = ({ color, width }: BorderProps) => {
  return (
    <div className={`flex space-x-2 w-${width || 'full'}`}>
      <div className={`p-1 ${color}`}></div>
      <div className={`p-1 ${color}`}></div>
      <div className={`grow flex-row p-1 ${color}`}></div>
    </div>
  );
};

interface props {
  height: number;
  color: string;
}
export default function Line({ height, color }: props) {
  return <div className={`h-[${height}px] bg-${color}`}></div>;
}

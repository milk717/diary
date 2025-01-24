import {cn} from '../utils/style.ts';

interface Props {
  title: string;
  description: string;
  lineCnt?: number;
  className?: string;
}

export const LineBox = ({title, description, lineCnt, className}: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col border-r border-b border-slate-200',
        className,
      )}>
      <div className="flex gap-x-2 items-center p-3 border-b border-slate-200">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <div className="flex flex-col">
        {new Array(lineCnt ?? 10).fill(0).map((_, i) => (
          <div key={i} className="h-11 grid-bg" />
        ))}
      </div>
    </div>
  );
};

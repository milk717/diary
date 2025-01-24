import {Square} from 'lucide-react';
import {cn} from '../utils/style.ts';

interface Props {
  title: string;
  contents: string[];
  direction?: 'row' | 'col';
  className?: string;
}
export const Checklist = ({
  title,
  contents,
  direction = 'col',
  className,
}: Props) => {
  return (
    <div className={cn('flex flex-col gap-y-2 px-3 py-3', className)}>
      <p className="font-semibold text-sm">{title}</p>
      <div
        className={cn(
          'grid  gap-y-1 gap-x-3',
          direction === 'col'
            ? 'grid-flow-col grid-rows-2 auto-cols-auto'
            : 'grid-cols-2',
        )}>
        {contents.map((content, index) => (
          <div
            key={index}
            className="flex items-center gap-1 text-xs text-slate-500">
            <Square size={20} className="stroke-slate-300" />
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

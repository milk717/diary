import {cn} from '../utils/style.ts';
import {ReactElement} from 'react';

interface Props {
  title: string;
  description?: string;
  icon?: ReactElement;
  href?: string;
  classNames?: {
    base?: string;
    box?: string;
  };
}

export const Box = ({title, description, href, icon, classNames}: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col border-r border-b border-slate-200',
        classNames?.base,
      )}>
      <div className="flex gap-x-2 items-center p-3 border-b border-slate-200">
        <div className="flex gap-x-1 items-center">
          {icon}
          <a href={href} className="font-semibold text-sm">
            {title}
          </a>
        </div>
        {description && <p className="text-xs text-slate-500">{description}</p>}
      </div>
      <div className={cn(classNames?.box || 'min-h-24 flex-1', 'grid-bg')} />
    </div>
  );
};

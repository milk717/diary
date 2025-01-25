import {getMonthName} from '../utils/date.ts';
import {CalendarDays, Goal, Sprout} from 'lucide-react';
import {cn} from '../utils/style.ts';
import {CURRENT_YEAR} from '../constants.ts';

interface Props {
  monthNumber?: number;
  currentId?: 'routine' | 'goal' | 'yearly';
}

export const Nav = ({monthNumber, currentId}: Props) => {
  return (
    <div className="h-10 bg-indigo-50 w-full flex justify-between items-center py-2 px-4 text-slate-700 text-sm border-b border-b-slate-200">
      <div className="flex items-center">
        {monthNumber ? (
          <a
            className="font-semibold w-28"
            href={`#${CURRENT_YEAR}-${String(monthNumber).padStart(2, '0')}`}>
            {getMonthName(monthNumber)}
          </a>
        ) : (
          <a className="font-semibold w-28" href={`#cover`}>
            Cover
          </a>
        )}

        <div className="flex items-center gap-4">
          <a
            href="#goal"
            className={cn(
              'flex items-center gap-1 rounded py-0.5 px-1',
              currentId === 'goal' && 'bg-indigo-200',
            )}>
            <Goal size={16} />
            <span>Goal</span>
          </a>
          <a
            href={`#${CURRENT_YEAR}`}
            className={cn(
              'flex items-center gap-1 rounded py-0.5 px-1',
              currentId === 'yearly' && 'bg-indigo-200',
            )}>
            <CalendarDays size={16} />
            <span>{CURRENT_YEAR}</span>
          </a>
          <a
            href="#routine"
            className={cn(
              'flex items-center gap-1 rounded py-0.5 px-1',
              currentId === 'routine' && 'bg-indigo-200',
            )}>
            <Sprout size={16} />
            <span>Routine</span>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {new Array(12).fill(0).map((_, i) => (
          <a
            key={i}
            href={`#${CURRENT_YEAR}-${i + 1}`}
            className={cn(
              'block w-6 h-6 text-center leading-6 rounded',
              monthNumber === i + 1 ? 'bg-indigo-200' : '',
            )}>
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

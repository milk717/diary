import {Box} from '../../../shared/ui/box.tsx';
import {cn} from '../../../shared/utils/style.ts';
import {Dayjs} from 'dayjs';

interface Props {
  date: Dayjs;
}

const fullWeekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const WeekTable = ({date}: Props) => {
  return (
    <div className="grid grid-cols-7 h-full">
      {new Array(7).fill(0).map((_, i) => (
        <Box
          key={i}
          title={fullWeekdays[i]}
          description={date.add(i, 'day').format('MM.DD')}
          href={`#${date.add(i).format('YYYY-MM-DD')}`}
          classNames={{
            base: cn('h-full', i === 6 && 'border-r-0'),
            box: 'h-full',
          }}
        />
      ))}
    </div>
  );
};

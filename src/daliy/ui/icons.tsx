import MsTodo from '../../assets/ms-todo.svg';
import GoogleCalendar from '../../assets/google-calendar.svg';
import Obsidian from '../../assets/obsidian.svg';

import {CURRENT_YEAR} from '../../shared/constants.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
}

export const Icons = ({monthNumber, dayNumber}: Props) => {
  return (
    <div className="flex justify-between items-center bg-indigo-50 p-3 border-b-slate-200 border-b h-16">
      <p className="font-semibold">Apps</p>
      <div className="flex gap-x-6">
        <a href="shortcuts://run-shortcut/?name=Open%20todo%20list">
          {/*<MsTodo />*/}
          <img src={MsTodo} />
        </a>
        <a
          href={`https://calendar.google.com/calendar/u/0/r/day/${CURRENT_YEAR}/${String(monthNumber).padStart(2, '0')}/${String(dayNumber).padStart(2, '0')}`}>
          {/*<GoogleCalendar />*/}
          <img src={GoogleCalendar} />
        </a>
        <a
          href={`obsidian://open/?vault=sumin&file=%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC%2Fdaily%2F${CURRENT_YEAR}-${String(monthNumber).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`}>
          {/*<Obsidian />*/}
          <img src={Obsidian} />
        </a>
      </div>
    </div>
  );
};

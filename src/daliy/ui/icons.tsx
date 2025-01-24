import MsTodo from '../../assets/ms-todo.png';
import GoogleCalendar from '../../assets/google-calendar.png';
import Obsidian from '../../assets/obsidian.png';
import {CURRENT_YEAR} from '../../shared/constants.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
}

export const Icons = ({monthNumber, dayNumber}: Props) => {
  return (
    <div className="flex justify-between items-center bg-indigo-50 p-3 border-b-slate-200 border-b h-[61px]">
      <p className="font-semibold">Apps</p>
      <div className="flex gap-x-6">
        <a href="shortcuts://run-shortcut/?name=Open%20todo%20list">
          <img alt="ms-todo" src={MsTodo} width={24} height={24} />
        </a>
        <a
          href={`https://calendar.google.com/calendar/u/0/r/day/${CURRENT_YEAR}/${String(monthNumber).padStart(2, '0')}/${String(dayNumber).padStart(2, '0')}`}>
          <img alt="ms-todo" src={GoogleCalendar} width={24} height={24} />
        </a>
        <a
          href={`obsidian://open/?vault=sumin&file=%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC%2Fdaily%2F${CURRENT_YEAR}-${String(monthNumber).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`}>
          <img alt="ms-todo" src={Obsidian} width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

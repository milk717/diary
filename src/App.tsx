import {MonthlyPage} from './monthly/ui/page.tsx';
import {DailyPage} from './daliy/ui/page.tsx';
import dayjs from 'dayjs';
import {CURRENT_YEAR} from './shared/constants.ts';
import {WeeklyPage} from './weekly/ui/page.tsx';
import {BlankPage} from './blank/ui/page.tsx';
import {YearlyPage} from './yearly/ui/page.tsx';
import {CoverPage} from './cover/ui/page.tsx';
import {HabitPage} from './habit/ui/page.tsx';

const generateDailyPages = () => {
  const startOfYear = dayjs(`${CURRENT_YEAR}-01-01`);
  const endOfYear = dayjs(`${CURRENT_YEAR}-12-31`);
  const totalDays = endOfYear.diff(startOfYear, 'day') + 1;

  return Array.from({length: totalDays}, (_, i) => {
    const currentDate = startOfYear.add(i, 'day');
    const isMonday = currentDate.day() === 1; // 월요일 확인

    return (
      <>
        {isMonday && <WeeklyPage date={currentDate} />}
        <DailyPage
          key={i}
          monthNumber={currentDate.month() + 1}
          dayNumber={currentDate.date()}
        />
      </>
    );
  });
};

function App() {
  return (
    <main className="text-slate-700">
      <CoverPage />
      <BlankPage id="goal" />
      <YearlyPage />
      <HabitPage />
      {new Array(12).fill(0).map((_, i) => (
        <MonthlyPage key={i} monthNumber={i + 1} />
      ))}
      {generateDailyPages()}
    </main>
  );
}

export default App;

import dayjs, {Dayjs} from 'dayjs';

export const getMonthName = (monthNumber: number) => {
  const month = dayjs().month(monthNumber - 1);
  return month.format('MMMM');
};

interface CalendarDay {
  date: dayjs.Dayjs;
  isCurrentMonth: boolean;
  isSaturday: boolean;
  isSunday: boolean;
}

export const generateCalendar = (year: number, month: number) => {
  const startOfMonth = dayjs(`${year}-${month}-01`); // 해당 월의 시작
  const endOfMonth = startOfMonth.endOf('month'); // 해당 월의 끝

  const startDayOfWeek = startOfMonth.day(); // 시작 요일 (0: 일요일 ~ 6: 토요일)
  const totalDaysInMonth = endOfMonth.date(); // 해당 월의 총 날짜 수

  // 이전 달의 날짜를 계산
  const prevMonthEnd = startOfMonth.subtract(1, 'month').endOf('month');
  const prevMonthDays = prevMonthEnd.date(); // 이전 달의 총 날짜 수

  // 달력 배열 생성
  const calendar: CalendarDay[] = [];

  // 이전 달의 날짜 추가 (빈 공간 채우기)
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const date = prevMonthEnd.date(prevMonthDays - i);
    calendar.push({
      date,
      isCurrentMonth: false,
      isSaturday: date.day() === 6,
      isSunday: date.day() === 0,
    });
  }

  // 현재 달의 날짜 추가
  for (let i = 1; i <= totalDaysInMonth; i++) {
    const date = startOfMonth.date(i);
    calendar.push({
      date,
      isCurrentMonth: true,
      isSaturday: date.day() === 6,
      isSunday: date.day() === 0,
    });
  }

  const remainingDays = 35 - (calendar.length % 35); // 35 크기에 맞추기 위한 남은 칸 계산
  for (let i = 1; i <= remainingDays; i++) {
    const date = endOfMonth.add(i, 'day');
    calendar.push({
      date,
      isCurrentMonth: false,
      isSaturday: date.day() === 6,
      isSunday: date.day() === 0,
    });
  }

  // 배열을 35개 단위로 분리
  const chunks: CalendarDay[][] = [];
  for (let i = 0; i < calendar.length; i += 35) {
    chunks.push(calendar.slice(i, i + 35));
  }

  return [chunks[0], chunks[1]?.[0]?.isCurrentMonth ? chunks[1] : undefined];
};

export const getWeekOfMonth = (date: Dayjs) => {
  const inputDate = dayjs(date); // 입력된 날짜를 dayjs 객체로 변환
  const startOfMonth = inputDate.startOf('month'); // 해당 월의 시작일

  // 월 초부터 현재 날짜까지의 차이를 주 단위로 계산
  const weekNumber = Math.ceil((inputDate.date() + startOfMonth.day()) / 7);

  return weekNumber;
};

export const getWeekRange = (date: Dayjs) => {
  const startOfWeek = dayjs(date).startOf('week').add(1, 'd'); // 이번 주의 시작일 (월요일)
  const endOfWeek = dayjs(date).endOf('week').add(1, 'd'); //이번 주의 종료일 (요일)

  return `${startOfWeek.format('YY.MM.DD')} ~ ${endOfWeek.format('YY.MM.DD')}`;
};

export const groupDatesByMonth = (year: number) => {
  const months = Array.from({length: 12}, (_, monthIndex) => {
    const startOfMonth = dayjs(`${year}-${monthIndex + 1}-01`);
    const daysInMonth = startOfMonth.daysInMonth();

    return Array.from({length: daysInMonth}, (_, dayIndex) => {
      return startOfMonth.add(dayIndex, 'day');
    });
  });

  return months;
};

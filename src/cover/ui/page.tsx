import {cn} from '../../shared/utils/style.ts';
import {PageLayout} from '../../shared/ui/page-layout.tsx';

export const CoverPage = () => {
  return (
    <PageLayout id="cover">
      <div className={cn('flex items-center bg-mystic-fog h-full w-full')}>
        <div className="flex flex-col justify-between text-start px-8 bg-white shadow-2xl py-12 w-full mt-32">
          <h1 className="text-6xl font-bold mb-8">2025 Planner</h1>
          <p className="text-lg font-medium text-slate-600">
            The best way to predict the future is to invent it
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

import {cn} from '../../../shared/utils/style.ts';
import {PageLayout} from '../../../shared/ui/page-layout.tsx';
import Cover from '../../../assets/cover.svg?react';

export const CoverPage = () => {
  return (
    <PageLayout id="cover">
      <div className="relative h-full w-full">
        <Cover className="h-full w-full" />
        <div
          className={cn(
            'absolute top-0 bottom-0 left-0 right-0 flex items-center h-full w-full',
          )}>
          <div className="flex flex-col justify-between text-start px-8 bg-white shadow-2xl py-12 w-full mt-32">
            <h1 className="text-6xl font-bold mb-8">2025 Planner</h1>
            <p className="text-lg font-medium text-slate-600">
              The best way to predict the future is to invent it
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

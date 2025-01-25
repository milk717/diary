import {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  id: string;
}

export const PageLayout = ({children, id}: Props) => {
  return (
    <div
      id={id}
      className="h-[210mm] w-[336mm] overflow-hidden relative z-50 page-break">
      {children}
    </div>
  );
};

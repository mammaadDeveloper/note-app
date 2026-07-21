import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex justify-center relative">
      <div className="mockup-window border border-gray-500 w-100 bg-base-300 fixed">
        <div className="border-t border-gray-100 pt-2 h-screen w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

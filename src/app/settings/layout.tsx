import { ReactNode } from 'react';
import SettingsBreadcrumb from "@/components/SettingsBreadcrumb";
import GJCLeftSideBar from '@/components/gjc/gjcLeftSideBar';

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <main className="pt-32 pl-72">
      <GJCLeftSideBar />
      <SettingsBreadcrumb />
      {children}
    </main>
  );
}
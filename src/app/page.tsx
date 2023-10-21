import { NavBar } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600">
      <div className="flex flex-col items-center justify-center">
        <NavBar />
        Pragyan Inductions
      </div>
    </main>
  );
}

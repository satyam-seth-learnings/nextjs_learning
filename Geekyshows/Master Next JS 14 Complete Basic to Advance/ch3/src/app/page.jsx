import LearnClientComponent from '@/components/LearnClientComponent';
import LearnServerComponent from '@/components/LearnServerComponent';
import LearnLink from '@/components/LearnLink';
import LearnUseRouter from '@/components/LearnUseRouter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerComponent /> */}
      <LearnClientComponent />
    </main>
  )
}

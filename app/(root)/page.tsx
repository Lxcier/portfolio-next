import GlobeSection from '@/components/Globe';
import { FlipWordsSection } from '@/components/FlipWords';
import Approach from '@/components/Approach';

export default function Home() {
  return (
    <>
      <GlobeSection />
      <div className={'w-full'}>
        <FlipWordsSection />
        <Approach />
      </div>
    </>
  );
}

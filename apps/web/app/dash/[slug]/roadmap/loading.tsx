import { Skeleton } from '@ui/components/ui/skeleton';

export default function RoadmapLoading() {
  return (
    <>
      <Skeleton className='h-8 w-48' />
      <Skeleton className='mt-2 h-4 w-96' />
      <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className='h-80 w-full' />
        ))}
      </div>
    </>
  );
}

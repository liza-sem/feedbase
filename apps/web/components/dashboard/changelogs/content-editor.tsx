'use client';

import React from 'react';
import { ChangelogProps } from '@/lib/types';
import TooltipLabel from '@/components/shared/tooltip-label';
import RichTextEditor from '@/components/shared/tiptap-editor';

export default function ChangelogContentEditor({
  data,
  setData,
}: {
  data: ChangelogProps['Row'];
  setData: React.Dispatch<React.SetStateAction<ChangelogProps['Row']>>;
}) {
  return (
    <div className='flex h-full flex-col gap-2'>
      <TooltipLabel label='Content' tooltip='The content of your changelog.' />
      <div className='bg-root flex h-full max-h-96 flex-col overflow-auto rounded-md border p-3'>
        <RichTextEditor
          content={data.content || ''}
          setContent={(content) => {
            setData((prev) => ({
              ...prev,
              content: typeof content === 'function' ? content(prev.content || '') : content,
            }));
          }}
          placeholder='Write your changelog update...'
          showToolbar
          proseInvert
        />
      </div>
    </div>
  );
}

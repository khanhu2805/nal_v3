import { Editor } from '@tiptap/react'
import React from 'react'

type Props = {
    editor: Editor | null
}

const TextEditor = ({editor}: Props) => {
  return (
    <div className='mt-6 border-[1px] rounded-lg'>
        <div className='flex items-center justify-around'>
            <button type='button' onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
            className={editor?.isActive('bold')?'bg-orange-100 text-black p-3': 'bg-white text-black p-3'}
            >
                Bold
            </button>
        </div>
    </div>
  )
}

export default TextEditor
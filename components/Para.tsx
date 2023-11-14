import React, { useEffect, useRef, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextEditor from './TextEditor';

interface Props {
    setDesc: React.Dispatch<React.SetStateAction<any>>,
    desc:string
}

const Para: React.FC<Props> = ({setDesc, desc}) => {
    const [focus, setFocus] = useState<boolean>(false)
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        editorProps: {
            attributes:{
                class:'prose w-full focus:outline-none leading-5 prose-a:text-orange-500 prose-a:font-semibold prose-a:no-underline'
            }
        },
        content: desc,
      })

      const html = editor?.getHTML()
      useEffect(() => {
        setDesc(html)
        console.log(html)
      }, [html, setDesc])

      const menuRef = useRef<HTMLDivElement>(null)
      useEffect(() => {
        const handler = (e:any) =>{
            if(!menuRef.current?.contains(e.target)) {
                setFocus(false)
            }
        }
        document.addEventListener('mousedown', handler)
      }, [])
  return (
    <div className={`mx-auto border-[1px] mt-4 rounded-xl ${focus ? 'border-orange-500 border-[2px] ml-0':''}`}
    ref={menuRef}>
        <TextEditor editor={editor}/>
        <EditorContent editor={editor} style={{padding:'18px'}} onClick={() => setFocus(true)}/>
    </div>
  )
}

export default Para
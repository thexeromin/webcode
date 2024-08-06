import { useEffect, useRef, useState } from 'react'
import { EditorView, basicSetup } from 'codemirror'
import { cpp } from '@codemirror/lang-cpp'
import './style.css'

export default function Editor() {
    const editor = useRef<HTMLDivElement>(null)
    const [code, setCode] = useState('')

    const onUpdate = EditorView.updateListener.of((v) => {
        setCode(v.state.doc.toString())
    })

    useEffect(() => {
        if (!editor.current) return () => null

        const view = new EditorView({
            extensions: [basicSetup, cpp(), onUpdate],
            doc: 'Hello World',
            parent: editor.current,
        })

        return () => {
            view.destroy()
        }
    }, [])

    function getCode() {
        console.log(code)
    }

    return (
        <>
            <div ref={editor}></div>
            <button onClick={getCode}>Get Code</button>
        </>
    )
}

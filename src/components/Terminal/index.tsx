import { useEffect, useRef } from 'react'
import { Terminal as XTerminal } from '@xterm/xterm'

export default function Terminal() {
    const terminal = useRef<HTMLDivElement>(null)
    const term = new XTerminal()

    useEffect(() => {
        if (terminal.current) {
            term.open(terminal.current)
        }
    }, [])

    return (
        <>
            <div ref={terminal}></div>
        </>
    )
}

type CodeEditorViewProps = {
  codeBlocks: string[]
  placeholder?: string
  compact?: boolean
}

export function CodeEditorView({ codeBlocks, placeholder = 'コードを選択してください...', compact = false }: CodeEditorViewProps) {
  return (
    <div className={compact ? 'codeEditor codeEditorCompact' : 'codeEditor'}>
      {codeBlocks.length === 0 && <div className="codePlaceholder">{placeholder}</div>}
      {codeBlocks.map((block, index) => (
        <div key={`${block}-${index}`} className="codeLine">
          <span className="lineNumber">{index + 1}</span>
          <code className="codeText">{block}</code>
        </div>
      ))}
    </div>
  )
}

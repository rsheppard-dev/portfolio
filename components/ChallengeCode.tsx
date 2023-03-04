import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import Code from '../interfaces/Code';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);

export default function ChallengeCode({ code }: { code: Code }) {
	return (
		<SyntaxHighlighter
			language={code.language}
			showLineNumbers={true}
			style={monokaiSublime}
		>
			{code.code}
		</SyntaxHighlighter>
	);
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextAPIProvider } from './Context/ContextAPI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ContextAPIProvider>
			<App />
		</ContextAPIProvider>
	</React.StrictMode>
)

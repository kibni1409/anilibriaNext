import { LoadingProvider } from '@/context/LoadingContext';
import { ErrorProvider } from '@/context/ErrorContext';
import '@/styles/globals.scss'
import '@/styles/ant-select.scss'
import '@/styles/antd-overrides.scss'
import '@/styles/pagination.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anime App',
  description: 'Anime streaming platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <ErrorProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ErrorProvider>
      </body>
    </html>
  )
}

import React from 'react'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout({children, navigation}) {
  return (
    <main>
        <Header navigation={navigation} />
          {children}
        <Footer />
    </main>
  )
}

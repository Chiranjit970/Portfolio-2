import React from 'react'
import { DataProvider } from './context'
import { DataTest } from './components'

function AppTest() {
  return (
    <DataProvider>
      <DataTest />
    </DataProvider>
  )
}

export default AppTest

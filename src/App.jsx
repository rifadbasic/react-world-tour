
import Countries from './components/Countries/Countries'
import './App.css'
import { Suspense } from 'react'


const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json())

function App() {

  return (
    <>
      
      <h1>Rifad real world tour.....</h1>

      <Suspense fallback={<div>Countries are loading...</div>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App

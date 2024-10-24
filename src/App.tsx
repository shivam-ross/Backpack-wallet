
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirstPage } from './pages/FirstPage'
import { WarningPage } from './pages/Warning'
import { ImportWallet } from './pages/ImportWallet'
import { useState } from 'react'
import { SecretPhrase } from './pages/SecretPhrase'
import { CreatePass } from './pages/CreatePass'

function App() {
  const [mnemonic, setMnemonic] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);


  
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/warning' element={<WarningPage setMnemonic={setMnemonic}/>}></Route>
        <Route path='/import-wallet'
         element={<ImportWallet mnemonic={mnemonic} setMnemonic={setMnemonic}/>}>
         </Route>
         <Route path='/secretphrase' element={<SecretPhrase mnemonic={mnemonic}/>}></Route>
         <Route path='/createpass' element={<CreatePass/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

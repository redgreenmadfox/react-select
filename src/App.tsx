import './App.css'
import { useState } from 'react';
import { Select, SelectOption } from './components/Select';

const options = [
  { label: "Account", value: 1 },
  { label: "Wallet", value: 2 },
  { label: "Bonuses", value: 3 },
  { label: "Bets", value: 4 },
  { label: "History", value: 5 },
]

function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0])
  return (
    <main>
      <Select options={options} value={value} onChange={o => setValue(o)} />
    </main>
  )
}

export default App

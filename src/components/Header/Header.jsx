import { FlameKindling } from "lucide-react"
import Logo from "../Logo/Logo"

function Header() {
  return (
    <header className='header'>
       <Logo size={50} />
        <h1>FireRadar - Wildfire Tracking</h1>
    </header>
  )
}

export default Header
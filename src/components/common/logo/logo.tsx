import { useAppState } from "../../../hooks/appHook";

interface props {
  logo: string
}

export function Logo({ logo }: props) {
  const { AppState } = useAppState();



  return (
    <a href="/" className={`logo ${AppState.theme ? 'theme-light-font' : 'theme-dark-font'} `}>{logo}</a>
  )
}


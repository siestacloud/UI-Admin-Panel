import { createContext, useState, useContext } from "react";
import { AppState as AS, DEF_APP_STATE } from '../models/stateApp';


export interface AppContext {
  AppState: AS; //* state приложения, содержит данные о boards, issues
  ShowMenu: (i: number) => void; //* ругулировка отображения поля ввода или submenu в зависимости от board title 
  Theme: () => void;
}

const AppStateContext = createContext<AppContext>(
  {
    AppState: DEF_APP_STATE,
    ShowMenu() { },
    Theme() { },
  }
);

export const useAppState = () => useContext(AppStateContext);
type Props = { children: JSX.Element }

export const AppStateContextProvider = ({ children }: Props) => {


  const [AppState, setAppCustomState] = useState(DEF_APP_STATE)

  const ShowMenu = (i: number): void => {
    AppState.menuSectionList.map((section, id) => {
      i === id ? section.enable = !section.enable : section.enable = false;
    })
    setAppCustomState({ ...AppState })
  }

  const Theme = (): void => {
    AppState.theme = !AppState.theme
    setAppCustomState({ ...AppState })
  }

  return (
    <AppStateContext.Provider value={{ AppState, ShowMenu,Theme }} >
      {children}
    </AppStateContext.Provider>
  )
}
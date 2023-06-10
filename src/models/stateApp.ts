

export interface AppState {
  theme: boolean
  menuSectionList: ControlMenuSection[]

}

export interface ControlMenuSection {
  sectionName:string
  enable: boolean
}


export const DEF_APP_STATE: AppState = {
  theme: true,
  menuSectionList: [
    { sectionName:"Меню", enable: false  },
    { sectionName:"Поиск", enable: false  },
    
    { sectionName:"Тема", enable: false  },
    { sectionName:"Профиль", enable: false },
  ]
}


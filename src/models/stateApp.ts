

export interface AppState {
  areaSectionList: ControlAreaSection[]

}

export interface ControlAreaSection {
  sectionName:string
  enable: boolean
  style: string
  uri: string
}


export const DEF_APP_STATE: AppState = {
  areaSectionList: [
    { sectionName:"Настройки",uri: "/area/settings", enable: true, style: "border-mod-one" },
    { sectionName:"Корзина",uri: "/area/bucket", enable: false, style: "border-mod-two" },
    { sectionName:"Избранное",uri: "/area/favorite", enable: false, style: "border-mod-three" }
  ]
}


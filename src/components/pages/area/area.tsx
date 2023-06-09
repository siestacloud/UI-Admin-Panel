import { useAppState } from "../../../hooks/appHook";
import { ControlAreaSection } from "../../../models/stateApp";
import { Nav } from "../../common/client/nav/nav";
import { Bucket } from "../../common/client/bucket/bucket";
import { Favorite } from "../../common/client/favorite/favorite";
import { Settings } from "../../common/client/settings/settings";
import { RowMenu } from "../../common/menu/menu";

export function Area({ uri }: ControlAreaSection) {

  return (
    <div className="area " >
      <div className="area__row m-box">
        <Nav />
      </div>
        {uri === "/area/settings" ? <Settings /> : <></>}
        {uri === "/area/bucket" ? <Bucket /> : <></>}
        {uri === "/area/favorite" ? <Favorite /> : <></>}
        <RowMenu />
    
    </div>
  );
}

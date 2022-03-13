import { IonIcon, IonButton } from "@ionic/react";

import { bookmarkOutline, chevronBack } from "ionicons/icons";
import { Link } from "react-router-dom";

interface NavbarDetailProps {}

const NavbarDetail: React.FC<NavbarDetailProps> = () => {
  return (
    <div className="fixed z-30">
      <div className="flex justify-between p-2 bg-zinc-900  w-screen">
        <Link to="/">
          <IonIcon
            className="text-3xl text-slate-200"
            icon={chevronBack}
          ></IonIcon>
        </Link>

        <IonIcon
          className="text-3xl text-slate-200"
          icon={bookmarkOutline}
        ></IonIcon>
      </div>
    </div>
  );
};

export default NavbarDetail;

import { IonIcon } from "@ionic/react";
import { menu, search } from "ionicons/icons";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex justify-between px-2 my-4">
      <IonIcon className="text-3xl text-slate-200" icon={menu}></IonIcon>
      <IonIcon className="text-3xl text-slate-200" icon={search}></IonIcon>
    </div>
  );
};

export default Navbar;

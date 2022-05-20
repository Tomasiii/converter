import * as MaterialIcons from "react-icons/md";

export type TypeMaterialIconName = keyof typeof MaterialIcons;

interface IProps {
  icon: TypeMaterialIconName;
}

const MaterialIcon = ({ icon }: IProps) => {
  const Icon = MaterialIcons[icon];
  return <Icon />;
};

export default MaterialIcon;

import { ReactNode, createContext, useContext, useState } from 'react';

const chairColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
];

const cushionColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
];

interface CustomizationContextProps {
  chairBodyMaterial: string;
  setChairBodyMaterial: (material: string) => void;
  cushonMaterial: string;
  setCushonMaterial: (material: string) => void;
  legs: number;
  setLegs: (material: number) => void;
  chairColors: { color: string; name: string }[];
  chairColor: string;
  setChairColor: (color: string) => void;
  cushionColors: { color: string; name: string }[];
  cushionColor: string;
  setCushionColor: (color: string) => void;
}

const CustomizationContext = createContext<
  CustomizationContextProps | undefined
>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [chairBodyMaterial, setChairBodyMaterial] = useState('armorLeather');
  const [cushonMaterial, setCushonMaterial] = useState('fabric031');
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[2].color);
  const [cushionColor, setCushionColor] = useState(cushionColors[5].color);

  return (
    <CustomizationContext.Provider
      value={{
        chairBodyMaterial,
        setChairBodyMaterial,
        cushonMaterial,
        setCushonMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error(
      'useCustomization must be used within a CustomizationProvider'
    );
  }
  return context;
};

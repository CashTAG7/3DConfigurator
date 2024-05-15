import { useState } from 'react';
import { useCustomization } from '../context/Customization';

export default function Configurator() {
  const [menuOpen, setMenuOpen] = useState(true);

  const {
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
  } = useCustomization();
  return (
    <>
      {menuOpen ? (
        <svg
          onClick={() => setMenuOpen(false)}
          className="block h-8 w-8 fill-current text-slate-200 cursor-pointer hover:text-slate-400 absolute z-[100000001] right-4 top-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      ) : (
        <svg
          onClick={() => setMenuOpen(true)}
          className="block h-8 w-8 fill-current text-slate-200 cursor-pointer hover:text-slate-400 absolute z-[100000001] right-4 top-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      )}

      <main
        className={`fixed top-0 bottom-0 mt-auto mb-auto h-fit overflow-y-auto max-h-full z-[100000001] bg-transparent text-slate-200 w-80 font-poppins transition-transform duration-300 ${
          menuOpen ? 'right-4 translate-x-0' : 'right-4 translate-x-96'
        }`}
      >
        <div className="font-semibold text-2xl mb-4">Comfortable Chair</div>
        <div className="text-sm font-normal mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          asperiores dolore sapiente animi, hic excepturi, in voluptatum earum
          ratione sequi enim.
        </div>
        <div className="mb-4">
          <div className="font-medium text-base mb-3">Body Material :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setChairBodyMaterial('armorLeather')}
              className={` bg-black cursor-pointer `}
            >
              <img
                className={`object-cover w-12 h-12 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  chairBodyMaterial === 'armorLeather'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/armorLeather/Material_1789.jpg"
                alt="armorLeatherImage"
              />
            </div>
            <div
              onClick={() => setChairBodyMaterial('paddedLeather')}
              className="bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-12 h-12 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  chairBodyMaterial === 'paddedLeather'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/paddedLeather/Material_1889.jpg"
                alt="paddedLeather"
              />
            </div>
            <div
              onClick={() => setChairBodyMaterial('roundedDiamondLeather')}
              className=" bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-12 h-12 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  chairBodyMaterial === 'roundedDiamondLeather'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/roundedDiamondLeather/Material_1710.jpg"
                alt="roundedDiamondLeather"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-base mb-3">
            Body Material Color :
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            {chairColors.map((colors, index) => (
              <div
                onClick={() => setChairColor(colors.color)}
                key={index}
                style={{ backgroundColor: colors.color }}
                className={`h-6 w-6 cursor-pointer  transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  chairColor === colors.color
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-base mb-3">Cushion Material :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setCushonMaterial('fabric031')}
              className="bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-12 transition-all h-12 hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  cushonMaterial === 'fabric031'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/fabric031/Material_1850.jpg"
                alt="fabric031"
              />
            </div>
            <div
              onClick={() => setCushonMaterial('fabric037')}
              className="bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-12 h-12 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  cushonMaterial === 'fabric037'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/fabric037/Material_1718.jpg"
                alt="fabric037"
              />
            </div>
            <div
              onClick={() => setCushonMaterial('fabricPadded')}
              className="bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-12 h-12 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  cushonMaterial === 'fabricPadded'
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
                src="./textures/fabricPadded/Material_2004.jpg"
                alt="fabricPadded"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-base mb-3">
            Cushion Material Color :
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            {cushionColors.map((colors, index) => (
              <div
                onClick={() => setCushionColor(colors.color)}
                key={index}
                style={{ backgroundColor: colors.color }}
                className={`h-6 w-6 cursor-pointer  transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  cushionColor === colors.color
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-base mb-3">Leg Type :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setLegs(1)}
              className={`cursor-pointer text-sm transition-all hover:font-semibold ${
                legs === 1 ? 'font-semibold' : ''
              } `}
            >
              Morden
            </div>
            <div
              onClick={() => setLegs(2)}
              className={`cursor-pointer text-sm transition-all hover:font-semibold ${
                legs === 2 ? 'font-semibold' : ''
              } `}
            >
              Classic
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import { useCustomization } from '../context/Customization';

export default function Configurator() {
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
      <main className="fixed right-4 top-0 bottom-0 mt-auto mb-auto h-fit z-[100000001] bg-transparent text-slate-200 w-96 font-poppins">
        <div className="font-semibold text-3xl mb-4">Comfortable Chair</div>
        <div className="text-lg font-normal mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          asperiores dolore sapiente animi, hic excepturi, in voluptatum earum
          ratione sequi enim.
        </div>
        <div className="mb-4">
          <div className="font-medium text-xl mb-3">Body Material :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setChairBodyMaterial('armorLeather')}
              className={`h-16 w-16 bg-black cursor-pointer `}
            >
              <img
                className={`object-cover w-16 h-16 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
              className="h-16 w-16 bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-16 h-16 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
              className="h-16 w-16 bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-16 h-16 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
          <div className="font-medium text-xl mb-3">Body Material Color :</div>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            {chairColors.map((colors, index) => (
              <div
                onClick={() => setChairColor(colors.color)}
                key={index}
                style={{ backgroundColor: colors.color }}
                className={`h-9 w-9 cursor-pointer  transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  chairColor === colors.color
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-xl mb-3">Cushion Material :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setCushonMaterial('fabric031')}
              className="h-16 w-16 bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-16 transition-all h-16 hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
              className="h-16 w-16 bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-16 h-16 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
              className="h-16 w-16 bg-black cursor-pointer"
            >
              <img
                className={`object-cover w-16 h-16 transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
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
          <div className="font-medium text-xl mb-3">
            Cushion Material Color :
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            {cushionColors.map((colors, index) => (
              <div
                onClick={() => setCushionColor(colors.color)}
                key={index}
                style={{ backgroundColor: colors.color }}
                className={`h-9 w-9 cursor-pointer  transition-all hover:border-2 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200 ${
                  cushionColor === colors.color
                    ? 'border-2 border-slate-200 shadow-lg shadow-slate-200'
                    : ''
                } `}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-xl mb-3">Leg Type :</div>
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => setLegs(1)}
              className={`cursor-pointer transition-all hover:font-extrabold ${
                legs === 1 ? 'font-extrabold' : ''
              } `}
            >
              Morden
            </div>
            <div
              onClick={() => setLegs(2)}
              className={`cursor-pointer transition-all hover:font-extrabold ${
                legs === 2 ? 'font-extrabold' : ''
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

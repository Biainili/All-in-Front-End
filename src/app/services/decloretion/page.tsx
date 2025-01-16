import ContactForm from "./components/ContactForm";
import Image from "next/image";

export default function Decloretion() {
  return (
    <div>
      <div className="min-h-screen bg-gray-200 py-10">
        <h1 className="text-3xl font-bold text-indigo-500 mb-16 text-center custom_showld">
          Ծառայությունների Փաթեթներ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-10">
          {/* plan 1 */}
          <div className="bg-white p-8 shadow-custom-notary rounded-lg flex flex-col  w-full max-w-md gap-2 justify-between">
            <h3 className="text-xl font-bold mb-4 text-indigo-500 ">
              Փաթեթ 1: &quot;Սկսնակ&quot;
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              Հարմար է ֆիզիկական անձանց կամ փոքր բիզնեսների համար, ովքեր
              հայտարարագրում են միայն իրենց եկամուտները:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm">
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Եկամուտների հաշվետվության կազմում
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Հարկային հաշիվների ճշգրտում
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Հարկային հայտարարագրի ձևակերպում և ներկայացում
              </li>
            </ul>
            <p className="text-lg font-bold mb-4">Արժեք: 15,000 դրամ</p>
            <button className="px-6 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600">
              Գրանցվել
            </button>
          </div>
          {/* plan 2 */}
          <div className="bg-white p-8 shadow-custom-notary rounded-lg flex flex-col w-full max-w-md gap-2 justify-between">
            <h3 className="text-xl font-bold mb-4 text-indigo-500 ">
              Փաթեթ 2: &quot;Պրոֆեսիոնալ&quot;
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              Նպատակահարմար է փոքր և միջին բիզնեսների համար:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm">
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Ամբողջական հաշվետվության պատրաստում
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Եկամուտների և ծախսերի վերլուծություն
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Հարկային արտոնությունների ստուգում
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Պարտավորությունների հայտարարագրում
              </li>
            </ul>
            <p className="text-lg font-bold">Արժեք: 30,000 դրամ</p>
            <button className="px-6 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600">
              Գրանցվել
            </button>
          </div>
          {/* plan 3 */}
          <div className="bg-white p-8 shadow-custom-notary rounded-lg flex flex-col w-full max-w-md gap-2 justify-between">
            <h3 className="text-xl font-bold mb-4 text-indigo-500 ">
              Փաթեթ 3: &quot;Կորպորատիվ&quot;
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              Մեծ բիզնեսների և կազմակերպությունների համար:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm">
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Բիզնեսի ֆինանսական ամբողջական հաշվետվության պատրաստում
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Հարկային ռազմավարության մշակման աջակցություն
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Ֆինանսական խորհրդատվություն
              </li>
              <li className="flex items-start mb-2 before:content-['✔'] before:text-indigo-500 before:mr-2">
                Ակտիվների և պարտավորությունների կառավարման հայտարարագրում
              </li>
            </ul>
            <p className="text-lg font-bold">Արժեք: 50,000 դրամ</p>
            <button className="px-6 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600">
              Գրանցվել
            </button>
          </div>
        </div>
      </div>

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <Image
                  className=" rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <Image
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center mb-6 custom_showld">
                    Ինչու՞ Ընտրել Մեզ
                  </h2>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <strong className="mb-4 text-indigo-500 text-lg">
                        Մասնագիտական փորձ:
                      </strong>
                      <br />
                      Մեր թիմն ունի բազմամյա փորձ հարկային ոլորտում:
                    </li>
                    <li>
                      <strong className="mb-4 text-indigo-500 text-lg">
                        Անհատական մոտեցում:
                      </strong>
                      <br />
                      Յուրաքանչյուր հաճախորդի առաջարկում ենք անհատական
                      լուծումներ:
                    </li>
                    <li>
                      <strong className="mb-4 text-indigo-500 text-lg">
                        Արագ և վստահելի սպասարկում:{" "}
                      </strong>
                      <br />
                      Ձեր հայտարարագրումը կկատարվի սեղմ ժամկետներում:
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-indigo-500 text-5xl font-bold font-manrope leading-normal custom_showld">
                      33+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Տարիների փորձ
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-indigo-500 text-5xl font-bold font-manrope leading-normal custom_showld">
                      125+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Հաջողված նախագծեր
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-indigo-500 text-5xl font-bold font-manrope leading-normal custom_showld">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Երջանիկ հաճախորդներ
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

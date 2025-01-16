export default function DecloretionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gray-100">
      <div className="pt-40 max-w-full mx-auto bg-white shadow-md p-6 custom_header notary_bg_hero mb-2">
        <h1 className="text-3xl font-bold text-gray-200 mb-12 text-center">
          Հայտարարագրում
        </h1>
        <div className="list-decimal list-inside text-gray-100 space-y-4 px-10 mb-16 text-lg text-center">
          <p className="text-xl">
            <strong> Հայտարարագրում</strong> - գործընթաց է, որի միջոցով
            ընկերությունները կամ անձինք հայտարարագրում են իրենց եկամուտները,
            ծախսերը, ակտիվները և պարտավորությունները հարկային մարմիններին:
            Հայտարարագրումը կարևոր է հարկային պարտավորությունների ճշգրիտ
            հաշվարկի և օրենսդրությանը համապատասխան գործունեության համար: Այն
            կարող է իրականացվել ինչպես ձեռքով, այնպես էլ թվային գործիքների
            միջոցով:
          </p>
        </div>
        <h1 className="text-3xl font-bold text-gray-200 mb-12 text-center">
          Ծառայության Գործընթաց
        </h1>
        <div className="flex justify-center">
          <ol className="text-gray-100 grid grid-cols-2 gap-x-8 gap-y-8 px-10 justify-center">
            <li className="text-center">
              <strong className="mb-4 text-xl">Կոնսուլտացիա</strong>
              <br />
              Նախապես հանդիպում կամ զանգ, որի ընթացքում վերլուծվում են ձեր
              կարիքները:
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">Հաշվետվության պատրաստում</strong>
              <br />
              Ձեր տվյալների հիման վրա պատրաստում ենք հայտարարագիրը:
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">Հայտարարագրի ներկայացում</strong>
              <br />
              Հայտարարագիրը ներկայացվում է հարկային մարմիններին ձեր անունից:
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">Տվյալների հավաքագրում</strong>
              <br />
              Անհրաժեշտ բոլոր փաստաթղթերի և տեղեկատվության տրամադրում մեր
              մասնագետներին:
            </li>
          </ol>
        </div>
      </div>
      <main className="p-1">{children}</main>
    </div>
  );
}

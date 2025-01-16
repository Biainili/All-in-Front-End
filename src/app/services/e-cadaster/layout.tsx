import Image from "next/image";
export default function CadasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gray-100">
      <div className="pt-40 max-w-full mx-auto bg-white shadow-md p-6 custom_header notary_bg_hero mb-2">
        <h1 className="text-3xl font-bold text-gray-200 mb-12 text-center">
          Կադաստրի ծառայություններ մեր պլատֆորմի միջոցով
        </h1>
        <div className="list-decimal list-inside text-gray-100 space-y-4 px-10 mb-16 text-lg text-center">
          <p className="text-xl">
            <strong>
              Մեր հարթակը տրամադրում է հնարավորություն՝ կադաստրի ոլորտում
              անհրաժեշտ փաստաթղթերը և ծառայությունները ստանալու արագ ու հարմար
              եղանակով։
            </strong>
          </p>
        </div>
        <h1 className="text-3xl font-bold text-gray-200 mb-12 text-center">
          💡 Ինչ կարող եք ստանալ մեր հարթակի միջոցով
        </h1>
        <div className="flex justify-center">
          <ol className="text-gray-100 grid grid-cols-2 gap-x-8 gap-y-8 px-10 justify-center">
            <li className="text-center">
              <strong className="mb-4 text-xl">Փաստաթղտերի դիմում</strong>
              <br />
              Պատվիրեք և ստացեք կադաստրի փաստաթղթերի պատրաստման և ներկայացման
              ծառայություն՝ առանց ավելորդ ժամանակի կորստի։ Օրինակ՝ գույքի
              գույքագրում, սեփականության իրավունքի գրանցում կամ փոփոխություններ
              գրանցում:
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">Միասնական տեղեկանք</strong>
              <br />
              Ստացեք տեղեկանքներ սեփականության իրավունքների վերաբերյալ՝ կարճ
              ժամկետներում։ Այս ծառայությունը ներառում է տեղեկանքներ գույքի
              սեփականատիրոջ, չափերի կամ իրավունքի տեսակի մասին։
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">
                Տեղեկատվության տրամադրում
              </strong>
              <br />
              Պահանջեք անհրաժեշտ տեղեկություններ՝ կապված կադաստրի տվյալների հետ,
              և ստացեք դրանք անմիջապես օնլայն։ Օրինակ՝ հողատարածքների կամ
              շինությունների վիճակի վերաբերյալ տեղեկություններ։
            </li>
            <li className="text-center">
              <strong className="mb-4 text-xl">Պետական գրանցում</strong>
              <br />
              Գրանցեք Ձեր գույքը կամ տարածքը մեր պլատֆորմի միջոցով՝ առանց
              հերթերի և բարդությունների։ Օրինակ՝ անշարժ գույքի կամ
              հողատարածքների պետական գրանցում։
            </li>
          </ol>
        </div>
      </div>
      <main className="p-1">{children}</main>
      <section className="py-24 relative px-20">
        <div className="w-full max-w-10xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center mb-10 custom_showld">
                  Ինչու ընտրել մեզ
                </h2>
                <p className="text-gray-500 text-lg  font-normal leading-relaxed lg:text-start text-center mb-5">
                  <span className="text-indigo-500 text-xl font-bold">
                    Արագ գործընթաց:
                  </span>
                  <br />
                  Մեր հարթակը թույլ է տալիս ստանալ փաստաթղթերը կամ գրանցումները
                  կարճ ժամկետներում։
                </p>
                <p className="text-gray-500 text-lg   font-normal leading-relaxed lg:text-start text-center mb-5">
                  <span className="text-indigo-500 text-xl font-bold">
                    Հարմարավետություն:
                  </span>
                  <br />
                  Բոլոր գործողությունները կարող եք իրականացնել Ձեր համակարգչից
                  կամ հեռախոսից։
                </p>
                <p className="text-gray-500 text-lg  font-normal leading-relaxed lg:text-start text-center mb-5">
                  <span className="text-indigo-500 text-xl font-bold">
                    Օնլայն աջակցություն:
                  </span>
                  <br />
                  Մեր թիմը պատրաստ է աջակցել Ձեզ ցանկացած հարցի դեպքում։
                </p>
              </div>
            </div>

            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover justify-self-end"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="About Us image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

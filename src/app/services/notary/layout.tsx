export default function NotaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gray-100">
      <div className="pt-40 max-w-full mx-auto bg-white shadow-md p-6 custom_header notary_bg_hero mb-2">
        <h1 className="text-3xl font-bold text-gray-200 mb-8 text-center">
          Ինչպես է աշխատում մեր նոտարական ծառայությունը?
        </h1>
        <ol className="list-decimal list-inside text-gray-100 space-y-4 px-10">
          <li>
            <strong>Ծառայության և ժամանակի ընտրություն:</strong> Կայքում ընտրեք
            քաղաքը, անհրաժեշտ նոտարական ծառայությունը և մոտակա նոտարական կետը։
            Ընտրեք հարմար օրը և ժամը (վաղը, վաղվաղն կամ երեք օրից)։
          </li>
          <li>
            <strong>Փաստաթղթերի բեռնում:</strong> Բեռնեք բոլոր էջերը այն
            փաստաթղթերի, որոնք անհրաժեշտ է հաստատել։ Դա կարևոր է ծառայության
            պատշաճ պատրաստման համար։
          </li>
          <li>
            <strong>Տվյալների լրացում և վճարում:</strong> Լրացրեք ձեր տվյալները
            և կատարեք վճարումը։
          </li>
          <li>
            <strong>Գրանցման հաստատում:</strong> Մեկ ժամվա ընթացքում դուք
            կստանաք հաստատման նամակ նշված ժամանակի և նոտարի հասցեի մասին։
          </li>
          <li>
            <strong>Նոտարի այցելություն:</strong> Նշված ժամանակին այցելեք
            նոտարին ձեր փաստաթղթերի բնօրինակներով։ Բոլորը նախապես պատրաստ կլինի
            ձեր այցի համար։
          </li>
        </ol>
      </div>

      <main className="p-1">{children}</main>
    </div>
  );
}

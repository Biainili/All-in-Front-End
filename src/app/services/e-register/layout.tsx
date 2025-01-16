export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gray-100">
      <div className="pt-40 max-w-full mx-auto bg-white shadow-md p-6 custom_header notary_bg_hero mb-2">
        <h1 className="text-3xl font-bold text-gray-200 mb-12 text-center">
          Հայաստանում ընկերության գրանցման ծառայություններ
        </h1>
        <div className="text-gray-100 space-y-4 px-10 mb-16 text-lg text-center flex flex-col items-center">
          <p className="text-xl mb-10">
            Մենք առաջարկում ենք ընկերությունների գրանցման ամբողջական
            ծառայություններ Հայաստանում՝ հետևյալ իրավաբանական ձևերով
          </p>
          <ul className="grid grid-cols-2 gap-10 mb-10 items-center">
            <li className="p-4 bg-white text-gray-900 custom_showld rounded-lg shadow-custom-register for_animation">
              Անհատ ձեռնարկատեր <strong>(ԱՁ)</strong>
            </li>
            <li className="p-4 bg-white text-gray-900 custom_showld rounded-lg shadow-custom-register for_animation">
              Սահմանափակ պատասխանատվությամբ ընկերություն <strong>(ՍՊԸ)</strong>
            </li>
            <li className="p-4 bg-white text-gray-900 custom_showld rounded-lg shadow-custom-register for_animation">
              Փակ բաժնետիրական ընկերություն <strong>(ՓԲԸ)</strong>
            </li>
            <li className="p-4 bg-white text-gray-900 custom_showld rounded-lg shadow-custom-register for_animation">
              Բաց բաժնետիրական ընկերություն <strong>(ԲԲԸ)</strong>
            </li>
          </ul>
        </div>
      </div>
      <main className="p-1">{children}</main>
    </div>
  );
}

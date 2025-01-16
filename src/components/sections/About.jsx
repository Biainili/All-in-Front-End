

import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 mt-16 mb-16" id="about-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4 custom_showld">Մեր Մասին</h1>
          <p className="text-lg text-gray-200 custom_showld">
            Թվային լուծումների հարթակ բիզնեսի և իրավաբանական ծառայությունների համար
          </p>
        </div>

        {/* Первый блок */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <div className="w-full">
            <Image
              src="/img/about-allin-yerevan.jpg" // Путь к изображению
              alt="Business Services"
              width={600}
              height={420}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-lg font-semibold text-indigo-600 uppercase mb-2">Մեր Առաքելությունը</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Բիզնեսի և իրավաբանական գործընթացների թվայնացում</h3>
            <p className="text-gray-600 mb-4">
              Մեր հարթակը հնարավորություն է տալիս թվայնացնել բիզնեսի և իրավաբանական գործընթացները՝ խնայելով ժամանակ
              և միջոցներ։ Օրինակ՝ մեր միջոցով կարող եք ուղարկել հայտ նոտարիուսին և այցելել միայն հաստատման
              համար, բացել ընկերություն առանց տնից դուրս գալու կամ ստանալ տարբեր վկայականներ օնլայն՝ առանց ավելորդ
              ժամանակ վատնելու։
            </p>
            <a href="#" className="text-indigo-600 font-semibold hover:underline">Կարդալ ավելին</a>
          </div>
        </div>

        {/* Второй блок */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
          <div className="bg-white rounded-xl shadow-md p-8 order-2 lg:order-1">
            <h2 className="text-lg font-semibold text-indigo-600 uppercase mb-2">Մեր Արժեքները</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Թվային և գործընկերային ծառայություններ</h3>
            <p className="text-gray-600 mb-4">
              Մենք առաջարկում ենք ինչպես թվային, այնպես էլ գործընկերային ծառայություններ՝ ներառյալ՝
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li><strong>Թվային ծառայություններ:</strong> Կայքերի և հավելվածների մշակում</li>
              <li><strong>Ֆինանսական և իրավաբանական ծառայություններ:</strong> Կոմպլեքս լուծումներ</li>
              <li><strong>Հաշվապահական ծառայություններ:</strong> Ձեր բիզնեսի հաշվապահական կառավարում</li>
              <li><strong>ՀՀ Միգրացիա:</strong> Իրավական աջակցություն և խորհրդատվություն</li>
            </ul>
            <a href="#" className="text-indigo-600 font-semibold hover:underline">Կարդալ ավելին</a>
          </div>
          <div className="w-full order-1 lg:order-2">
            <Image
              src="/img/about-allin-yerevan-evn.jpg" // Путь к изображению
              alt="Our Values"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-10 gap-5">
        {/* Логотип и название */}
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-lg font-bold">P</span>
          </div>
          <span className="text-xl font-bold">Allin</span>
        </div>

        {/* Меню */}
        <ul className="flex md:flex-row flex-col md:space-x-6 space-y-4 mt-4 md:mt-0">
          <li className="md:self-end">
            <Link href="/" className="hover:text-purple-500">
              Գլխավոր էջ
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-purple-500">
              Արտադրանք
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-purple-500">
              Ռեսուրսներ
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-purple-500">
              Բլոգ
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-purple-500">
              Աջակցություն
            </Link>
          </li>
        </ul>

        {/* Кнопка Телеграм */}
        <div className="mt-4 md:mt-0">
          <a
            href="https://t.me/your_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
          >
            Մեր Telegram-ալիքը
          </a>
        </div>
      </div>

      {/* Подвал */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © Allin 2024, Բոլոր իրավունքները պաշտպանված են։
      </div>
    </footer>
  );
}

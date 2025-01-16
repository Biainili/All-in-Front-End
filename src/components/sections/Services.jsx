import ServiceCard from "../ServiceCard";
import services from "../../constants/data/services";

export default function Services() {
  return (
    <section className="mt-16 text-black px-10 mb-16" id="digital-services">
      <h1 className="text-3xl text-center font-bold text-gray-100 leading-[3.25rem] mb-5 lg:text-left custom_showld">
        Թվային ծառայություններ
      </h1>
      <div className="flex flex-wrap justify-center mt-10 gap-5 ">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

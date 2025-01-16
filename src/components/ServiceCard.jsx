// components/ServiceCard.js
import Link from "next/link";

function ServiceCard({ id, image, title, description }) {
  return (
    <Link href={`/services/${id}`}>
      <div
        className="card bg-white"
        style={{ width: "20rem", cursor: "pointer", margin: "10px" }}
      >
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="mb-2 text-xl font-bold text-indigo-500">{title}</h5>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;

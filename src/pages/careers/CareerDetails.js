import { useParams, useLoaderData } from "react-router-dom";
export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Stateing salary: {career.salary}</p>
      <p>Location: {career.location}</p>

      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sequi
          blanditiis molestiae! Quasi consectetur voluptates hic fugiat modi
          iure neque soluta corporis cumque. Ratione voluptatem quidem omnis qui
          impedit! Ab amet est nihil maxime necessitatibus atque non ullam
          nostrum nemo. Ad consequatur repudiandae omnis quia sint totam
          accusamus facere numquam!
        </p>
      </div>
    </div>
  );
}

export const careerDetailsloader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error("Could not find that career!");
  }

  return res.json();
};

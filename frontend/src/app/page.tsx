import Image from 'next/image';

type Project = {
  id: string;
  attributes: {
    Title: string;
    Content: any;
    ProjectImage: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
};

type Props = {
  projects: Project[];
};

export default async function Home() {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=*`,
    options,
  );
  const { data: projects } = (await response.json()) as { data: Project[] };
  // console.log(projects);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      {projects.map((project) => (
        <div
          className="bg-gray-900 shadow-md p-8 rounded-lg mb-10 flex"
          key={project.id}
        >
          <div className="flex-shrink-0 mr-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_ORIGIN}${project.attributes.ProjectImage.data[0].attributes.url}`}
              alt="Sample image"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {project.attributes.Title}
            </h2>
            <p className="text-gray-300 mb-4">
              {project.attributes.Content[0].children[0].text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* <pre>{JSON.stringify(projects, null, 2)}</pre>
      {projects.forEach((project) => {
        console.log(
          'project',
          project.attributes.ProjectImage.data[0].attributes.url,
        );
      })} */
}

import React from 'react';
import strapi_fetch from '@/util/strapi_fetch';
import { GetStaticProps } from 'next';
import { Project } from '@/util/types';
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

// export default function Page({ params }: { params: { id: string } }) {
//   const projects = await strapi_fetch('projects?id=' + params.id);
//   return <div>My Post: {params.id}</div>;
// }

// export async function generateStaticParams({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // const posts = await fetch('https://.../posts').then((res) => res.json());
//   const projects = await strapi_fetch('projects?id=' + params.id);
//   return {
//     props: {
//       projects,
//     },
//   };
// }

// Return a list of params to populate the [slug] dynamic segment

export default function Page({ params: { id } }: Params) {
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

export async function generateStaticParams({
  params,
}: {
  params: { id: string };
}) {
  const projects = await strapi_fetch('projects?id=' + params.id);
  return {
    paths: projects.map((project) => ({
      params: { id: project.id },
    })),
    fallback: false,
  };
}

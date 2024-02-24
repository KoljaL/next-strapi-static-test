// make an example menu component
import React from 'react';
import Link from 'next/link';
import strapi_fetch from '@/util/strapi_fetch';

export default async function Menu() {
  // const data = await strapi_fetch('project?populate=*');
  // const links = await data;
  // console.log('Links:', links);
  const link = await strapi_fetch('projects?populate=*');
  return (
    // <div>
    //   <Link href="/">Home</Link>
    //   <Link href="/about">About</Link>
    //   <Link href="/contact">Contact</Link>
    // </div>
    <nav>
      <ul classname="flex flex-row">
        {link.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              {project.attributes.Title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

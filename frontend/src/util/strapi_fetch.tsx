export default async function strapi_fetch(slug: string) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
  console.log('\n\n\n FETCH \n\nslug:', slug);
  console.log('options:', options);
  console.log(
    'process.env.NEXT_PUBLIC_STRAPI_API_URL:',
    process.env.NEXT_PUBLIC_STRAPI_API_URL,
  );

  const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${slug}`;
  // console.log('URL:', URL);
  const response = await fetch(URL, options);
  // console.log('response:', response);
  const { data: projects } = (await response.json()) as { data: Project[] };
  console.log('projects:', projects);
  return projects;
}

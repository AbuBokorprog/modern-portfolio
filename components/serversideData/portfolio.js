'use server';
export async function getAbout() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/about',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}

export async function getSkills() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/skills',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}

export async function getProjects() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/projects',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}
export async function getSingleProjects(id) {
  const result = await fetch(
    `https://portfolio-server-delta-nine.vercel.app/api/projects/${id}`,
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}
export async function getBlogs() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/blogs',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}
export async function getSingleBlogs(id) {
  const result = await fetch(
    `https://portfolio-server-delta-nine.vercel.app/api/blogs/${id}`,
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}
export async function getEducation() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/education',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}
export async function getExperience() {
  const result = await fetch(
    'https://portfolio-server-delta-nine.vercel.app/api/experience',
    { cache: 'no-cache' }
  );
  if (!result.ok) {
    console.log('Error');
  }

  return result.json();
}

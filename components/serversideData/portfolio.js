"use server";
export async function getAbout() {
  const result = await fetch(
    "https://portfolio-backend-seven-kappa.vercel.app/api/about"
  );
  if (!result.ok) {
    console.log("Error");
  }

  return result.json();
}

export async function getSkills() {
  const result = await fetch(
    "https://portfolio-backend-seven-kappa.vercel.app/api/skills"
  );
  if (!result.ok) {
    console.log("Error");
  }

  return result.json();
}

export async function getProjects() {
  const result = await fetch(
    "https://portfolio-backend-seven-kappa.vercel.app/api/projects"
  );
  if (!result.ok) {
    console.log("Error");
  }

  return result.json();
}
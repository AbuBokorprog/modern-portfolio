"use server";
export async function getAbout() {
  const result = await fetch("http://localhost:5000/api/about");
  if (!result.ok) {
    error("Error");
  }

  return result.json();
}

export async function getSkills() {
  const result = await fetch("http://localhost:5000/api/skills");
  if (!result.ok) {
    error("Error");
  }

  return result.json();
}

export async function getProjects() {
  const result = await fetch("http://localhost:5000/api/projects");
  if (!result.ok) {
    error("Error");
  }

  return result.json();
}

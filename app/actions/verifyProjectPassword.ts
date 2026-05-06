"use server";

export async function verifyProjectPassword(
  projectId: number,
  password: string
): Promise<boolean> {
  const envKey = `PROJECT_PASSWORD_${projectId}`;
  const expected = process.env[envKey];

  if (!expected) return false;

  return password === expected;
}

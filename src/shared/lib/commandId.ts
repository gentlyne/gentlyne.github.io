export const generateCommandId = async (email: string): Promise<string> => {
  const normalizedEmail = email.trim().toLowerCase();

  const encoder = new TextEncoder();
  const data = encoder.encode(normalizedEmail);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

  return hashHex.slice(0, 24);
};

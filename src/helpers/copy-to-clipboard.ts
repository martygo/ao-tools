export async function CopyToClipboard(text: string): Promise<boolean> {
  let copySuccess = false;

  try {
    await navigator.clipboard.writeText(text);
    copySuccess = true;
  } catch (error) {
    console.error("Failed to copy:", error);
  }

  return copySuccess;
}

export const sendMessageToWebhook = async (text, sessionId) => {
  try {
    const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        sender: "Daffa",
        sessionId: sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const textResponse = await response.text();
    if (!textResponse) {
      throw new Error("Server tidak mengirim balasan.");
    }

    return textResponse.trim();
  } catch (error) {
    console.error("Error in sendMessageToWebhook:", error);
    throw error;
  }
};
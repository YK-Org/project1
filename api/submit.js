// api/submit.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzD9S-YYUDVyV83DocC9SVbzDGH614mr19Ys7EiGpHSA2DHb4-WnyIY_jxL9G1Pq8lJ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Google Script Error:", err);
    res.status(500).json({ error: "Failed to submit data" });
  }
}

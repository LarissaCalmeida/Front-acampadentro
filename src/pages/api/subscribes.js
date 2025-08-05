import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("inscricoes");

  if (req.method === "GET") {
    const data = await collection.find().toArray();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const body = req.body;
    const result = await collection.insertOne(body);
    res
      .status(201)
      .json({ message: "Inscrição criada", id: result.insertedId });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import { OpenAI } from "openai";
import { initialPrompt } from "@/utils/constants";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "", // Handle potential undefined
});

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(req: Request) {
  const body = await req.json();
  const { userMessage } = body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: initialPrompt },
        { role: "user", content: userMessage as string }, // Type assertion
      ],
    });

    return Response.json(response.choices[0].message);
  } catch (error: any) {
    // Use any or a more specific error type if known
    console.error(error);
    return Response.error();
  }
}

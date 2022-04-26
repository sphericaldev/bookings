import type { NextApiRequest, NextApiResponse } from "next";

import findValidApiKey from "@calcom/ee/lib/api/findValidApiKey";
import prisma from "@calcom/prisma";
import { ApiKeyType } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = req.query.apiKey as string;

  if (!apiKey) {
    return res.status(401).json({ message: "No API key provided" });
  }

  const validKey = await findValidApiKey(apiKey, ApiKeyType.ZAPIER);

  if (!validKey) {
    return res.status(401).json({ message: "API key not valid" });
  }

  const id = req.query.id as string;

  if (req.method === "DELETE") {
    await prisma.webhook.delete({
      where: {
        id,
      },
    });
    res.status(204).json({ message: "Subscription is deleted." });
  }
}

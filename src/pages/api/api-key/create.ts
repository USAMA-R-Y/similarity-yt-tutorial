// creating api key for user (backend)

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { nanoid } from "nanoid";
import z from "zod";

// components
import { CreateApiData } from "@/types/api/index";
import { withMethods } from "@/lib/api-middlewares/with-methods";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CreateApiData>
) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (res) => res?.user
    );

    // if not any user
    if (!user) {
      return res.status(401).json({
        error: "Unauthorized to perform this action",
        createdApiKey: null,
      });
    }

    // if any user
    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user?.id, enabled: true },
    });
    if (existingApiKey) {
      return res.status(400).json({
        error: "You already have a valid API key",
        createdApiKey: null,
      });
    }

    // if don't have any api key then create one
    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.id,
        key: nanoid(),
      },
    });

    // return the api key
    return res.status(200).json({
      error: "",
      createdApiKey,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: error.issues,
        createdApiKey: null,
      });
    }

    // if not zod error then pass a generic error
    return res.status(500).json({
      error: "Internal Server Error",
      createdApiKey: null,
    });
  }
};

export default withMethods(["GET"], handler);

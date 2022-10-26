// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const mockendDirectory = path.join(process.cwd(), "data");

    const mokenData = await fs.readFile(mockendDirectory + "/projects.json", "utf8");

    const projects = JSON.parse(mokenData);

    res.status(200).json(
        projects
    )


}

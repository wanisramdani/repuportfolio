// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from "puppeteer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    try{
        let { url } = req.query;

        let image:any = await getImageBase64(url);

        res.status(200).json({
            image,
        });

    } catch (error) {
        res.status(500).json({ 
            error: JSON.stringify(error),
         })
    }
    
}

let getImageBase64 = async (url :any) => {
    let cachedImage = await getCachedImage(url);
    if (cachedImage) return cachedImage;
  
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    let image = await page.screenshot({ encoding: "base64" });
    await browser.close();
  
    await cacheImage(url, image);
  
    return image;
}

let getCachedImage = async (url :any) => { 
    let projectImagePreview  = await prisma.projectImagePreview.findUnique({ 
        where: { url },
     })
     return projectImagePreview?.image;
}

let cacheImage = async (url:any, image:any) => {
    await prisma.projectImagePreview.create({ data: { url, image } });
};
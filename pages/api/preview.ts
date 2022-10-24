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
            error,
         })
    }
    
}

let getImageBase64 = async (url :any) => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    let image = await page.screenshot({ encoding: "base64" });
    await browser.close();
    return image;
}

let getCachedImage = async (url :any) => { 
    let { image } = await prisma.image.findUnique({ 
        where: { url },
     })
     return image;
}

let cacheImage =async (url: any, image:any) => {
    await prisma.image.create({
        data: {
            url, image
        }
    })
}
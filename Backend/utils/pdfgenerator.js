import puppeteer from "puppeteer";

const generatePDF = async (templateHTML) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(templateHTML);

  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  return pdf;
};

export default generatePDF;

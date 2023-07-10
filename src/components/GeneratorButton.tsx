import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";
import certificatePath from "../assets/premio_abric_incentivo_ciencia.pdf";

interface GeneratorButtonProps {
  selectedProject: Project;
}

export const GeneratorButton = (props: GeneratorButtonProps) => {
  const { selectedProject } = props;
  const wrapText = (
    text: string,
    width: number,
    font: PDFFont,
    fontSize: number
  ) => {
    const words = text.split(" ");
    let line = "";
    let result = "";
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > width) {
        result += line + "\n";
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    result += line;
    return result;
  };

  const splitParagraphs = (
    text: string,
    width: number,
    font: PDFFont,
    fontSize: number
  ) => {
    const wrapedText = wrapText(text, width, font, fontSize);
    const paragraphs = wrapedText.split("\n");

    paragraphs.length * font.heightAtSize(fontSize);

    return paragraphs;
  };

  const downloadCertificate = async () => {
    const certificateTemplate = await fetch(certificatePath).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(certificateTemplate);
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width } = firstPage.getSize();

    const color = rgb(0.208, 0.635, 0.271);

    const studentFontSize = 20;
    const studentName = selectedProject.authors[0].name;
    const studentBoxWidth = font.widthOfTextAtSize(
      studentName,
      studentFontSize
    );
    const studentBoxHeight = font.heightAtSize(studentFontSize);

    firstPage.drawText(studentName, {
      y: 265 - studentBoxHeight,
      size: studentFontSize,
      font,
      x: width / 2 - studentBoxWidth / 2,
      color,
    });

    const projectTitleFontSize = 18;
    const projectTitle = selectedProject.title;

    const projectTitleBoxHeight = font.heightAtSize(projectTitleFontSize);

    // Precisa estar dentro de um loop que calcula os paragrafos como no wrapText. Para cada paragrafo, pega o firstPage.drawText colocando aquele parágrafo alterando o parametro y para -projectTitleBoxHeight, e x para (width/2 - currentParagraphWidth / 2}), assim centralizando a linha
    const paragraphs = splitParagraphs(
      projectTitle,
      520,
      font,
      projectTitleFontSize
    );
    // mudar a centralização de altura, baseada no numero de linhas. caso exceda o numero de 3 linhas, recalcular o fontSize para que caiba
    paragraphs.forEach((paragraph, index) => {
      // console.log(paragraph);
      const paragraphBoxWidth = font.widthOfTextAtSize(
        paragraph,
        projectTitleFontSize
      );
      // console.log(paragraphBoxWidth);

      firstPage.drawText(paragraph, {
        y: 195 - index * projectTitleBoxHeight,
        size: projectTitleFontSize,
        font,
        x: width / 2 - paragraphBoxWidth / 2,
        color,
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <button
      className="bg-primary py-2 text-white font-bold mt-4"
      onClick={downloadCertificate}
    >
      BAIXAR CERTIFICADO
    </button>
  );
};

import { ReadXMLInterface } from "./readXML.interface";

export class ReadXML implements ReadXMLInterface {
  readXML(): void {
    console.log("READING XML...");
  }
  updateXML(): string {
    return "XML Updated";
  }
}

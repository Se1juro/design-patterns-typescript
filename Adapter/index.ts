import { AdapterXMLToJson } from "./adapter";
import { ReadXML } from "./readXML.implementation";

const readXML = new ReadXML();

const adapterXML = new AdapterXMLToJson(readXML);

adapterXML.readJson();
console.log(adapterXML.updateJson());

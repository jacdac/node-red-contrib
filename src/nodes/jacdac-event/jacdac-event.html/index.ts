import { EditorRED } from "node-red";
import { JacdacEventEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<JacdacEventEditorNodeProperties>("jacdac-event", {
  category: "function",
  color: "#DEBD5C",
  defaults: {
    name: { value: "" },
    device: { value: "" },
    service: { value: "" },
    event: { value: "" },
  },
  inputs: 0,
  outputs: 1,
  icon: "jacdac-event.png",
  paletteLabel: "Jacdac event",
  label: function () {
    return this.name || "Jacdac event";
  },
});
import { TextureLoader } from "three";
import { dirtImage, glassImage, grassImage, logImage, woodImage } from "./images";

const dirtTexture = new TextureLoader().load(dirtImage)
const glassTexture = new TextureLoader().load(glassImage)
const grassTexture = new TextureLoader().load(grassImage)
const logTexture = new TextureLoader().load(logImage)
const woodTexture = new TextureLoader().load(woodImage)

export {
  dirtTexture,
  glassTexture,
  grassTexture,
  logTexture,
  woodTexture,
}

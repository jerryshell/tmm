import { TextureLoader } from "three";
import grassImage from './grass.jpg';

const groundTexture = new TextureLoader().load(grassImage)

export {
  groundTexture
}

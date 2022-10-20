import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import grassImage from './grass.jpg';

const groundTexture = new TextureLoader().load(grassImage)
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(100, 100)

export {
  groundTexture
}

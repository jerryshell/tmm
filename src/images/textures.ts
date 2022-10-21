import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import dirtImage from './dirt.jpg';
import glassImage from './glass.png';
import grassImage from './grass.jpg';
import logImage from './log.jpg';
import woodImage from './wood.png';

const groundTexture = new TextureLoader().load(grassImage)
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(100, 100)

const dirtTexture = new TextureLoader().load(dirtImage)
const glassTexture = new TextureLoader().load(glassImage)
const grassTexture = new TextureLoader().load(grassImage)
const logTexture = new TextureLoader().load(logImage)
const woodTexture = new TextureLoader().load(woodImage)

dirtTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export default {
  groundTexture,
  dirtTexture,
  glassTexture,
  grassTexture,
  logTexture,
  woodTexture,
}

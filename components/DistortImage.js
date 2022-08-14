import * as PIXI from 'pixi.js';
import { useEffect, useRef, useState } from 'react';
import noise from '../public/art/displacement.png';
// import myImage from '../public/art/mypic.jpg';

const myImage = document.querySelector('#foo')
// console.log('myImage',myImage)
function DistortImage() {
  const width = window.offsetWidth;
  const height = width * 1.33;
  let playground = useRef(null);

  let count = 0;
  let raf;

  const renderer = PIXI.autoDetectRenderer({ width, height, backgroundAlpha: 0});
  renderer.autoResize = true;

  const ratio = 0.2391;
  let tp, preview;
  let displacementSprite, displacementFilter, stage;

  function setScene(url) {
    // console.log('renderer.backgroundColor',renderer.backgroundColor)
    // renderer.options.backgroundColor = 'red'
    // renderer.
    renderer.resize(myImage.width, myImage.height );
    playground.current.appendChild(renderer.view);

    stage = new PIXI.Container();

    tp = PIXI.Texture.from(url);
    preview = new PIXI.Sprite(tp);

    preview.anchor.x = 0;
    preview.scale.x = ratio;
    preview.scale.y = ratio;

    displacementSprite = PIXI.Sprite.from(noise.src);

    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    stage.filters = [displacementFilter];

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    displacementFilter.scale.set(0);
    displacementSprite.x = 0;
    displacementSprite.y = 0;

    displacementSprite.scale.x = 0.5;
    displacementSprite.scale.y = 0.5;

    stage.addChild(displacementSprite);
    count = 0;
    stage.addChild(preview);

    //console.log(displacementSprite)

    requestAnimationFrame(static_animation);
    //console.log(displacementSprite.texture.baseTexture.wrapMode);
  }

  function stopAnimation() {
    cancelAnimationFrame(raf);
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    stage.filters = [displacementFilter];

    requestAnimationFrame(exit);
    //setScene(bgImage, "CLAMP");
    //console.log(displacementSprite.texture.baseTexture.wrapMode)
  }

  function startAnimation() {
    cancelAnimationFrame(raf);
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    stage.filters = [displacementFilter];

    requestAnimationFrame(animate);
  }

  function static_animation() {
    displacementFilter.scale.set(0);
    renderer.render(stage);
    raf = requestAnimationFrame(static_animation);
  }

  function exit() {
    displacementFilter.scale.set(Math.max(count, 0));

    count = Math.max(0, count - 0.5);
    //console.log(displacementSprite.texture.baseTexture.wrapMode)
    //console.log(displacementSprite.scale.x)
    displacementSprite.x += 2;
    displacementSprite.y += 2;


    if (stage !== null) {
      renderer.render(stage);
    }

    raf = requestAnimationFrame(exit);
  }

  function animate() {
    //console.log(hover)

    //console.log(displacementSprite.scale.y, count)
    displacementFilter.scale.set(Math.min(20, count));

    displacementSprite.x += 1;
    displacementSprite.y += 0.1;

    //console.log(displacementSprite.texture.baseTexture.wrapMode)

    count = Math.min(20, count + 1);

    if (stage !== null) {
      renderer.render(stage);
    }

    raf = requestAnimationFrame(animate);
  }

  useEffect(() => {
    setScene(myImage.src);
  }, []);

  //console.log(hover)

  return (
    <div
      style={{ position: 'absolute', top: 0, zIndex:999}}
      ref={playground}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}></div>
  );
}
export default DistortImage;

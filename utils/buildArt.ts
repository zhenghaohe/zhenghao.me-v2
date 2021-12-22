import fs from 'fs/promises';
import { join } from 'path';
import glob from 'tiny-glob';

const RootDir = '.';

function doubleDigit(n: number) {
  return n > 9 ? '' + n : '0' + n;
}

async function buildArt() {
  const files = await glob(`*`, { cwd: `${RootDir}/public/art/` });
  const images: string[] = [];
  const videos: string[] = [];
  const videoPosters: string[] = [];

  for (const file of files) {
    const [name, extension] = file.split('.');

    if (extension === 'jpg') {
      files.includes(`${name}.mp4`) ? videoPosters.push(file) : images.push(file);
    } else if (extension === 'mp4') {
      videos.push(file);
    }
  }

  images.reverse();
  videos.reverse();

  const exports = ['// This is a generated file\n\n'];
  let count = 1;
  const imgNames: string[] = [];
  for (const image of images) {
    const name = `file${doubleDigit(count)}`;
    imgNames.push(name);
    exports.push(`import ${name} from '../public/art/${image}';\n`);
    count += 1;
  }

  count = 1;
  const posterNames: string[] = [];
  const videoPaths: string[] = [];
  for (const poster of videoPosters) {
    const name = `poster${doubleDigit(count)}`;
    posterNames.push(name);
    exports.push(`import ${name} from '../public/art/${poster}';\n`);
    count += 1;
    videoPaths.push(`["/art/${poster.replace('.jpg', '.mp4')}", ${name}.blurDataURL]`);
  }

  exports.push(`\nexport const images = [${imgNames.toString()}];\n`);
  exports.push(
    `\nexport const videos: Array<[string, string | undefined]> = [${videoPaths.toString()}];\n`
  );

  await fs.writeFile(join('.', 'utils', 'arts.ts'), exports, 'utf-8');
}

buildArt();

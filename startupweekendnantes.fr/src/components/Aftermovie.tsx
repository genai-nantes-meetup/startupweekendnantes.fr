import html from '../html/sections/Aftermovie.html?raw';

export default function Aftermovie() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

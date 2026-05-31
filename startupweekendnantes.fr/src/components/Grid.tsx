import html from '../html/sections/Grid.html?raw';

export default function Grid() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import html from '../html/sections/Agenda.html?raw';

export default function Agenda() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

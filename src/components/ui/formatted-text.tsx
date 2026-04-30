/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
export type FormattedTextProps = {
  content: {type: string, level: number, text: string, caption: string, src:string, alt:string, items: any[]}
}

export const FormattedText = ({content}: FormattedTextProps) => {
  const {type, text, level, items, src, alt, caption} = content;
  const headingLevel = (txt: string) => {
    if(level === 1) {
      return <h1 className="text-5xl font-bold mb-8">{txt}</h1>
    } else if (level === 2){
      return <h2 className="text-3xl font-bold mb-6">{txt}</h2>
    } else if (level === 3){
      return <h3 className="text-2xl font-bold mb-5">{txt}</h3>
    } else if (level === 4){
      return <h4 className="text-xl font-bold mb-5">{txt}</h4>
    } else if (level === 5){
      return <h5 className="text-lg font-bold mb-3">{txt}</h5>
    } else if (level === 6){
      return <h6 className="text-base font-bold mb-3">{txt}</h6>
    }
  }

  const formatText = () => {
    if (type === "heading") {
      return headingLevel(text)
    } else if (type === "unordered-list"){
      return (
        <ul className="list-disc list-inside">
          {items.map((i) => <li key={i} dangerouslySetInnerHTML={{__html: i.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}} />)}
        </ul>
      )
    } else if (type === "ordered-list"){
      return (
        <ol>
          {items.map((i) => <li key={i}>{i.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</li>)}
        </ol>
      )
    } else if (type === "image") {
      if(!src) return <></>;
      return <figure><Image src={src} alt={alt} width={400} height={300} /><figcaption>{caption}</figcaption></figure>
    } else if(type === "blockquote") {
      return <blockquote className="border-l-4 pl-4 mb-8 border-l-(--dark) italic text-lg"><p>{text}</p></blockquote>
    } else {
      return <p className="first-line:indent-4 mb-8 [&_a]:font-bold [&_a]:hover:underline" dangerouslySetInnerHTML={{__html: text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>')}} />
    } 
  }
  return formatText()
}
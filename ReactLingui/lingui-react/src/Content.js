import React,{useState} from 'react'
import { Trans,Plural,selectOrdinal,select } from '@lingui/macro';
import { i18n } from '@lingui/core'

const Content = () => {

   const [language, setLanguage] = useState("en");

   const handleOnclick = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
      loadCatalog(e.target.value);
    };

    async function loadCatalog(locale) {
      const { messages } = await import(`./locales/${locale}/messages.js`)
      i18n.load(locale, messages)
      i18n.activate(locale)
    }

   const booksCount = 1;
   const count = 10;
   const gender = 'male';

   const number = selectOrdinal(count, {
      one: "1st",
      two: "2nd",
      few: "3rd",
      other: "next",
   })

   const message = select(gender, {
      male: "he",
      female: "she",
      other: "they"
   })

   return (
      <div>
      <button value="ar" onClick={handleOnclick}>
        Arabic
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <button value="es" onClick={handleOnclick}>
        Spanish
      </button>
      <button value="zh" onClick={handleOnclick}>
        Chinese
      </button>

        <h1 style={{textAlign:'center', color:'red'}}><Trans>Welcome to the tutorial</Trans></h1>
        
        <h3 style={{textAlign:'center', color:'blue'}}>
            <Plural
               value={booksCount}
               _1="There's one book"
               other="There're # books"
            />
         </h3>
         <h3 style={{textAlign:'center', color:'purple'}}>
            <Trans>
               {i18n.date("2020/01/27")}
            </Trans>
         </h3>

         <h3 style={{textAlign:'center', color:'black'}}>
            {number} 
            <Trans>
               book is "Shelock Holmes"
            </Trans> 
         </h3>

         <h3 style={{textAlign:'center', color:'green'}}>
         {message}
         <Trans>
             bought the book
         </Trans> 
         </h3>
         
      </div>
   )
}
export default Content;
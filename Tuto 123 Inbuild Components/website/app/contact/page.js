
import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <script strategy="lazyOnload">
        {`alert("welcome to contact page")`}
        {console.log("welcome to contact page")}
      </script>
      I am contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is a page where you can contact Facebook and we can connect with the world using facebook",
};

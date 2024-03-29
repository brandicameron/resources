export const copyCode = [
  {
    title: 'Media Query',
    code: `@media screen and (max-width: 600px) {

    }`,
  },
  {
    title: 'Reduced Motion',
    code: `@media (prefers-reduced-motion) {
      
    }
    `,
  },
  {
    title: 'Screen Reader Only',
    code: `.sr-only:not(:focus) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }`,
  },
  {
    title: 'Grid',
    code: `display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    place-content: center;
    align-items: stretch;
    justify-items: stretch;
    gap: 2rem;`,
  },
  {
    title: 'Center Absolute XY',
    code: `position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);`,
  },
  {
    title: 'Center Absolute X',
    code: `position: absolute;
    left: 50%;
    transform: translateX(-50%);`,
  },
  {
    title: 'Flex Center',
    code: `display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;`,
  },
  {
    title: 'Skip Link',
    code: `<a className='skip-to-content-link' href='#skip-target'>Skip to content</a>`,
  },
  {
    title: 'Safari bottom bar fix',
    code: `.container {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }`,
  },
  {
    title: 'Box Shadow',
    code: `box-shadow: 5px 5px 10px -5px rgba(0 0 0 / 50%);`,
  },
  {
    title: 'Large Box Shadow',
    code: `box-shadow: 15px 20px 50px -20px rgb(34 34 34 / 70%);`,
  },
  {
    title: 'Filter Shadow',
    code: `filter: drop-shadow(5px 5px 5px rgba(0 0 0 / 30%));`,
  },
  {
    title: 'Inset Shadow',
    code: `box-shadow: inset 2px 2px 5px rgba(0 0 0 / 25%);`,
  },
  {
    title: 'Subtle Shadow',
    code: `box-shadow: 2.5rem 3.75rem 3rem -3rem rgba(0 0 0 / 30%);`,
  },
  {
    title: 'Linear Gradient',
    code: `background: linear-gradient(to right, #fc0e1b, #cd27fb);`,
  },
  {
    title: 'Random Unsplash',
    code: `'http://source.unsplash.com/random/150x150'`,
  },
  {
    title: 'Email Link',
    code: `<a href='mailto:{email}?subject={subject}&body={content}'>Email Us</a>`,
  },
  {
    title: 'SMS Link',
    code: `<a href='sms:{phone}?body={content}'>Send us a message</a>`,
  },
  {
    title: 'Phone Link',
    code: `<a href='tel:{phone}'>Call us</a>`,
  },
  {
    title: 'Picture Element',
    code: `<picture>
    <source media="(min-width: 715px)" srcset="xxxxxxx.jpg" type="image/webp" />
    <source media="(min-width: 715px)" srcset="xxxxxxx.jpg" type="image/jpeg" />
    <img src="mobile-img" alt="xxxxxxx" />
    </picture>`,
  },
  {
    title: 'Srcset',
    code: `<img
    srcset="xxxxxxx.jpg 480w, xxxxxxx.jpg 800w"
    sizes="(max-width: 600px) 480px, 800px"
    src="xxxxxxx.jpg.jpg"
    alt="xxxxxxx" />`,
  },
  {
    title: 'Get unique values in array',
    code: `const uniqueValues = [...new Set(array)];`,
  },
  {
    title: 'Error Message CSS',
    code: `.error {
      color: red;
      background: pink;
      border: 1px solid red;
      border-radius: 4px;
      padding: 8px;
      margin: 10px 0;
    }`,
  },
  {
    title: 'Time (ex: 2:25 PM)',
    code: `const time = new Date().toLocaleTimeString()
    .replace(/(.*)\D\d+/, "$1");`,
  },
  {
    title: 'Next.js Lang',
    code: `module.exports = {
      nextConfig,
      i18n: {
      locales: ['en'],
      defaultLocale: 'en',
      },
      };`,
  },
  {
    title: '@font-face',
    code: `@font-face {
  font-family: "Inter";
  font-weight: 400;
  font-display: swap;
  src: local("Inter-Regular"),
    url("") format("woff2"),
    url("") format("woff");
}`,
  },
  {
    title: 'Add class when map()',
    code: `className={styles[link.class]}`,
  },
  {
    title: 'Fetch Hook',
    code: `import { useState, useEffect } from 'react';

    export function useFetchData(url) {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const handleResponse = (response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      };
    
      useEffect(() => {
        setLoading(true);
        fetch(url)
          .then(handleResponse)
          .then((data) => {
            setData(data.data.memes);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      return { data, loading };
    }
    `,
  },
  {
    title: 'Fetch Hook with Async',
    code: `import { useState, useEffect } from "react";

    export function useFetchData(url) {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error("Error status: " + response.status);
          }
    
          const data = await response.json();
    
          setData(data);
          setLoading(false);
        };
    
        fetchData();
      }, []);
    
      return { data, loading };
    }
    `,
  },
  {
    title: 'Random UUID - Built-in Browser Method',
    code: `crypto.randomUUID()`,
  },
];

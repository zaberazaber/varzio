// themes/draculaTheme.ts

const draculaTheme = {
    plain: {
      color: "#f8f8f2",
      backgroundColor: "#282a36",
    },
    styles: [
      {
        types: ["comment"],
        style: {
          color: "#6272a4",
          fontStyle: "italic",
        },
      },
      {
        types: ["string", "inserted"],
        style: {
          color: "#50fa7b",
        },
      },
      {
        types: ["number"],
        style: {
          color: "#bd93f9",
        },
      },
      {
        types: ["builtin", "char", "constant", "function"],
        style: {
          color: "#ffb86c",
        },
      },
      {
        types: ["punctuation", "selector"],
        style: {
          color: "#f8f8f2",
        },
      },
      {
        types: ["variable"],
        style: {
          color: "#8be9fd",
        },
      },
      {
        types: ["class-name", "attr-name"],
        style: {
          color: "#ff79c6",
        },
      },
      {
        types: ["tag", "deleted"],
        style: {
          color: "#ff5555",
        },
      },
      {
        types: ["operator"],
        style: {
          color: "#ff79c6",
        },
      },
      {
        types: ["boolean"],
        style: {
          color: "#bd93f9",
        },
      },
      {
        types: ["keyword"],
        style: {
          color: "#ff79c6",
        },
      },
      {
        types: ["doctype"],
        style: {
          color: "#f8f8f2",
          fontStyle: "italic",
        },
      },
      {
        types: ["property", "namespace"],
        style: {
          color: "#66d9ef",
        },
      },
    ],
  };
  
  export default draculaTheme;
  
// themes/customDarkTheme.ts

const customDarkTheme = {
    plain: {
      color: "#f8f8f2",
      backgroundColor: "#282a36",
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#6272a4",
          fontStyle: "italic",
        },
      },
      {
        types: ["punctuation"],
        style: {
          color: "#f8f8f2",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["tag", "operator", "number"],
        style: {
          color: "#bd93f9",
        },
      },
      {
        types: ["property", "function"],
        style: {
          color: "#50fa7b",
        },
      },
      {
        types: ["tag-id", "selector", "atrule-id"],
        style: {
          color: "#8be9fd",
        },
      },
      {
        types: ["attr-name"],
        style: {
          color: "#ffb86c",
        },
      },
      {
        types: ["boolean", "string", "entity", "url", "attr-value", "keyword"],
        style: {
          color: "#ff79c6",
        },
      },
      {
        types: ["attr-value", "class-name"],
        style: {
          color: "#f1fa8c",
        },
      },
      {
        types: ["inserted"],
        style: {
          color: "#50fa7b",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "#ff5555",
        },
      },
    ],
  };
  
  export default customDarkTheme;
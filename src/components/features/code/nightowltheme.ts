// themes/nightOwlTheme.ts

const nightOwlTheme = {
    plain: {
      color: "#d6deeb",
      backgroundColor: "#011627",
    },
    styles: [
      {
        types: ["comment"],
        style: {
          color: "#637777",
          fontStyle: "italic",
        },
      },
      {
        types: ["string", "inserted"],
        style: {
          color: "#ecc48d",
        },
      },
      {
        types: ["number"],
        style: {
          color: "#f78c6c",
        },
      },
      {
        types: ["builtin", "char", "constant", "function"],
        style: {
          color: "#82aaff",
        },
      },
      {
        types: ["punctuation", "selector"],
        style: {
          color: "#c792ea",
        },
      },
      {
        types: ["variable"],
        style: {
          color: "#addb67",
        },
      },
      {
        types: ["class-name", "attr-name"],
        style: {
          color: "#ffcb8b",
        },
      },
      {
        types: ["tag", "deleted"],
        style: {
          color: "#ef5350",
        },
      },
      {
        types: ["operator"],
        style: {
          color: "#c792ea",
        },
      },
      {
        types: ["boolean"],
        style: {
          color: "#ff5874",
        },
      },
      {
        types: ["keyword"],
        style: {
          color: "#c792ea",
        },
      },
      {
        types: ["doctype"],
        style: {
          color: "#d6deeb",
          fontStyle: "italic",
        },
      },
      {
        types: ["property", "namespace"],
        style: {
          color: "#80cbc4",
        },
      },
    ],
  };
  
  export default nightOwlTheme;
  
  
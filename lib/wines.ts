export type Wine = {
  id: string
  name: string
  category: "Red Wine" | "White Wine"
  ingredients: string
  nutrients: {
    brennwert: {
      kj: number
      kcal: number
    }
    fett: number
    gesaettigteFettsaeuren: number
    kohlenhydrate: number
    zucker: number
    eiweiss: number
    salz: number
  }
}

export const wines: Wine[] = [
  // White Wines
  // Brennwert needs to be amended
  {
    id: "gv-stb",
    name: "Grüner Veltliner Ried Steinberg",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "gv-hb",
    name: "Grüner Veltliner Ried Hohenberg",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "gv-ar",
    name: "Grüner Veltliner Alte Rebe",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "rv-stb",
    name: "Roter Veltliner Ried Steinberg",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "rr",
    name: "Riesling Sand & Schotter",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "wb",
    name: "Weißer Burgunder",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "gm",
    name: "Gelber Muskateller",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "gv-li",
    name: "Grüner Veltliner Liter",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Saccharose, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "mth",
    name: "Rivaner Liter",
    category: "White Wine",
    ingredients: "Zutaten: Trauben, Saccharose, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  // Red Wines
  {
    id: "zw-ro",
    name: "Zweigelt Rosé",
    category: "Red Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "zw-cl",
    name: "Zweigelt Classic",
    category: "Red Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "zw-re",
    name: "Zweigelt Reserve",
    category: "Red Wine",
    ingredients: "Zutaten: Trauben, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
  {
    id: "zw-li",
    name: "Zweigelt Liter",
    category: "Red Wine",
    ingredients: "Zutaten: Trauben, Saccharose, Säureregulatoren: E 296 und E 334; Stabilisator: E 353; Antioxidantien: E 220 (Sulfite);",
    nutrients: {
      brennwert: {
        kj: 308,
        kcal: 74,
      },
      fett: 0,
      gesaettigteFettsaeuren: 0,
      kohlenhydrate: 0.9,
      zucker: 0.1,
      eiweiss: 0,
      salz: 0,
    },
  },
]
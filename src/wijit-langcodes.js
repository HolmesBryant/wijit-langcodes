/**
 * @class WijitLangcodes
 * @description A custom web component representing a datalist containing IANA language codes for most languages.
 * @extends HTMLElement
 * @author Holmes Bryant <https://github.com/HolmesBryant>
 * @license GPL-3.0
 */
export class WijitLangcodes extends HTMLElement {
  /**
   * @static
   * @property {string} registryUrl - URL to the language subtag registry JSON data.
   * @default 'https://unpkg.com/language-subtag-registry@0.1.0/data/json/registry.json'
   */
  static registryUrl =
    "https://unpkg.com/language-subtag-registry@0.1.0/data/json/registry.json";

  /**
   * @static
   * @property {object} registry - Hard-coded registry data (internal use).
   * @private
   */
  static registry = [
    {
      Description: ["Afrikaans"],
      Subtag: "af",
    },
    {
      Description: ["Amharic, አማርኛ"],
      Subtag: "am",
    },
    {
      Description: ["Arabic, العربية"],
      Subtag: "ar",
    },
    {
      Description: ["Mapudungun, Mapudungun"],
      Subtag: "arn",
    },
    {
      Description: ["Assamese, অসমীয়া"],
      Subtag: "as",
    },
    {
      Description: ["Azerbaijani, Azərbaycan"],
      Subtag: "az",
    },
    {
      Description: ["Bashkir, Башҡорт"],
      Subtag: "ba",
    },
    {
      Description: ["Belarusian, беларуская"],
      Subtag: "be",
    },
    {
      Description: ["Bulgarian, български"],
      Subtag: "bg",
    },
    {
      Description: ["Bengali, বাংলা"],
      Subtag: "bn",
    },
    {
      Description: ["Tibetan, བོད་ཡིག"],
      Subtag: "bo",
    },
    {
      Description: ["Breton, brezhoneg"],
      Subtag: "br",
    },
    {
      Description: ["Bosnian, bosanski/босански"],
      Subtag: "bs",
    },
    {
      Description: ["Catalan, català"],
      Subtag: "ca",
    },
    {
      Description: ["Corsican, Corsu"],
      Subtag: "co",
    },
    {
      Description: ["Czech, čeština"],
      Subtag: "cs",
    },
    {
      Description: ["Welsh, Cymraeg"],
      Subtag: "cy",
    },
    {
      Description: ["Danish, dansk"],
      Subtag: "da",
    },
    {
      Description: ["German, Deutsch"],
      Subtag: "de",
    },
    {
      Description: ["Lower Sorbian, dolnoserbšćina"],
      Subtag: "dsb",
    },
    {
      Description: ["Divehi, ދިވެހިބަސް"],
      Subtag: "dv",
    },
    {
      Description: ["Greek, Ελληνικά"],
      Subtag: "el",
    },
    {
      Description: ["English, English"],
      Subtag: "en",
    },
    {
      Description: ["Spanish, español"],
      Subtag: "es",
    },
    {
      Description: ["Estonian, eesti"],
      Subtag: "et",
    },
    {
      Description: ["Basque, euskara"],
      Subtag: "eu",
    },
    {
      Description: ["Persian,فارسى"],
      Subtag: "fa",
    },
    {
      Description: ["Finnish, suomi"],
      Subtag: "fi",
    },
    {
      Description: ["Filipino, Filipino"],
      Subtag: "fil",
    },
    {
      Description: ["Faroese, føroyskt"],
      Subtag: "fo",
    },
    {
      Description: ["French, français"],
      Subtag: "fr",
    },
    {
      Description: ["Frisian, Frysk"],
      Subtag: "fy",
    },
    {
      Description: ["Irish, Gaeilge"],
      Subtag: "ga",
    },
    {
      Description: ["Scottish Gaelic, Gàidhlig"],
      Subtag: "gd",
    },
    {
      Description: ["Galician, galego"],
      Subtag: "gl",
    },
    {
      Description: ["Swiss German, Schweizerdeutsch"],
      Subtag: "gsw",
    },
    {
      Description: ["Gujarati, ગુજરાતી"],
      Subtag: "gu",
    },
    {
      Description: ["Hausa, Hausa"],
      Subtag: "ha",
    },
    {
      Description: ["Hebrew, עברית"],
      Subtag: "he",
    },
    {
      Description: ["Hindi, हिंदी"],
      Subtag: "hi",
    },
    {
      Description: ["Croatian, hrvatski"],
      Subtag: "hr",
    },
    {
      Description: ["Serbo-Croatian, srpskohrvatski/српскохрватски"],
      Subtag: "hrv",
    },
    {
      Description: ["Upper Sorbian, hornjoserbšćina"],
      Subtag: "hsb",
    },
    {
      Description: ["Hungarian, magyar"],
      Subtag: "hu",
    },
    {
      Description: ["Armenian, Հայերեն"],
      Subtag: "hy",
    },
    {
      Description: ["Indonesian, Bahasa Indonesia"],
      Subtag: "id",
    },
    {
      Description: ["Igbo, Igbo"],
      Subtag: "ig",
    },
    {
      Description: ["Yi, ꆈꌠꁱꂷ"],
      Subtag: "ii",
    },
    {
      Description: ["Icelandic, íslenska"],
      Subtag: "is",
    },
    {
      Description: ["Italian, italiano"],
      Subtag: "it",
    },
    {
      Description: ["Inuktitut, Inuktitut /ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕ)"],
      Subtag: "iu",
    },
    {
      Description: ["Japanese, 日本語"],
      Subtag: "ja",
    },
    {
      Description: ["Georgian, ქართული"],
      Subtag: "ka",
    },
    {
      Description: ["Kazakh, Қазақша"],
      Subtag: "kk",
    },
    {
      Description: ["Greenlandic, kalaallisut"],
      Subtag: "kl",
    },
    {
      Description: ["Khmer, ខ្មែរ"],
      Subtag: "km",
    },
    {
      Description: ["Kannada, ಕನ್ನಡ"],
      Subtag: "kn",
    },
    {
      Description: ["Korean, 한국어"],
      Subtag: "ko",
    },
    {
      Description: ["Konkani, कोंकणी"],
      Subtag: "kok",
    },
    {
      Description: ["Kurdi, کوردی/Kurdî"],
      Subtag: "kb",
    },
    {
      Description: ["Kyrgyz, Кыргыз"],
      Subtag: "ky",
    },
    {
      Description: ["Luxembourgish, Lëtzebuergesch"],
      Subtag: "lb",
    },
    {
      Description: ["Lao, ລາວ"],
      Subtag: "lo",
    },
    {
      Description: ["Lithuanian, lietuvių"],
      Subtag: "lt",
    },
    {
      Description: ["Latvian, latviešu"],
      Subtag: "lv",
    },
    {
      Description: ["Maori, Reo Māori"],
      Subtag: "mi",
    },
    {
      Description: ["Macedonian, македонски јазик"],
      Subtag: "mk",
    },
    {
      Description: ["Malayalam, മലയാളം"],
      Subtag: "ml",
    },
    {
      Description: ["Mongolian, Монгол хэл/ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ"],
      Subtag: "mn",
    },
    {
      Description: ["Mohawk, Kanien'kéha"],
      Subtag: "moh",
    },
    {
      Description: ["Marathi, मराठी"],
      Subtag: "mr",
    },
    {
      Description: ["Malay, Bahasa Malaysia"],
      Subtag: "ms",
    },
    {
      Description: ["Maltese, Malti"],
      Subtag: "mt",
    },
    {
      Description: ["Burmese, မြန်မာဘာသာ"],
      Subtag: "my",
    },
    {
      Description: ["Norwegian (Bokmål)"],
      Subtag: " norsk (bokmål)",
    },
    {
      Description: ["Nepali, नेपाली (नेपाल)"],
      Subtag: "ne",
    },
    {
      Description: ["Dutch, Nederlands"],
      Subtag: "nl",
    },
    {
      Description: ["Norwegian (Nynorsk)"],
      Subtag: " norsk (nynorsk)",
    },
    {
      Description: ["Norwegian, norsk"],
      Subtag: "no",
    },
    {
      Description: ["Occitan, occitan"],
      Subtag: "oc",
    },
    {
      Description: ["Odia, ଓଡ଼ିଆ"],
      Subtag: "or",
    },
    {
      Description: ["Punjabi, ਪੰਜਾਬੀ"],
      Subtag: "pa",
    },
    {
      Description: ["Polish, polski"],
      Subtag: "pl",
    },
    {
      Description: ["Dari,درى"],
      Subtag: "prs",
    },
    {
      Description: ["Pashto, پښتو"],
      Subtag: "ps",
    },
    {
      Description: ["Portuguese, português"],
      Subtag: "pt",
    },
    {
      Description: ["K'iche, K'iche"],
      Subtag: "quc",
    },
    {
      Description: ["Quechua, runasimi"],
      Subtag: "qu",
    },
    {
      Description: ["Romansh, Rumantsch"],
      Subtag: "rm",
    },
    {
      Description: ["Romanian, română"],
      Subtag: "ro",
    },
    {
      Description: ["Russian, русский"],
      Subtag: "ru",
    },
    {
      Description: ["Kinyarwanda, Kinyarwanda"],
      Subtag: "rw",
    },
    {
      Description: ["Sanskrit, संस्कृत"],
      Subtag: "sa",
    },
    {
      Description: ["Yakut, саха"],
      Subtag: "sah",
    },
    {
      Description: ["Sami (Northern)"],
      Subtag: " davvisámegiella",
    },
    {
      Description: ["Sinhala, සිංහල"],
      Subtag: "si",
    },
    {
      Description: ["Slovak, slovenčina"],
      Subtag: "sk",
    },
    {
      Description: ["Slovenian, slovenski"],
      Subtag: "sl",
    },
    {
      Description: ["Sami (Southern), åarjelsaemiengiele"],
      Subtag: "sma",
    },
    {
      Description: ["Sami (Lule), julevusámegiella"],
      Subtag: "smj",
    },
    {
      Description: ["Sami (Inari), sämikielâ"],
      Subtag: "smn",
    },
    {
      Description: ["Sami (Skolt), sääʹmǩiõll"],
      Subtag: "sms",
    },
    {
      Description: ["Albanian, shqip"],
      Subtag: "sq",
    },
    {
      Description: ["Serbian, srpski/српски"],
      Subtag: "sr",
    },
    {
      Description: ["Sesotho, Sesotho sa Leboa"],
      Subtag: "st",
    },
    {
      Description: ["Swedish, svenska"],
      Subtag: "sv",
    },
    {
      Description: ["Kiswahili, Kiswahili"],
      Subtag: "sw",
    },
    {
      Description: ["Syriac, ܣܘܪܝܝܐ"],
      Subtag: "syc",
    },
    {
      Description: ["Tamil, தமிழ்"],
      Subtag: "ta",
    },
    {
      Description: ["Telugu, తెలుగు"],
      Subtag: "te",
    },
    {
      Description: ["Tajik, Тоҷикӣ"],
      Subtag: "tg",
    },
    {
      Description: ["Thai, ไทย"],
      Subtag: "th",
    },
    {
      Description: ["Turkmen, türkmençe"],
      Subtag: "tk",
    },
    {
      Description: ["Tswana, Setswana"],
      Subtag: "tn",
    },
    {
      Description: ["Turkish, Türkçe"],
      Subtag: "tr",
    },
    {
      Description: ["Tatar, Татарча"],
      Subtag: "tt",
    },
    {
      Description: ["Tamazight, Tamazight"],
      Subtag: "tzm",
    },
    {
      Description: ["Uyghur, ئۇيغۇرچە"],
      Subtag: "ug",
    },
    {
      Description: ["Ukrainian, українська"],
      Subtag: "uk",
    },
    {
      Description: ["Urdu, اُردو"],
      Subtag: "ur",
    },
    {
      Description: ["Uzbek, Uzbek/Ўзбек"],
      Subtag: "uz",
    },
    {
      Description: ["Vietnamese, Tiếng Việt"],
      Subtag: "vi",
    },
    {
      Description: ["Wolof, Wolof"],
      Subtag: "wo",
    },
    {
      Description: ["Xhosa, isiXhosa"],
      Subtag: "xh",
    },
    {
      Description: ["Yoruba, Yoruba"],
      Subtag: "yo",
    },
    {
      Description: ["Chinese"],
      Subtag: "中文",
    },
    {
      Description: ["Zulu, isiZulu"],
      Subtag: "zu",
    },
  ];

  /**
   * @static
   * @property {object} expandedRegistry - Stores data which is fetched from the CDN.
   * @private
   */
  static expandedRegistry;

  /**
   * @static
   * @property {object[]} entries - Processed language subtag entries for dropdown population (internal use).
   * @private
   */
  static entries;

  /**
   * @static
   * @property {object[]} expandedEntries - Processed language entries for dropdown population of expanded.
   * @private
   */
  static expandedEntries;

  /**
   * @static
   * @property {string[]} observedAttributes - List of attributes to observe for changes.
   */
  static observedAttributes = ["extended", "listid"];

  /**
   * @private
   * @property {boolean} #extended - Flag indicating whether to use up-to-date data from the CDN.
   */
  #extended = false;

  /**
   * @private
   * @property {string} #listid - The id of the datalist element
   */
  #listid = "wijit-lang-list";

  /**
   * @constructor
   */
  constructor() {
    super();
    this.start = new Date();
  }

  /**
   * @lifecycle
   * @description Invoked when the component is inserted into the DOM.
   */
  connectedCallback() {
    this.innerHTML = `<datalist id="${this.listid}"></datalist>`;
    if (!this.extended) this.build();
  }

  /**
   * @lifecycle
   * @description Invoked when an observed attribute changes.
   * @param {string} attr - The attribute that changed.
   * @param {string} oldval - The old value of the attribute.
   * @param {string} newval - The new value of the attribute.
   */
  attributeChangedCallback(attr, oldval, newval) {
    this[attr] = newval;
  }

  /**
   * @private
   * @description Builds the component based on updated data (internal use).
   */
  buildFromUpdated() {
    fetch(WijitLangcodes.registryUrl)
      .then((response) => response.json())
      .then((arr) => {
        WijitLangcodes.expandedRegistry = arr;
      })
      .then((data) => {
        if (WijitLangcodes.expandedEntries instanceof DocumentFragment) {
          datalist.append(WijitLangcodes.expandedEntries.cloneNode(true));
        } else {
          this.addEntries();
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  /**
   * @private
   * @description Builds the component's structure and  populates the datalist (internal use).
   * This method is called when the component is  first inserted into the DOM or when the `extended` flag is set to `false` (default  behavior).
   * @returns {boolean} Indicates success (`true`) or  failure (`false`) of the build process.
   */
  build() {
    const datalist = this.querySelector("datalist");
    if (WijitLangcodes.entries instanceof DocumentFragment) {
      datalist.append(WijitLangcodes.entries.cloneNode(true));
    } else {
      this.addEntries();
    }

    return true;
  }

  /**
   * @private
   * @description Called during the build process to populate the `datalist` element with options based on the fetched or pre-defined language data.
   */
  addEntries() {
    const datalist = this.querySelector("datalist");
    const option = document.createElement("option");
    const frag = new DocumentFragment();
    const reg = this.extended
      ? WijitLangcodes.expandedRegistry
      : WijitLangcodes.registry;

    for (const obj of reg) {
      const opt = option.cloneNode();
      opt.value = obj.Subtag;
      opt.textContent = `${obj.Description.join(", ")} (${obj.Subtag})`;
      frag.append(opt);
    }

    if (this.extended) {
      WijitLangcodes.expandedEntries = frag.cloneNode(true);
    } else {
      WijitLangcodes.entries = frag.cloneNode(true);
    }

    datalist.append(frag);
  }

  /**
   * @getter
   * @description Returns the current value of the   internal `extended` flag. This flag controls whether the component rebuilds itself using data fetched from the CDN.
   * @returns {boolean} The current value of the `extended` flag.
   */
  get extended() {
    return this.#extended;
  }

  /**
   * @setter
   * @description Updates the internal `extended` flag to control component behavior.
   *  - Setting to `false` (or the boolean value `false`) indicates the component should build itself using the default data.
   *  - Setting to any other truthy value (including   `true` or a string value other than `"false"`) triggers a rebuild using the `buildFromUpdated` method.
   * @param {boolean | string} value - The new value for the `extended` flag.
   */
  set extended(value) {
    switch (value) {
      case "false":
      case false:
        this.#extended = false;
      default:
        this.#extended = true;
        this.buildFromUpdated();
    }
  }

  /**
   * @getter
   * @description Returns the current value of the   internal `listid` property. This property determines the id of the datalist element.
   * @returns {string} The current value of the `listid` property.
   */
  get listid() {
    return this.#listid;
  }

  /**
   * @setter
   * @description Updates the internal `listid` property, which determines the id of the datalist element.
   * @param  {string} value The new id
   */
  set listid(value) {
    this.#listid = value;
    const elem = this.querySelector("datalist");
    if (elem) elem.id = value;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!customElements.get("wijit-langcodes")) {
    customElements.define("wijit-langcodes", WijitLangcodes);
  }
});

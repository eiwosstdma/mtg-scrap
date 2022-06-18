/**
 * @param {string} formatName
 * @param {string} eventType
 * @param {{ day: number, month: number, year: number | undefined }} formatDate
 * @param {string} platform
 * @returns {Promise<string|null>}
 */
const urlBuilder = async (formatName, eventType, formatDate, platform) => {
  if (typeof formatName !== "string") {
    throw new TypeError(`${ urlBuilder.name }: formatName is not a string`);
  }

  if (!(formatDate instanceof Object)) {
    throw new TypeError(`${ urlBuilder.name }: formatDate is not an object`);
  }

  if (typeof formatDate?.month !== "number" && typeof formatDate?.day !== "number") {
    throw new TypeError(`${ urlBuilder.name }: formatDate properties are not defined`);
  }

  if (typeof eventType !== "string") {
    throw new TypeError(`${ urlBuilder.name }: eventType is not a string`);
  }

  /**
   * Need to be removed, only until another platform is supported
   */
  if (platform !== "mtgo") {
    throw new TypeError(`${ urlBuilder.name }: platform should be set to MTGO at the moment`);
  }

  if (typeof formatDate?.year !== "number") {
    formatDate.year = 2022;
  }

  if (platform === "mtgo") {
    const baseUrl = `https://magic.wizards.com/en/articles/archive/mtgo-standings/`;
    return `${baseUrl}${ formatName }-${ eventType }-${ formatDate.year }-${ formatDate.month }-${ formatDate.day }`;
  } else {
    return null;
  }
};

module.exports = {
  urlBuilder
};

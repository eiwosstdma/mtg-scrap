"use strict";
const { parse } = require("node-html-parser");

/**
 * @param {string} rawText - A string that represent the body or total html of a page
 * @returns {Promise<{}|null|void>}
 */
const parseRawData = async (rawText) => {
  const rootHtml = parse(rawText);
  /**
   * Everything from there is built with MTGO in mind, should be changed later
   */
  const decklistsHtml = rootHtml.querySelectorAll(".deck-group");
  return collectDeckListData(decklistsHtml[0].innerHTML);
};

/**
 * @param {HTMLElement} htmlElement
 * @returns {{eventId: string, dateEvent: string, format: string, host: string, datePosted: string, platform: string}}
 */
function collectTournamentMetadata (htmlElement) {


  return {
    eventId: "",
    datePosted: "",
    dateEvent: "",
    host: "",
    uri: "",
    platform: "",
    format: ""
  };
}

/**
 * @param {string} innerHTMLElement
 * @return
 */
function collectDeckListData(innerHTMLElement) {
  const element = parse(innerHTMLElement);
  const deckMetaData = element.querySelector(".deck-meta")
  const deckListName = deckMetaData.innerText.split("(")[0].replace(/\s/g, "");
  const eventNumber = deckMetaData.innerText.split(")")[1].replace(/\s/g, "");
  const score = element.querySelector("div.title-deckicon > span.deck-meta > h4").innerText.split("(")[1].slice(0, -1);
  return {
    event: eventNumber,
    playerName: deckListName,
    scoreOrPlace: score,
    mainDeckCards: {},
    sideDeckCards: {}
  }
}
module.exports = {
  parseRawData
};
